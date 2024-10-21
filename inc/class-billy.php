<?php

defined( 'ABSPATH' ) || exit;

/**
 * Primary controller class.
 */
class Billy {
	/**
	 * Plugin Name.
	 *
	 * @access public
	 * @var string
	 */
	public static $plugin_name;

	/**
	 * Plugin Version.
	 *
	 * @access public
	 * @var string
	 */
	public static $plugin_version;

	/**
	 * Plugin Slug.
	 *
	 * @access public
	 * @var string
	 */
	public static $plugin_slug;

	/**
	 * Plugin URL.
	 *
	 * @access public
	 * @var string
	 */
	public static $plugin_url;

	/**
	 * Plugin URI.
	 *
	 * @access public
	 * @var string
	 */
	public static $plugin_uri;

	/**
	 * Plugin URL.
	 *
	 * @access public
	 * @var string
	 */
	public static $billy_url;

	/**
	 * User locale URL.
	 *
	 * @access public
	 * @var string
	 */
	public static $locale;

	/**
	 * User Currency.
	 *
	 * @access public
	 * @var string
	 */
	public static $currency;

	/**
	 * On load.
	 */
	public function __construct() {
		$plugin_data          = get_file_data(
			plugin_dir_path( __DIR__ ) . 'billy.php',
			array(
				'Name'       => 'Plugin Name',
				'Version'    => 'Version',
				'TextDomain' => 'Text Domain',
				'PluginURI'  => 'Plugin URI',
				'AuthorURI'  => 'Author URI',
			),
		);
		$plugin_name          = $plugin_data['Name'];
		self::$plugin_name    = esc_attr( $plugin_data['Name'] );
		self::$plugin_version = esc_attr( $plugin_data['Version'] );
		self::$plugin_slug    = esc_attr( $plugin_data['TextDomain'] );
		self::$plugin_url     = ( defined( 'BILLY_PLUGIN_URL' ) ? esc_url( BILLY_PLUGIN_URL ) : esc_url( plugin_dir_url( __DIR__ ) ) );
		self::$plugin_uri     = esc_url( $plugin_data['PluginURI'] );
		self::$billy_url      = esc_url( $plugin_data['AuthorURI'] );
		self::$locale         = esc_attr( str_replace( '_', '-', get_user_locale() ) );
		self::$currency       = esc_attr( get_theme_mod( 'currency', 'USD' ) );

		$this->init();
	}

	/**
	 * Plugin initiation:
	 * A helper function to initiate actions, hooks and other features needed.
	 *
	 * @return void
	 */
	public function init() {
		add_action( 'init', array( $this, 'on_init' ), 998 );
		add_action( 'after_register_post_type', array( $this, 'flush_rewrite' ) );

		// Dashboard widget.
		add_action( 'wp_dashboard_setup', array( $this, 'add_dashboard_widget' ), 998 );

		// Enqueue Frontend assets.
		add_action( 'wp_enqueue_scripts', array( $this, 'enqueue_assets' ), 998 );
		// Enqueue Backend assets.
		add_action( 'admin_enqueue_scripts', array( $this, 'enqueue_admin_assets' ), 998 );

		// Theme Customizer.
		add_action( 'customize_register', array( $this, 'wp_customizer_options' ), 998 );

		// Title Format.
		add_filter( 'private_title_format', array( $this, 'title_format' ), 10, 2 );
		add_filter( 'protected_title_format', array( $this, 'title_format' ), 10, 2 );

		// Custom Post Type wrapper.
		add_filter( 'the_content', array( $this, 'cpt_wrapper_content' ) );

		// Include Custom Posts in main query.
		// add_action( 'pre_get_posts', array( $this, 'include_invoices_in_postsquery' ) );

		// Modify Post data onsave.
		add_action( 'rest_after_insert_billy-invoice', array( $this, 'onsave_invoice' ), 10, 2 );
		add_filter( 'wp_insert_post_data', array( $this, 'keep_original_date_on_publishing' ), 10, 2 );

		add_action( 'rest_after_insert_billy-quote', array( $this, 'onsave_quote' ), 10, 2 );

		add_action( 'rest_after_insert_billy-accounting', array( $this, 'onsave_accounting' ), 10, 2 );

		// Modify REST response.
		if ( ! is_admin() ) {
			add_filter( 'rest_prepare_billy-invoice', array( $this, 'blocks_to_rest_api' ), 10, 3 );
			add_filter( 'rest_prepare_billy-quote', array( $this, 'blocks_to_rest_api' ), 10, 3 );
		}

		// Quick Edit rows.
		add_filter( 'post_row_actions', array( $this, 'remove_quick_edit_invoice' ), 10, 2 );
	}

	/**
	 * Flush rewrite rules.
	 *
	 * @return void
	 */
	public function flush_rewrite() {
		flush_rewrite_rules();
	}

	/**
	 * Add a widget to the dashboard.
	 *
	 * @return void
	 */
	public function add_dashboard_widget() {
		wp_add_dashboard_widget(
			'billy_dashboard', // Widget slug.
			sprintf( esc_html__( '%1$s %2$s', 'billy' ), self::$plugin_name, self::$plugin_version ), // Title.
			array( $this, 'dashboard_widget' ) // Display function.
		);
	}

	/**
	 * Create the function to output the dashboard widget content.
	 *
	 * @return string
	 */
	public static function dashboard_widget_content() {
		$debug = array();

		$invoices_missing_meta = new WP_Query(
			array(
				'post_type'      => 'billy-invoice',
				'post_status'    => 'private',
				'posts_per_page' => -1,
				'meta_query'     => array(
					'relation' => 'OR',
					array(
						'key'     => '_invoice_number',
						'compare' => 'NOT EXISTS',
					),
				),
			),
		);

		if ( current_user_can( 'edit_private_posts' ) && $invoices_missing_meta->have_posts() ) {
			while ( $invoices_missing_meta->have_posts() ) {
				$invoices_missing_meta->the_post();

				$debug[] = '#' . get_the_ID();
			}

			if ( wp_verify_nonce( wp_unslash( $_GET['_wpnonce'] ?? '' ) ) && isset( $_GET['fix_invoices'] ) && 'true' === $_GET['fix_invoices'] ) {
				$invoices_fix = new WP_Query(
					array(
						'post_type'      => 'billy-invoice',
						'post_status'    => 'private',
						'posts_per_page' => -1,
					),
				);

				if ( $invoices_fix->have_posts() ) {
					$row = 1;
					while ( $invoices_fix->have_posts() ) {
						$invoices_fix->the_post();

						$post_id = get_the_ID();

						// Update Post meta value.
						if ( 1 === $row ) {
							// Latest invoice.
							$invoice_number = get_theme_mod( 'invoice_number' );
						} else {
							// Next invoice.
							global $post;
							$post = get_post( $post_id );

							$get_next = get_next_post();

							if ( $get_next ) {
								// Get invoice number (next invoice).
								$invoice_number = get_post_meta( $get_next->ID, '_invoice_number', true );

								// Decrement -1.
								--$invoice_number;
							}
						}

						// Update title and slug.
						$post_title = self::get_invoice_number( $post_id );

						$fix_post = wp_update_post(
							array(
								'ID'         => $post_id,
								'post_title' => $post_title,
								'post_name'  => sanitize_title( $post_title ),
								'meta_input' => array(
									'_invoice_number' => $invoice_number,
								),
							)
						);

						++$row;
					}
				}
			}
		}

		$latest_invoices = get_posts(
			array(
				'numberposts' => 1,
				'post_status' => 'private',
				'post_type'   => 'billy-invoice',
			)
		);
		$latest_quotes   = get_posts(
			array(
				'numberposts' => 1,
				'post_status' => 'private',
				'post_type'   => 'billy-quote',
			)
		);

		return '<table class="widefat">
			<tbody>
				<tr>
					<td><strong>' . esc_html__( 'Locale', 'billy' ) . '</strong></td>
					<td><a href="' . esc_url( get_edit_profile_url() ) . '">' . esc_html( self::$locale ) . '</a></td>
				</tr>
				<tr>
					<td><strong>' . esc_html__( 'Currency', 'billy' ) . '</strong></td>
					<td>' . esc_html( self::$currency ) . '</td>
				</tr>
				<tr>
					<td><strong>' . esc_html__( 'Taxes', 'billy' ) . '</strong></td>
					<td>' . ( get_theme_mod( 'taxrates' ) ? nl2br( get_theme_mod( 'taxrates' ) ) : '-' ) . '</td>
				</tr>' .
				( $latest_invoices ? '
				<tr>
					<td><strong>' . esc_html__( 'Current invoice', 'billy' ) . '</strong></td>
					<td><a href="' . esc_url( admin_url( 'edit.php?post_type=billy-invoice' ) ) . '">' . esc_html( self::get_invoice_number( $latest_invoices[0]->ID ) ) . '</a></td>
				</tr>' : '' ) .
				( $latest_quotes ?
				'<tr>
					<td><strong>' . esc_html__( 'Current quote', 'billy' ) . '</strong></td>
					<td><a href="' . esc_url( admin_url( 'edit.php?post_type=billy-quote' ) ) . '">' . esc_html( self::get_quote_number( $latest_quotes[0]->ID ) ) . '</a></td>
				</tr>' : '' ) . '
				<tr>
					<td>' . ( isset( $fix_post ) ? '<span class="dashicons dashicons-yes-alt" aria-hidden="true" style="color: green;"></span> ' . esc_attr__( 'Problems have been solved!', 'billy' ) : ( $invoices_missing_meta->have_posts() ? '<span class="dashicons dashicons-warning" aria-hidden="true" style="color: red;"></span> The following invoices are missing required meta data: <strong>' . implode( ', ', $debug ) . '</strong>. <a href="' . add_query_arg( 'fix_invoices', 'true', wp_nonce_url( admin_url() ) ) . '" onclick="return confirm(\'Please make sure that the latest invoice number is correct. Invoice numbers will be regenerated and updated in descending order.\')">Click here to try to fix the problem</a> - Backing up the database beforehand is strongly recommended!
' : '' ) ) . '</td>
					<td><p class="customize-edit"><a href="' . esc_url( admin_url( 'customize.php?autofocus[panel]=billy_setup_panel' ) ) . '" title="' . esc_attr__( 'Edit', 'billy' ) . '">' . sprintf( __( '%1$s %2$s', 'billy' ), '<span class="dashicons dashicons-edit" aria-hidden="true"></span>', esc_html__( 'Edit', 'billy' ) ) . '</a></p></td>
				</tr>
			</tbody>
		</table>';
	}

	/**
	 * Create the function to output the dashboard widget footer.
	 *
	 * @return string
	 */
	public static function dashboard_widget_footer() {
		return '<table class="footer">
			<tbody>
				<tr>
					<td><p>' . ( class_exists( 'Billy_Pro' ) ? '<small>' . sprintf( __( 'Thank you for purchasing %s!', 'billy' ), '<strong>Billy Pro</strong> <span class="dashicons dashicons-smiley" aria-hidden="true"></span>' ) . '</small>' : '<strong><a href="' . esc_url( self::$billy_url ) . '">' . sprintf( __( '%1$s %2$s', 'billy' ), __( 'Get the <u>Pro</u> version', 'billy' ), '<span class="dashicons dashicons-external" aria-hidden="true"></span>' ) . '</a></strong><br><small>' . __( 'Premium add-on with a project management suite, WooCommerce integration, Contacts, Address Book, QR code payments, Stats & Charts, Share links, and more.', 'billy' ) . '</small></p>' ) . '<hr><p><strong><a href="' . esc_url( 'https://wordpress.org/support/plugin/' . self::$plugin_slug . '/reviews/?rate=5#new-post' ) . '">' . sprintf( __( '%1$s %2$s', 'billy' ), __( 'Please rate this Plugin', 'billy' ), ' <span class="dashicons dashicons-external" aria-hidden="true"></span>' ) . '</a></strong><br><span class="dashicons dashicons-star-filled" aria-hidden="true"></span><span class="dashicons dashicons-star-filled" aria-hidden="true"></span><span class="dashicons dashicons-star-filled" aria-hidden="true"></span><span class="dashicons dashicons-star-filled" aria-hidden="true"></span><span class="dashicons dashicons-star-filled" aria-hidden="true"></span></p></td>
					<td> </td>
					<td><a href="' . esc_url( self::$billy_url ) . '"><img src="' . esc_url( self::$plugin_url ) . 'assets/img/logo.png" class="logo" alt="Billy" /></a></td>
				</tr>
			</tbody>
		</table>';
	}

	/**
	 * Build the dashboard widget.
	 *
	 * @return void
	 */
	public static function dashboard_widget() {
		echo self::dashboard_widget_content() . self::dashboard_widget_footer();
	}

	/**
	 * Modify Post title format for private/protected posts.
	 *
	 * @param string  $format Title format.
	 * @param WP_Post $post   Current post object.
	 *
	 * @return string
	 */
	public function title_format( $format, $post ) {
		return '%s';
	}

	/**
	 * Modify Post content
	 * Add pre-header with general information, Download buttons and PDF preview.
	 *
	 * @return string
	 */
	public function preheader_render_callback() {
		$post_id = get_the_id();

		$output = '<div class="pre-header d-print-none d-admin-none">';
			// PDF export link with 'wp_rest' nonce.
			$pdf_link = wp_nonce_url(
				get_rest_url(
					null,
					'export/pdf/?id=' . $post_id,
				),
				'wp_rest'
			);
			$output  .= '<!-- wp:file {"href":"' . esc_url( $pdf_link ) . '","displayPreview":true} --><div id="pdf" class="wp-block-file"><a href="' . esc_url( $pdf_link ) . '" class="wp-block-file__button wp-element-button" download>' . sprintf( esc_html__( 'Download %s', 'billy' ), esc_html__( 'PDF', 'billy' ) ) . '</a>' . esc_html( get_the_title() ) . ' <object class="wp-block-file__embed" data="' . esc_url( $pdf_link ) . '"></object></div><!-- /wp:file -->';

		if ( defined( 'TABLE_EXPORT' ) ) {
			// Export table data as tab separated txt file.
			$output .= ' &nbsp; &nbsp; <div class="wp-block-button"><button class="wp-block-button__link wp-element-button tsv-button">' . sprintf( esc_html__( 'Export %s', 'billy' ), esc_html__( 'TSV', 'billy' ) ) . '</button></div>';
		}
		$output .= '</div>';

		return $output;
	}

	/**
	 * Wrap content.
	 *
	 * @param string $content Post content.
	 *
	 * @return string
	 */
	public function cpt_wrapper_content( $content ) {
		$post_type = get_post_type();

		if ( is_singular() && in_array( get_post_type(), array( 'billy-invoice', 'billy-quote', 'billy-accounting' ), true ) ) {
			if ( 'billy-accounting' === $post_type && ! defined( 'TABLE_EXPORT' ) ) {
				define( 'TABLE_EXPORT', true ); // Include button in preheader to export table data as tab separated txt file.
			}

			$content = '<div id="' . esc_attr( $post_type ) . '" class="' . esc_attr( $post_type ) . '-wrapper' . ( ! in_array( $post_type, array( 'billy-contact' ), true ) ? ' alignwide' : '' ) . '">' . $this->preheader_render_callback() . $content . '</div>';
		}

		return $content;
	}

	/**
	 * Include Custom Post Type in main query.
	 *
	 * @return void
	 */
	/*
	public function include_invoices_in_postsquery( $query ) {
		if ( ! is_admin() && $query->is_main_query() && $query->is_home() && current_user_can( 'edit_private_posts' ) ) {
			$query->set(
				'post_type',
				array(
					'post',
					'billy-invoice',
					'billy-quote',
				)
			);
		}
	}*/

	/**
	 * Post Type "Invoice": https://developer.wordpress.org/reference/hooks/rest_after_insert_this-post_type
	 *
	 * After save/update:
	 * - Autoincrement invoice number
	 * - Change title
	 * - Make private
	 *
	 * @param WP_Post         $post    Post object.
	 * @param WP_REST_Request $request Request object.
	 *
	 * @return void
	 */
	public function onsave_invoice( $post, $request ) {
		$post_id = $post->ID;

		$my_post = array(
			'ID' => $post_id,
		);

		$invoice_number = get_post_meta( $post_id, '_invoice_number', true );

		// Update post status if unpublished: https://wordpress.org/support/article/post-status
		if ( in_array( get_post_status( $post_id ), array( 'publish', 'future', 'private' ), true ) ) {
			// New?
			if ( ! is_numeric( $invoice_number ) ) {
				global $post;
				$post = get_post( $post_id );

				$get_prev = get_previous_post();

				if ( $get_prev ) {
					// Get invoice number (previous invoice).
					$invoice_number = (int) get_post_meta( $get_prev->ID, '_invoice_number', true );

					// Update post date: Current invoice must be published after previous invoice.
					$get_prev_unix_time = strtotime( $get_prev->post_date );

					if ( get_the_date( 'U', $post_id ) < $get_prev_unix_time ) {
						$post_date = date_i18n( 'Y-m-d H:i:s', (int) ++$get_prev_unix_time );

						$my_post['post_date']     = $post_date;
						$my_post['post_date_gmt'] = get_gmt_from_date( $post_date );
					}
				} else {
					// Get current invoice number (Customizer).
					$invoice_number = (int) get_theme_mod( 'invoice_number', 0 );
				}

				// Increment +1.
				++$invoice_number;

				// Update Post meta value.
				update_post_meta( $post_id, '_invoice_number', $invoice_number );
				// Update Customizer value.
				set_theme_mod( 'invoice_number', $invoice_number );
			}

			$my_post['post_status'] = 'private';
		}

		// Update title and slug.
		$post_title            = ( empty( $invoice_number ) ? sprintf( '%1$s (%2$s)', self::get_invoice_number( $post_id ), esc_html__( 'Pending', 'billy' ) ) : self::get_invoice_number( $post_id ) );
		$my_post['post_title'] = $post_title;
		$my_post['post_name']  = sanitize_title( $post_title );

		wp_update_post( $my_post );
	}

	/**
	 * Post Type "Quote".
	 *
	 * After save/update:
	 * - Autoincrement quote number
	 * - Change title
	 * - Make private
	 *
	 * @param WP_Post         $post    Post object.
	 * @param WP_REST_Request $request Request object.
	 *
	 * @return void
	 */
	public function onsave_quote( $post, $request ) {
		$post_id = $post->ID;
		// $post_title = get_the_date( 'Ymd', $post_id );

		$my_post = array(
			'ID' => $post_id,
		);

		$quote_number = get_post_meta( $post_id, '_quote_number', true );

		// Update post status if unpublished: https://wordpress.org/support/article/post-status
		if ( in_array( get_post_status( $post_id ), array( 'publish', 'future', 'private' ), true ) ) {
			// New?
			if ( ! is_numeric( $quote_number ) ) {
				global $post;
				$post = get_post( $post_id );

				$get_prev = get_previous_post();

				if ( $get_prev ) {
					// Get quote number (previous quote).
					$quote_number = (int) get_post_meta( $get_prev->ID, '_quote_number', true );
				} else {
					// Get current invoice number (Customizer).
					$quote_number = (int) get_theme_mod( 'quote_number', 0 );
				}

				// Increment +1.
				++$quote_number;

				// Update Post meta value.
				update_post_meta( $post_id, '_quote_number', $quote_number );
				// Update Customizer value.
				set_theme_mod( 'quote_number', $quote_number );

				// Update post date: Current quote must be published after previous quote.
				$get_prev_unix_time = strtotime( $get_prev->post_date );

				if ( get_the_date( 'U', $post_id ) < $get_prev_unix_time ) {
					$post_date = date_i18n( 'Y-m-d H:i:s', (int) ++$get_prev_unix_time );

					$my_post['post_date']     = $post_date;
					$my_post['post_date_gmt'] = get_gmt_from_date( $post_date );
				}
			}

			$my_post['post_status'] = 'private';
		}

		// Update title and slug.
		$post_title            = self::get_quote_number( $post_id );
		$my_post['post_title'] = $post_title;
		$my_post['post_name']  = sanitize_title( $post_title );

		wp_update_post( $my_post );
	}

	/**
	 * Get invoice number in predefined format.
	 *
	 * @param int $post_id Post ID.
	 *
	 * @return string
	 */
	public static function get_invoice_number( $post_id = null ) {
		if ( null === $post_id ) {
			$post_id = get_the_ID();
		}

		if ( 'billy-invoice' !== get_post_type( $post_id ) ) {
			$post_id = wp_get_recent_posts(
				array(
					'post_type'   => 'billy-invoice',
					'numberposts' => 1,
					'post_status' => 'private',
				)
			)[0]['ID'] ?? 0;
		}

		// Autoincrement number.
		$invoice_number = get_post_meta( $post_id, '_invoice_number', true );

		// New post?
		if ( ! is_numeric( $invoice_number ) ) {
			global $post;
			$post = get_post( $post_id );

			$get_prev = get_previous_post();

			if ( $get_prev ) {
				// Get invoice number (previous post).
				$invoice_number = (int) get_post_meta( $get_prev->ID, '_invoice_number', true );
			} else {
				// Get current invoice number (Customizer).
				$invoice_number = (int) get_theme_mod( 'invoice_number', 0 );
			}

			// +1.
			++$invoice_number;
		}

		// (Optional) Add prefix.
		$prefix = get_theme_mod( 'invoice_number_prefix', '' );

		// Replace placeholders.
		$prefix_placeholders       = array(
			'{YEAR}',
			'{MONTH}',
			'{DAY}',
		);
		$prefix_placeholder_values = array(
			esc_attr( ( in_array( get_post_status( $post_id ), array( 'publish', 'private' ), true ) ? get_the_date( 'Y', $post_id ) : wp_date( 'Y' ) ) ),
			esc_attr( ( in_array( get_post_status( $post_id ), array( 'publish', 'private' ), true ) ? get_the_date( 'm', $post_id ) : wp_date( 'm' ) ) ),
			esc_attr( ( in_array( get_post_status( $post_id ), array( 'publish', 'private' ), true ) ? get_the_date( 'd', $post_id ) : wp_date( 'd' ) ) ),
		);
		$prefix                    = str_replace( $prefix_placeholders, $prefix_placeholder_values, $prefix );

		return sprintf( esc_html__( '%1$s%2$03s', 'billy' ), $prefix, $invoice_number );
	}

	/**
	 * Get invoice number in predefined format.
	 * Backwards compatibility after function renaming in v1.9.
	 *
	 * @param int $post_id Post ID.
	 *
	 * @return string
	 */
	public static function get_invoicenumber( $post_id = null ) {
		return self::get_invoice_number( $post_id );
	}

	/**
	 * Get quote number in predefined format.
	 *
	 * @param int $post_id Post ID.
	 *
	 * @return string
	 */
	public static function get_quote_number( $post_id = null ) {
		if ( null === $post_id ) {
			$post_id = get_the_ID();
		}

		if ( get_theme_mod( 'quote_number_as_date', 1 ) ) {
			$quote_number = ( in_array( get_post_status( $post_id ), array( 'publish', 'private' ), true ) ? get_the_date( 'Ymd', $post_id ) : wp_date( 'Ymd' ) );
		} else {
			// Autoincrement number.
			$quote_number = get_post_meta( $post_id, '_quote_number', true );

			// New post?
			if ( ! is_numeric( $quote_number ) ) {
				global $post;
				$post = get_post( $post_id );

				$get_prev = get_previous_post();

				if ( $get_prev ) {
					// Get quote number (previous post).
					$quote_number = (int) get_post_meta( $get_prev->ID, '_quote_number', true );
				} else {
					// Get current quote number (Customizer).
					$quote_number = (int) get_theme_mod( 'quote_number', 0 );
				}

				// +1.
				++$quote_number;
			}
		}

		// (Optional) Add prefix.
		$prefix = get_theme_mod( 'quote_number_prefix', '' );

		// Replace placeholders.
		$prefix_placeholders       = array(
			'{YEAR}',
			'{MONTH}',
			'{DAY}',
		);
		$prefix_placeholder_values = array(
			esc_attr( ( in_array( get_post_status( $post_id ), array( 'publish', 'private' ), true ) ? get_the_date( 'Y', $post_id ) : wp_date( 'Y' ) ) ),
			esc_attr( ( in_array( get_post_status( $post_id ), array( 'publish', 'private' ), true ) ? get_the_date( 'm', $post_id ) : wp_date( 'm' ) ) ),
			esc_attr( ( in_array( get_post_status( $post_id ), array( 'publish', 'private' ), true ) ? get_the_date( 'd', $post_id ) : wp_date( 'd' ) ) ),
		);
		$prefix                    = str_replace( $prefix_placeholders, $prefix_placeholder_values, $prefix );

		return sprintf( esc_html__( '%1$s%2$03s', 'billy' ), $prefix, $quote_number );
	}

	/**
	 * Get quote number in predefined format.
	 * Backwards compatibility after function renaming in v1.9.
	 *
	 * @param int $post_id Post ID.
	 *
	 * @return string
	 */
	public static function get_quotenumber( $post_id = null ) {
		return self::get_quote_number( $post_id );
	}

	/**
	 * Get duedate in predefined format.
	 *
	 * @param int $post_id  Post ID.
	 * @param int $add_days Added number of days.
	 *
	 * @return string
	 */
	public static function get_duedate( $post_id = null, int $add_days = 14 ) {
		if ( null === $post_id ) {
			$post_id = get_the_ID();
		}

		$date = new DateTime( get_the_date( 'Y-m-d' ) );
		$date->modify( '+' . $add_days . ' days' );

		return date_i18n( get_option( 'date_format' ), (int) $date->format( 'U' ) );
	}

	/**
	 * Post Type "Accounting".
	 *
	 * After save/update:
	 * - Change title
	 * - Make private
	 *
	 * @param WP_Post         $post    Post object.
	 * @param WP_REST_Request $request Request object.
	 *
	 * @return void
	 */
	public function onsave_accounting( $post, $request ) {
		$post_id    = $post->ID;
		$post_title = get_the_date( 'Y', $post_id );

		// Update title and slug.
		$my_post = array(
			'ID'         => $post_id,
			'post_title' => $post_title,
			'post_name'  => sanitize_title( $post_title ),
		);

		// (Optional) Update post status: https://wordpress.org/support/article/post-status
		if ( in_array( get_post_status( $post_id ), array( 'publish', 'future' ), true ) ) {
			$my_post['post_status'] = 'private';
		}

		wp_update_post( $my_post );
	}

	/**
	 * Invoices: Keep original date once published.
	 *
	 * @param array $data    An array of slashed, sanitized, and processed post data.
	 * @param array $postarr An array of sanitized (and slashed) but otherwise unmodified post data.
	 *
	 * @return array
	 */
	public function keep_original_date_on_publishing( $data, $postarr ) {
		if ( 'billy-invoice' !== $data['post_type'] ) {
			return $data;
		}

		if ( 'private' === get_post_status( $postarr['ID'] ) ) {
			$post_date = get_the_date( 'Y-m-d H:i:s', $postarr['ID'] );

			$data['post_date']     = $post_date;
			$data['post_date_gmt'] = get_gmt_from_date( $post_date );
		}

		return $data;
	}

	/**
	 * Remove Quick Edit settings.
	 *
	 * @param string[] $actions An array of row action links.
	 * @param WP_Post  $post    Post object.
	 *
	 * @return array
	 */
	public function remove_quick_edit_invoice( $actions, $post ) {
		if ( 'billy-invoice' === $post->post_type ) {
			// unset( $actions['edit'] );
			// unset( $actions['view'] );
			unset( $actions['trash'] );
			unset( $actions['inline hide-if-no-js'] );
		}

		return $actions;
	}

	/**
	 * Include block attributes in REST response.
	 * https://wordpress.stackexchange.com/questions/326688/why-my-admin-doesnt-work-after-adding-rest-prepare-post-filter
	 * https://developer.wordpress.org/reference/functions/parse_blocks
	 *
	 * @param WP_REST_Response $response Response object.
	 * @param WP_Post          $post     Post object.
	 * @param WP_REST_Request  $request  Request object.
	 *
	 * @return WP_REST_Response
	 */
	public function blocks_to_rest_api( $response, $post, $request ) {
		if ( 'PUT' === $request->get_method() || ! function_exists( 'parse_blocks' ) ) {
			return $response;
		}

		// [TODO|TBD] Implement the following approach once included in core: https://github.com/WordPress/gutenberg/pull/18414
		$response->data['blocks'] = parse_blocks( $post->post_content );

		return $response;
	}

	/**
	 * Register Custom Post Type:
	 * https://developer.wordpress.org/reference/functions/register_post_type
	 *
	 * Block Templates:
	 * https://developer.wordpress.org/block-editor/developers/block-api/block-templates/#custom-post-types
	 *
	 * @return void
	 */
	public function on_init() {
		// Load translations.
		load_plugin_textdomain( 'billy', false, plugin_basename( dirname( BILLY_PLUGIN_FILE ) ) . '/languages/' );

		// [Deprecated 2022-09].
		register_post_type(
			'billy-header',
			array(
				'labels'        => array(
					'name'          => sprintf( esc_html__( '%s Header', 'billy' ), self::$plugin_name ),
					'singular_name' => sprintf( esc_html__( '%s Header', 'billy' ), self::$plugin_name ),
				),
				'menu_icon'     => 'dashicons-editor-table',
				'public'        => false,
				'show_in_rest'  => true,
				'has_archive'   => false,
				'supports'      => array( 'editor', 'revisions' ),
				'show_ui'       => false,
				'template_lock' => 'insert',
				'template'      => array(
					array(
						'core/columns',
						array( 'align' => 'wide' ),
						array(
							array(
								'core/column',
								array(),
								array(
									array(
										'core/image',
										array(),
									),
								),
							),
							array(
								'core/column',
								array(),
								array(
									array(
										'core/spacer',
										array(),
									),
								),
							),
							array(
								'core/column',
								array(),
								array(
									// Theme mod: name.
									array(
										'billy-blocks/theme-mod',
										array( 'themeMod' => 'name' ),
									),
									// Theme mod: address.
									array(
										'billy-blocks/theme-mod',
										array( 'themeMod' => 'address' ),
									),
									// Theme mod: vat.
									array(
										'billy-blocks/theme-mod',
										array( 'themeMod' => 'vat' ),
									),
								),
							),
						),
					),
				),
			)
		);

		// Add existing content from deprecated Header posts as reusable block.
		// [Deprecated 2022-09] billy-header found? Insert existing content as reusable block and delete old post. Otherwise insert empty template.
		$deprecated_header_posts = get_posts(
			array(
				'post_type'   => 'billy-header',
				'post_status' => array( 'publish', 'private' ),
			)
		);
		if ( $deprecated_header_posts ) {
			$header_content = '<!-- wp:group {"className":"header"} --><div class="wp-block-group header">' . $deprecated_header_posts[0]->post_content . '</div><!-- /wp:group -->';

			// Delete deprecated Header posts.
			foreach ( $deprecated_header_posts as $deprecated_header_post ) {
				wp_delete_post( (int) $deprecated_header_post->ID, true );
			}
		} else {
			$header_content = '<!-- wp:group {"className":"header"} -->
<div class="wp-block-group header"><!-- wp:columns -->
<div class="wp-block-columns"><!-- wp:column -->
<div class="wp-block-column"><!-- wp:image -->
<figure class="wp-block-image"><img alt=""/></figure>
<!-- /wp:image --></div>
<!-- /wp:column -->

<!-- wp:column -->
<div class="wp-block-column"></div>
<!-- /wp:column -->

<!-- wp:column {"className":"align-right text-right"} -->
<div class="wp-block-column align-right text-right"><!-- wp:billy-blocks/theme-mod {"themeMod":"name"} /-->

<!-- wp:billy-blocks/theme-mod {"themeMod":"address"} /-->

<!-- wp:billy-blocks/theme-mod {"themeMod":"vat","className":"vat"} /--></div>
<!-- /wp:column --></div>
<!-- /wp:columns --></div>
<!-- /wp:group -->';
		}

		$header_reusable_blocks = get_posts(
			array(
				'post_type'   => 'wp_block',
				'title'       => 'Billy Header',
				'post_status' => array( 'publish', 'private' ),
			)
		);
		if ( ! $header_reusable_blocks ) {
			// Insert new reusable block.
			$header_id = wp_insert_post(
				array(
					'post_title'     => 'Billy Header',
					'post_content'   => $header_content,
					'post_type'      => 'wp_block',
					'post_status'    => 'publish',
					'comment_status' => 'closed',
					'ping_status'    => 'closed',
					'guid'           => sprintf(
						'%s/wp_block/%s',
						site_url(),
						sanitize_title( 'billy-header' ),
					),
				)
			);
		} else {
			// Get existing reusable block.
			if ( function_exists( 'pll_get_post_language' ) ) {
				foreach ( $header_reusable_blocks as $header_reusable_block ) {
					if ( pll_get_post_language( $header_reusable_block->ID ) === substr( self::$locale, 0, 2 ) ) {
						$header_id = $header_reusable_block->ID;
					}
				}
			} elseif ( function_exists( 'wpml_get_language_information' ) ) {
				foreach ( $header_reusable_blocks as $header_reusable_block ) {
					if ( wpml_get_language_information( null, $header_reusable_block->ID ) === self::$locale ) {
						$header_id = $header_reusable_block->ID;
					}
				}
			}

			if ( empty( $header_id ) ) {
				$header_id = $header_reusable_blocks[0]->ID;
			}
		}

		$footer_reusable_blocks = get_posts(
			array(
				'post_type'   => 'wp_block',
				'title'       => 'Billy Footer',
				'post_status' => array( 'publish', 'private' ),
			)
		);
		if ( ! $footer_reusable_blocks ) {
			$footer_content = '<!-- wp:group {"className":"footer"} -->
			<div class="wp-block-group footer"><!-- wp:columns -->
			<div class="wp-block-columns"><!-- wp:column -->
			<div class="wp-block-column"><!-- wp:paragraph -->
			<p></p>
			<!-- /wp:paragraph -->
			<!-- wp:billy-blocks/theme-mod {"themeMod":"name"} /--></div>
			<!-- /wp:column -->

			<!-- wp:column -->
			<div class="wp-block-column"><!-- wp:paragraph {"align":"center"} -->
			<p class="has-text-align-center"></p>
			<!-- /wp:paragraph --><!-- wp:paragraph {"align":"center","className":"align-center"} -->
			<p class="has-text-align-center align-center">{CURRENTPAGE}/{TOTALPAGES}</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:column -->

			<!-- wp:column {"className":"align-right text-right"} -->
			<div class="wp-block-column align-right text-right"><!-- wp:paragraph -->
			<p></p>
			<!-- /wp:paragraph -->
			<!-- wp:billy-blocks/theme-mod {"themeMod":"address"} /-->

			<!-- wp:billy-blocks/theme-mod {"themeMod":"vat","className":"vat"} /--></div>
			<!-- /wp:column --></div>
			<!-- /wp:columns --></div>
			<!-- /wp:group -->';

			// Insert new reusable block.
			$footer_id = wp_insert_post(
				array(
					'post_title'     => 'Billy Footer',
					'post_content'   => $footer_content,
					'post_type'      => 'wp_block',
					'post_status'    => 'publish',
					'comment_status' => 'closed',
					'ping_status'    => 'closed',
					'guid'           => sprintf(
						'%s/wp_block/%s',
						site_url(),
						sanitize_title( 'billy-footer' ),
					),
				)
			);
		} else {
			// Get existing reusable block.
			if ( function_exists( 'pll_get_post_language' ) ) {
				foreach ( $footer_reusable_blocks as $footer_reusable_block ) {
					if ( pll_get_post_language( $footer_reusable_block->ID ) === substr( self::$locale, 0, 2 ) ) {
						$footer_id = $footer_reusable_block->ID;
					}
				}
			} elseif ( function_exists( 'wpml_get_language_information' ) ) {
				foreach ( $footer_reusable_blocks as $footer_reusable_block ) {
					if ( wpml_get_language_information( null, $footer_reusable_block->ID ) === self::$locale ) {
						$footer_id = $footer_reusable_block->ID;
					}
				}
			}

			if ( empty( $footer_id ) ) {
				$footer_id = $footer_reusable_blocks[0]->ID;
			}
		}

		// Invoices.
		register_post_type(
			'billy-invoice',
			array(
				'labels'        => array(
					'name'          => esc_html__( 'Invoices', 'billy' ),
					'singular_name' => esc_html__( 'Invoice', 'billy' ),
				),
				'menu_icon'     => 'dashicons-tickets',
				'public'        => true,
				'show_in_rest'  => true,
				'supports'      => array( 'editor', 'excerpt', 'thumbnail', 'revisions', 'custom-fields' ), // Custom fields need to be supported for "register_post_meta".
				'taxonomies'    => array( 'category' ),
				'show_ui'       => true,
				'show_in_menu'  => defined( 'BILLY_ADMIN_MENU' ) ? 'billy' : true,
				'template_lock' => 'insert',
				'template'      => array(
					// Actions.
					array(
						'billy-blocks/invoice-actions',
						array( 'align' => 'wide' ),
					),
					// Header (reusable block).
					array(
						'core/block',
						array( 'ref' => $header_id ),
					),
					// Recipient address field.
					array(
						'core/columns',
						array(
							'align'     => 'wide',
							'className' => 'details',
						),
						array(
							array(
								'core/column',
								array( 'className' => 'addressee' ),
								array(
									class_exists( 'Billy_Pro_Blocks' )
									?
									array(
										'billy-blocks/contact-selector',
										array(),
									)
									:
									// Static address field.
									array(
										'core/paragraph',
										array(
											'placeholder' => esc_html__( 'Name', 'billy' ) . ' / ' . esc_html__( 'Company', 'billy' ) . "\n" . sprintf( esc_html__( 'Address Field %s', 'billy' ), '1' ) . "\n" . sprintf( esc_html__( 'Address Field %s', 'billy' ), '2' ) . "\n" . esc_html__( 'Country', 'billy' ),
										),
									),
								),
							),
							array(
								'core/column',
								array(),
								array(
									array(
										'core/spacer',
										array(),
									),
								),
							),
							array(
								'core/column',
								array( 'className' => 'metadata' ),
								array(
									// Autogenerated from previous entry.
									array( 'billy-blocks/invoice-number' ),
									// Postdate.
									array( 'billy-blocks/invoice-date' ),
									// Postdate + # days.
									array( 'billy-blocks/invoice-duedate' ),
									// Meta field: Billing period.
									array(
										'billy-blocks/invoice-meta',
										array(
											'label' => esc_html__( 'Billing Period', 'billy' ),
											'text'  => '',
										),
									),
									// Meta field: Reference.
									array(
										'billy-blocks/invoice-meta',
										array(
											'label' => esc_html__( 'Reference', 'billy' ),
											'text'  => '',
										),
									),
								),
							),
						),
					),
					// Intro text.
					array(
						'core/group',
						array(
							'align'     => 'wide',
							'className' => 'intro',
						),
						array(
							array(
								'core/paragraph',
								array(
									'placeholder' => sprintf( esc_html__( '%s (optional)', 'billy' ), esc_html__( 'Subject', 'billy' ) ),
								),
							),
							array(
								'core/paragraph',
								array(
									'placeholder' => sprintf( esc_html__( '%s (optional)', 'billy' ), esc_html__( 'Intro text', 'billy' ) ) . "\n" . esc_html__( 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo quis imperdiet massa tincidunt nunc pulvinar sapien et. Vitae turpis massa sed elementum tempus egestas.', 'billy' ),
								),
							),
						),
					),
					// Product or service details (table).
					array(
						'billy-blocks/invoice-table',
						array(
							'align' => 'wide',
						),
					),
					// Payment Information, Notes.
					array(
						'core/group',
						array(
							'align'     => 'wide',
							'className' => 'information',
						),
						array(
							array(
								'core/heading',
								array(
									'level'       => 3,
									'placeholder' => esc_html__( 'Information', 'billy' ),
									'content'     => esc_html__( 'Information', 'billy' ),
								),
							),
							array( 'billy-blocks/invoice-paymentinformation' ),
							array(
								'core/paragraph',
								array(
									'placeholder' => sprintf( esc_html__( '%s (optional)', 'billy' ), esc_html__( 'Notes', 'billy' ) ),
								),
							),
						),
					),
					// Footer (reusable block).
					array(
						'core/block',
						array( 'ref' => $footer_id ),
					),
				),
			)
		);

		// Quotes.
		register_post_type(
			'billy-quote',
			array(
				'labels'        => array(
					'name'          => esc_html__( 'Quotes', 'billy' ),
					'singular_name' => esc_html__( 'Quote', 'billy' ),
				),
				'menu_icon'     => 'dashicons-tickets-alt',
				'public'        => true,
				'show_in_rest'  => true,
				'supports'      => array( 'editor', 'thumbnail', 'revisions', 'custom-fields' ), // Custom fields need to be supported for "register_post_meta".
				'taxonomies'    => array( 'category' ),
				'show_ui'       => true,
				'show_in_menu'  => defined( 'BILLY_ADMIN_MENU' ) ? 'billy' : true,
				'template_lock' => 'insert',
				'template'      => array(
					// Actions.
					array(
						'billy-blocks/quote-actions',
						array( 'align' => 'wide' ),
					),
					// Header (reusable block).
					array(
						'core/block',
						array( 'ref' => $header_id ),
					),
					// Recipient address field.
					array(
						'core/columns',
						array(
							'align'     => 'wide',
							'className' => 'details',
						),
						array(
							array(
								'core/column',
								array( 'className' => 'addressee' ),
								array(
									class_exists( 'Billy_Pro_Blocks' )
									?
									array( 'billy-blocks/contact-selector', array() )
									:
									// Static address field.
									array(
										'core/paragraph',
										array(
											'placeholder' => esc_html__( 'Name', 'billy' ) . ' / ' . esc_html__( 'Company', 'billy' ) . "\n" . sprintf( esc_html__( 'Address Field %s', 'billy' ), '1' ) . "\n" . sprintf( esc_html__( 'Address Field %s', 'billy' ), '2' ) . "\n" . esc_html__( 'Country', 'billy' ),
										),
									),
								),
							),
							array(
								'core/column',
								array(),
								array(
									array( 'core/spacer', array() ),
								),
							),
							array(
								'core/column',
								array( 'className' => 'metadata' ),
								array(
									// Postdate.
									array( 'billy-blocks/quote-date' ),
									// Postdate + # days.
									array( 'billy-blocks/quote-validuntildate' ),
									// Meta field: Reference.
									array(
										'billy-blocks/quote-meta',
										array(
											'label' => esc_html__( 'Reference', 'billy' ),
											'text'  => self::get_quote_number(),
										),
									),
								),
							),
						),
					),
					// Intro text.
					array(
						'core/group',
						array(
							'align'     => 'wide',
							'className' => 'intro',
						),
						array(
							array(
								'core/paragraph',
								array(
									'placeholder' => sprintf( esc_html__( '%s (optional)', 'billy' ), esc_html__( 'Subject', 'billy' ) ),
								),
							),
							array(
								'core/paragraph',
								array(
									'placeholder' => sprintf( esc_html__( '%s (optional)', 'billy' ), esc_html__( 'Intro text', 'billy' ) ) . "\n" . esc_html__( 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo quis imperdiet massa tincidunt nunc pulvinar sapien et. Vitae turpis massa sed elementum tempus egestas.', 'billy' ),
								),
							),
						),
					),
					// Product or service details (table).
					array(
						'billy-blocks/quote-table',
						array( 'align' => 'wide' ),
					),
					// Quote Information, Notes.
					array(
						'core/group',
						array(
							'align'     => 'wide',
							'className' => 'information',
						),
						array(
							array(
								'core/heading',
								array(
									'level'       => 3,
									'placeholder' => esc_html__( 'Information', 'billy' ),
									'content'     => esc_html__( 'Information', 'billy' ),
								),
							),
							array( 'billy-blocks/quote-information' ),
							array(
								'core/paragraph',
								array(
									'placeholder' => sprintf( esc_html__( '%s (optional)', 'billy' ), esc_html__( 'Notes', 'billy' ) ),
								),
							),
						),
					),
					// Footer (reusable block).
					array(
						'core/block',
						array( 'ref' => $footer_id ),
					),
				),
			)
		);

		// Accounting.
		register_post_type(
			'billy-accounting',
			array(
				'labels'        => array(
					'name'          => esc_html__( 'Accounting', 'billy' ),
					'singular_name' => esc_html__( 'Accounting', 'billy' ),
				),
				'menu_icon'     => 'dashicons-book-alt',
				'public'        => true,
				'show_in_rest'  => true,
				'supports'      => array( 'editor', 'thumbnail', 'revisions' ),
				'taxonomies'    => array( 'category' ),
				'show_ui'       => true,
				'show_in_menu'  => defined( 'BILLY_ADMIN_MENU' ) ? 'billy' : true,
				'template_lock' => 'insert',
				'template'      => array(
					// Actions.
					array(
						'billy-blocks/accounting-actions',
						array( 'align' => 'wide' ),
					),
					// Heading.
					array(
						'core/heading',
						array(
							'level'       => 1,
							'placeholder' => esc_html__( 'Heading', 'billy' ),
							'content'     => wp_date( 'Y' ),
						),
					),
					// Table.
					array(
						'billy-blocks/accounting-table',
						array( 'align' => 'wide' ),
					),
					// Notes.
					array(
						'core/paragraph',
						array(
							'placeholder' => sprintf( esc_html__( '%s (optional)', 'billy' ), esc_html__( 'Notes', 'billy' ) ),
						),
					),
				),
			)
		);

		// Flush permalinks.
		do_action( 'after_register_post_type' );

		/**
		 * Post Meta:
		 * https://developer.wordpress.org/block-editor/tutorials/metabox/meta-block-1-intro
		 *
		 * https://github.com/WordPress/gutenberg/issues/5622
		 */
		$field_args = array(
			'show_in_rest'  => true,
			'single'        => true,
			'type'          => 'string',
			'auth_callback' => function () {
				return current_user_can( 'edit_private_posts' );
			},
		);

		// "Invoice" number.
		register_post_meta( 'billy-invoice', '_invoice_number', $field_args );

		// "Quote" number.
		register_post_meta( 'billy-quote', '_quote_number', $field_args );
	}

	/**
	 * Enqueue frontend assets.
	 *
	 * @return void
	 */
	public function enqueue_assets() {
		global $post;

		// Only enqueue when post contains a Billy block.
		if ( is_user_logged_in() && $post && has_blocks( $post->post_content ) ) {
			if ( str_contains( $post->post_content, ':billy-blocks/' ) ) {
				// Styles.
				wp_enqueue_style( 'dashicons' );

				wp_enqueue_style( 'billy-style', self::$plugin_url . 'assets/css/main.css', array(), self::$plugin_version );
				if ( is_rtl() ) {
					wp_enqueue_style( 'billy-style-rtl', self::$plugin_url . 'assets/css/rtl.css', array(), self::$plugin_version );
				}

				// Scripts.
				wp_enqueue_script( 'billy-script', self::$plugin_url . 'assets/js/main.bundle.js', array(), self::$plugin_version, true );
				wp_add_inline_script(
					'billy-script',
					'var globalDataBilly = {
						postId: "' . (int) get_the_ID() . '",
						wpAdmin: "' . esc_url( get_dashboard_url() ) . '",
						currency: "' . self::$currency . '",
						locale: "' . self::$locale . '",
						translations: {
							earnings: "' . esc_html__( 'Earnings', 'billy' ) . '",
							expenses: "' . esc_html__( 'Expenses', 'billy' ) . '",
						},
					};'
				);
			}
		}
	}

	/**
	 * Enqueue admin assets.
	 *
	 * @return void
	 */
	public function enqueue_admin_assets() {
		$theme_mods        = array(
			'name'     => esc_html__( 'Name', 'billy' ),
			'address'  => esc_html__( 'Address', 'billy' ),
			'vat'      => esc_html__( 'VAT', 'billy' ),
			'currency' => esc_html__( 'Currency', 'billy' ),
		);
		$theme_mod_options = '';
		foreach ( $theme_mods as $key => $value ) {
			$theme_mod_options .= '{ label: "' . $value . '", value: "' . $key . '" },';
		}

		$taxes       = ( ! empty( get_theme_mod( 'taxrates' ) ) ? preg_split( '/\n|\r\n/', get_theme_mod( 'taxrates' ) ) : '' );
		$tax_options = '';
		if ( is_array( $taxes ) ) {
			$tax_options = '';
			foreach ( $taxes as $key => $value ) {
				// Validate input.
				$value        = ( empty( $value ) || '%' !== substr( $value, -1 ) || ! in_array( (int) preg_replace( '/[^0-9]/', '', $value ), range( 1, 99 ), true ) ? '0%' : $value ); // Default: 0%
				$tax_options .= '{ label: "' . $value . '", value: "' . $value . '" },';
			}
			$tax_options .= '{ label: "0%", value: "0%" },';
		}

		// Styles.
		wp_enqueue_style( 'billy-editor-style', self::$plugin_url . 'assets/admin/css/style-editor.css', array(), self::$plugin_version );
		if ( is_rtl() ) {
			wp_enqueue_style( 'billy-editor-rtl-style', self::$plugin_url . 'assets/admin/css/style-editor-rtl.css', array(), self::$plugin_version );
		}

		// Scripts.
		wp_add_inline_script(
			'editor',
			'var globalDataBilly = {
				wpAdmin: "' . get_dashboard_url() . '",
				postId: "' . get_the_ID() . '",
				currency: "' . self::$currency . '",
				locale: "' . self::$locale . '",
				themeModOptions: [' . $theme_mod_options . '],
				taxOptions: [' . $tax_options . '],
			};'
		);
	}

	/**
	 * Theme Customizer options.
	 *
	 * @param WP_Customize_Manager $wp_customize Theme Customizer object.
	 *
	 * @return void
	 */
	public function wp_customizer_options( $wp_customize ) {
		/**
		 * Initialize panel.
		 */
		$wp_customize->add_panel(
			'billy_setup_panel',
			array(
				'title'       => self::$plugin_name,
				'description' => esc_html__( 'Plugin Setup', 'billy' ),
			)
		);

		/**
		 * Initialize sections.
		 */
		$wp_customize->add_section(
			'billy_general_section',
			array(
				'title'    => esc_html__( 'General', 'billy' ),
				'priority' => 1,
				'panel'    => 'billy_setup_panel',
			)
		);

		$wp_customize->add_section(
			'billy_quote_section',
			array(
				'title'    => esc_html__( 'Quote', 'billy' ),
				'priority' => 2,
				'panel'    => 'billy_setup_panel',
			)
		);

		$wp_customize->add_section(
			'billy_invoice_section',
			array(
				'title'    => esc_html__( 'Invoice', 'billy' ),
				'priority' => 3,
				'panel'    => 'billy_setup_panel',
			)
		);

		/**
		 * Controls.
		 */
		// Name.
		$wp_customize->add_setting(
			'name',
			array(
				'sanitize_callback' => 'sanitize_text_field',
			)
		);
		$wp_customize->add_control(
			'name',
			array(
				'type'    => 'text',
				'label'   => esc_html__( 'Name', 'billy' ),
				'section' => 'billy_general_section',
			)
		);
		// Default mod.
		if ( empty( get_theme_mod( 'name' ) ) ) {
			set_theme_mod( 'name', get_bloginfo( 'name' ) );
		}

		// Address.
		$wp_customize->add_setting(
			'address',
			array(
				'sanitize_callback' => 'wp_kses',
				'validate_callback' => array( $this, 'geocode' ),
			)
		);
		$wp_customize->add_control(
			'address',
			array(
				'type'    => 'textarea',
				'label'   => esc_html__( 'Address', 'billy' ),
				'section' => 'billy_general_section',
			)
		);

		// Geocoding on/off.
		$wp_customize->add_setting(
			'geocoding_enabled',
			array(
				'default' => '1',
			)
		);
		$wp_customize->add_control(
			'geocoding_enabled',
			array(
				'type'    => 'checkbox',
				'label'   => sprintf( esc_html__( 'Enable %s', 'billy-pro' ), sprintf( esc_html__( 'Geocoding powered by %s', 'billy' ), 'nominatim.openstreetmap.org' ) ),
				'section' => 'billy_general_section',
			)
		);

		// Address (geocoded).
		if ( get_theme_mod( 'geocoding_enabled', '1' ) ) {
			$wp_customize->add_setting(
				'address_geocoded',
				array(
					'sanitize_callback' => 'wp_kses',
				)
			);
			$wp_customize->add_control(
				'address_geocoded',
				array(
					'type'        => 'textarea',
					'label'       => esc_html__( 'Address (geocoded)', 'billy' ),
					'description' => sprintf( esc_html__( 'Geocoding powered by %s', 'billy' ), 'nominatim.openstreetmap.org' ),
					'input_attrs' => array(
						'readonly' => 'readonly',
						'style'    => 'display: none;',
					),
					'section'     => 'billy_general_section',
				)
			);
		}

		// Email.
		$wp_customize->add_setting(
			'email',
			array(
				'sanitize_callback' => 'sanitize_text_field',
			)
		);
		$wp_customize->add_control(
			'email',
			array(
				'type'        => 'text',
				'label'       => esc_html__( 'Email', 'billy' ),
				'description' => esc_html__( 'Enter your email', 'billy' ),
				'section'     => 'billy_general_section',
			)
		);
		// Default mod.
		if ( empty( get_theme_mod( 'email' ) ) ) {
			set_theme_mod( 'email', get_bloginfo( 'admin_email' ) );
		}

		// Phone.
		$wp_customize->add_setting(
			'phone',
			array(
				'sanitize_callback' => 'sanitize_text_field',
			)
		);
		$wp_customize->add_control(
			'phone',
			array(
				'type'        => 'text',
				'label'       => esc_html__( 'Phone', 'billy' ),
				'description' => esc_html__( 'Enter your phone number', 'billy' ),
				'section'     => 'billy_general_section',
			)
		);

		// VAT.
		$wp_customize->add_setting(
			'vat',
			array(
				'sanitize_callback' => 'sanitize_text_field',
			)
		);
		$wp_customize->add_control(
			'vat',
			array(
				'type'        => 'text',
				'label'       => esc_html__( 'VAT', 'billy' ),
				'description' => esc_html__( 'Enter your VAT identification number or Taxpayer ID', 'billy' ),
				'section'     => 'billy_general_section',
			)
		);

		// Currency.
		$wp_customize->add_setting(
			'currency',
			array(
				'sanitize_callback' => 'sanitize_text_field',
				'validate_callback' => array( $this, 'validate_currency' ),
			)
		);
		$wp_customize->add_control(
			'currency',
			array(
				'type'        => 'text',
				'label'       => esc_html__( 'Currency Code', 'billy' ),
				'description' => 'https://w.wiki/Fgw' . '<br>' . esc_html__( 'Caution: Any changes made here may affect existing entries. Create a backup first!', 'billy' ),
				'section'     => 'billy_general_section',
			)
		);

		// Taxes.
		$wp_customize->add_setting(
			'taxrates',
			array(
				'sanitize_callback' => 'wp_kses',
				'validate_callback' => array( $this, 'validate_taxrates' ),
			)
		);
		$wp_customize->add_control(
			'taxrates',
			array(
				'type'        => 'textarea',
				'label'       => esc_html__( 'Tax Rates', 'billy' ),
				'description' => sprintf(
					esc_html__( 'Enter the taxrates separated by newline: e.g. %s', 'billy' ),
					'10%
			20%'
				) . '<br>' . esc_html__( 'Caution: Any changes made here may affect existing entries. Create a backup first!', 'billy' ),
				'section'     => 'billy_general_section',
			)
		);

		// Invoice number start.
		$wp_customize->add_setting(
			'invoice_number',
			array(
				'sanitize_callback' => 'sanitize_text_field',
			)
		);
		$wp_customize->add_control(
			'invoice_number',
			array(
				'type'        => 'number',
				'label'       => esc_html__( 'Current invoice number', 'billy' ),
				'description' => esc_html__( 'Upcoming invoice numbers will be autoincremented based on this value!', 'billy' ),
				'section'     => 'billy_invoice_section',
			)
		);
		// Default mod.
		if ( empty( get_theme_mod( 'invoice_number' ) ) ) {
			$latest_invoices = get_posts(
				array(
					'numberposts' => 1,
					'post_status' => 'private',
					'post_type'   => 'billy-invoice',
				)
			);

			set_theme_mod( 'invoice_number', ( $latest_invoices ? get_post_meta( $latest_invoices[0]->ID, '_invoice_number', true ) : '0' ) );
		}

		// Invoice number prefix.
		$wp_customize->add_setting(
			'invoice_number_prefix',
			array(
				'sanitize_callback' => 'sanitize_text_field',
			)
		);
		$wp_customize->add_control(
			'invoice_number_prefix',
			array(
				'type'        => 'text',
				'label'       => esc_html__( 'Invoice number: Prefix', 'billy' ),
				'description' => esc_html__( 'You can include placeholders like {YEAR}, {MONTH} and {DAY}.', 'billy' ),
				'section'     => 'billy_invoice_section',
			)
		);

		// Payment is due within # days.
		$wp_customize->add_setting(
			'payment_due_days',
			array(
				'sanitize_callback' => 'sanitize_text_field',
			)
		);
		$wp_customize->add_control(
			'payment_due_days',
			array(
				'type'    => 'number',
				'label'   => esc_html__( 'Payment due within # days', 'billy' ),
				'section' => 'billy_invoice_section',
			)
		);
		// Default mod.
		if ( empty( get_theme_mod( 'payment_due_days' ) ) ) {
			set_theme_mod( 'payment_due_days', '14' );
		}

		// Payment Information.
		$wp_customize->add_setting(
			'payment_information',
			array(
				'sanitize_callback' => 'wp_kses_post',
			)
		);
		$wp_customize->add_control(
			'payment_information',
			array(
				'type'        => 'textarea',
				'label'       => esc_html__( 'Payment Information', 'billy' ),
				'description' => esc_html__( 'Add the payment instructions and link to your terms.', 'billy' ),
				'section'     => 'billy_invoice_section',
			)
		);
		// Default mod.
		if ( empty( get_theme_mod( 'payment_information' ) ) ) {
			set_theme_mod( 'payment_information', esc_html__( 'Thank you for your business!', 'billy' ) );
		}

		// Quote Information.
		$wp_customize->add_setting(
			'quote_information',
			array(
				'sanitize_callback' => 'wp_kses_post',
			)
		);
		$wp_customize->add_control(
			'quote_information',
			array(
				'type'        => 'textarea',
				'label'       => esc_html__( 'Quote Information', 'billy' ),
				'description' => esc_html__( 'Inform your contacts about special terms, quote expiration clauses, etc.', 'billy' ),
				'section'     => 'billy_quote_section',
			)
		);
		// Default mod.
		if ( empty( get_theme_mod( 'quote_information' ) ) ) {
			set_theme_mod( 'quote_information', esc_html__( 'We will be happy to answer any questions you may have!', 'billy' ) );
		}

		// Quote number start.
		$wp_customize->add_setting(
			'quote_number',
			array(
				'sanitize_callback' => 'sanitize_text_field',
			)
		);
		$wp_customize->add_control(
			'quote_number',
			array(
				'type'        => 'number',
				'label'       => esc_html__( 'Current quote number', 'billy' ),
				'description' => esc_html__( 'Upcoming quote numbers will be autoincremented based on this value!', 'billy' ),
				'section'     => 'billy_quote_section',
			)
		);
		// Default mod.
		if ( empty( get_theme_mod( 'quote_number' ) ) ) {
			$latest_quotes = get_posts(
				array(
					'numberposts' => 1,
					'post_status' => 'private',
					'post_type'   => 'billy-quote',
				)
			);

			set_theme_mod( 'quote_number', ( $latest_quotes ? get_post_meta( $latest_quotes[0]->ID, '_quote_number', true ) : '0' ) );
		}

		// Quote number format: Use current date.
		$wp_customize->add_setting(
			'quote_number_as_date',
			array(
				'default' => '1',
			)
		);
		$wp_customize->add_control(
			'quote_number_as_date',
			array(
				'label'   => esc_html__( 'Just use the current date ("Ymd") as quote number', 'billy' ),
				'section' => 'billy_quote_section',
				'type'    => 'checkbox',
			)
		);

		// Quote number prefix.
		$wp_customize->add_setting(
			'quote_number_prefix',
			array(
				'sanitize_callback' => 'sanitize_text_field',
			)
		);
		$wp_customize->add_control(
			'quote_number_prefix',
			array(
				'type'        => 'text',
				'label'       => esc_html__( 'Quote number: Prefix', 'billy' ),
				'description' => esc_html__( 'You can include placeholders like {YEAR}, {MONTH} and {DAY}.', 'billy' ),
				'section'     => 'billy_quote_section',
			)
		);

		// Quote is valid for # days.
		$wp_customize->add_setting(
			'quote_valid_days',
			array(
				'sanitize_callback' => 'sanitize_text_field',
			)
		);
		$wp_customize->add_control(
			'quote_valid_days',
			array(
				'type'    => 'number',
				'label'   => esc_html__( 'Quote valid for # days', 'billy' ),
				'section' => 'billy_quote_section',
			)
		);
		// Default mod.
		if ( empty( get_theme_mod( 'quote_valid_days' ) ) ) {
			set_theme_mod( 'quote_valid_days', '30' );
		}
	}

	/**
	 * Theme Customizer: Geocode.
	 *
	 * @param object $validity WP Customize validity.
	 * @param string $value    WP Customize value.
	 *
	 * @return object
	 */
	public function geocode( $validity, $value ) {
		if ( get_theme_mod( 'geocoding_enabled', '1' ) && ! empty( $value ) && strlen( $value ) > 3 ) {
			$result = null;

			$address = preg_replace( '/^\/\d\p{L}+/u', ' ', trim( $value ) );

			$response = wp_remote_get(
				'https://nominatim.openstreetmap.org/search?q=' . urlencode( $address ) . '&addressdetails=1&format=json&limit=1',
				array(
					'timeout' => 10,
					'referer' => get_home_url(),
				),
			);

			if ( ! is_wp_error( $response ) ) {
				$response_body = wp_remote_retrieve_body( $response );

				$result = json_decode( $response_body, true )[0] ?? '';

				if ( ! empty( $result ) ) {
					set_theme_mod( 'address_geocoded', json_encode( $result ) );
				} else {
					error_log( json_encode( $response ) );
					$validity->add( 'no_address_found', sprintf( esc_html__( 'Geocode was not successful - please provide a valid address: %s', 'billy' ), $address ) );
				}
			} else {
				error_log( json_encode( $response ) );
				$validity->add( 'error', json_encode( $response ) );
			}
		}

		return $validity;
	}

	/**
	 * Theme Customizer: Validate currency.
	 *
	 * @param object $validity WP Customize validity.
	 * @param string $value    WP Customize value.
	 *
	 * @return object
	 */
	public function validate_currency( $validity, $value ) {
		if ( ! empty( $value ) && strlen( $value ) > 3 ) {
			$validity->add( 'no_valid_currency', esc_html__( 'Please provide a valid currency format', 'billy' ) );
		}

		return $validity;
	}

	/**
	 * Theme Customizer: Validate tax rates.
	 *
	 * @param object $validity WP Customize validity.
	 * @param string $value    WP Customize value.
	 *
	 * @return object
	 */
	public function validate_taxrates( $validity, $value ) {
		if ( ! empty( $value ) ) {
			$newlines = explode( "\n", $value );
			foreach ( $newlines as $newline ) {
				if ( preg_match( '/^([0-9]{1,2}){1}(\.[0-9]{1,2})?%$/', $newline ) ) {
					$wrong = false;
				} else {
					$wrong = true;
				}
			}

			if ( $wrong ) {
				$validity->add( 'no_valid_taxrates', esc_html__( 'Please separate the taxrates by newline and don\'t forget to append the "%" sign to each value.', 'billy' ) );
			}
		}

		return $validity;
	}
}
