<?php
/**
 * Plugin Name: Billy
 * Plugin URI: https://wordpress.org/plugins/billy
 * Description: A business-oriented billing suite powered by WordPress.
 * Version: 1.9.3
 * Author: them.es
 * Author URI: https://them.es/plugins/billy
 * License: GPL-2.0+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain: billy
 * Domain Path: /languages
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

// Billy constants.
define( 'BILLY_PLUGIN_DIR', plugin_dir_path( __FILE__ ) );
define( 'BILLY_PLUGIN_URL', plugin_dir_url( __FILE__ ) );
define( 'BILLY_PLUGIN_FILE', __FILE__ );
define( 'REQUIRED_WP', '6.0' );
define( 'REQUIRED_PHP', '7.2' );

/**
 * On plugin deactivation.
 */
function billy_deactivate() {
	deactivate_plugins( plugin_basename( BILLY_PLUGIN_FILE ) );
}

/**
 * Admin notice: Incompatible PHP version.
 */
function billy_php_incompatible_admin_notice() {
	printf( '<div class="%1$s"><p>%2$s</p></div>', 'notice notice-error notice-billy', sprintf( __( '<strong>Warning!</strong> %1$s requires PHP %2$s (or higher) to function properly. Please upgrade your PHP version.', 'billy' ), 'Billy', REQUIRED_PHP ) );

	if ( isset( $_GET['activate'] ) ) {
		unset( $_GET['activate'] );
	}
}

/**
 * Admin notice: Incompatible WP version.
 */
function billy_wp_incompatible_admin_notice() {
	printf( '<div class="%1$s"><p>%2$s</p></div>', 'notice notice-error notice-billy', sprintf( __( '<strong>Warning!</strong> You are currently using an outdated WordPress version which is not compatible with %s. Please update WordPress to the latest version.', 'billy' ), 'Billy' ) );

	if ( isset( $_GET['activate'] ) ) {
		unset( $_GET['activate'] );
	}
}

/**
 * Admin notice: Incompatible with Classic Editor.
 */
function billy_classic_editor_admin_notice() {
	printf( '<div class="%1$s"><p>%2$s</p></div>', 'notice notice-error notice-billy', sprintf( __( '<strong>Warning!</strong> %s is not compatible with the Classic Editor. Please deactivate the Classic Editor Plugin.', 'billy' ), 'Billy' ) );

	if ( isset( $_GET['activate'] ) ) {
		unset( $_GET['activate'] );
	}
}

/**
 * Admin notice: PDF directory not writable.
 */
function billy_temp_pdfdirectory_not_writable_admin_notice() {
	printf( '<div class="%1$s"><p>%2$s</p></div>', 'notice notice-error notice-billy', sprintf( __( 'The temp directory %s is not writable. Please change the read/write permissions.', 'billy' ), '/mpdf/tmp' ) );
}

/**
 * Test if plugin is active.
 *
 * @param string $plugin Plugin slug.
 *
 * @return bool
 */
function billy_is_plugin_active( $plugin = '' ) {
	return in_array( $plugin, (array) get_option( 'active_plugins', array() ), true );
}

/**
 * Register "Billy" menu.
 */
function billy_register_menu_page() {
	add_menu_page( 'Billy', 'Billy', 'edit_private_posts', 'billy', null, 'dashicons-tickets', 10 );
}
add_action( 'admin_menu', 'billy_register_menu_page' );
define( 'BILLY_ADMIN_MENU', true );

/**
 * On load:
 * 1. Test compatibility.
 * 2. Initialize plugin.
 */
function billy_plugins_loaded() {
	if ( version_compare( PHP_VERSION, REQUIRED_PHP, '<=' ) ) {
		add_action( 'admin_notices', 'billy_php_incompatible_admin_notice' );
		// add_action( 'admin_init', 'billy_deactivate' );

		return;
	}

	global $wp_version;
	if ( version_compare( $wp_version, REQUIRED_WP, '<=' ) ) {
		add_action( 'admin_notices', 'billy_wp_incompatible_admin_notice' );
		// add_action( 'admin_init', 'billy_deactivate' );

		return;
	}

	if ( billy_is_plugin_active( 'classic-editor/classic-editor.php' ) || billy_is_plugin_active( 'disable-gutenberg/disable-gutenberg.php' ) ) {
		add_action( 'admin_notices', 'billy_classic_editor_admin_notice' );
		add_action( 'admin_init', 'billy_deactivate' );

		return;
	}

	if ( isset( $_REQUEST['post_type'] ) && false !== strpos( (string) $_REQUEST['post_type'], 'billy-' ) && ! wp_is_writable( __DIR__ . '/mpdf/tmp' ) ) {
		add_action( 'admin_notices', 'billy_temp_pdfdirectory_not_writable_admin_notice' );
	}

	// Initialize Classes.
	include_once __DIR__ . '/inc/class-billy.php';
	include_once __DIR__ . '/inc/class-blocks.php';
	include_once __DIR__ . '/inc/class-pdfexport.php';

	$billy           = new Billy();
	$billy_blocks    = new Billy_Blocks();
	$billy_pdfexport = new Billy_PDF_Export();
}
add_action( 'plugins_loaded', 'billy_plugins_loaded', 998 );
