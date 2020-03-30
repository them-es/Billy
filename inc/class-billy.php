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
		$plugin_data = get_file_data( plugin_dir_path( __DIR__ ) . 'billy.php', array(
			'Name'       => 'Plugin Name',
			'Version'    => 'Version',
			'TextDomain' => 'Text Domain',
			'PluginURI'  => 'Plugin URI',
			'AuthorURI'  => 'Author URI',
		) );
		$plugin_name = $plugin_data['Name'];
		self::$plugin_name    = esc_attr( $plugin_data['Name'] );
		self::$plugin_version = esc_attr( $plugin_data['Version'] );
		self::$plugin_slug    = esc_attr( $plugin_data['TextDomain'] );
		self::$plugin_url     = esc_url( plugin_dir_url( dirname( __FILE__ ) ) );
		self::$plugin_uri     = esc_url( $plugin_data['PluginURI'] );
		self::$billy_url      = esc_url( $plugin_data['AuthorURI'] );

		self::$locale         = esc_attr( str_replace( '_', '-', get_user_locale() ) );
		self::$currency       = esc_attr( get_theme_mod( 'currency', '$' ) );

		$this->init();
	}


	/**
	 * Plugin initiation.
	 *
	 * A helper function to initiate actions, hooks and other features needed.
	 */
	public function init() {
		add_action( 'init', array( $this, 'on_init' ), 998 );
		add_action( 'after_register_post_type', array( $this, 'flush_rewrite' ) );

		// Dashboard widget.
		add_action( 'wp_dashboard_setup', array( $this, 'add_dashboard_widget' ), 998 );

		// Enqueue Assets.
		add_action( 'wp_enqueue_scripts', array( $this, 'enqueue_assets' ), 998 );
		add_action( 'admin_enqueue_scripts', array( $this, 'enqueue_admin_assets' ), 998 );

		// Theme Customizer.
		add_action( 'customize_register', array( $this, 'wp_customizer_options' ), 998 );

		// Title Format.
		add_filter( 'private_title_format', array( $this, 'title_format' ) );
		add_filter( 'protected_title_format', array( $this, 'title_format' ) );

		// Custom Posttype Wrapper.
		add_filter( 'the_content', array( $this, 'cpt_wrapper_content' ) );

		// Limit Header "Custom Post type" creation to 1 post.
		add_action( 'admin_menu', array( $this, 'adjust_admin_menu' ), 999 );

		// Include Custom Posts in main query.
		//add_action( 'pre_get_posts', array( $this, 'include_invoices_in_postsquery' ) );

		// Modify Post data onsave.
		add_action( 'rest_after_insert_billy-header', array( $this, 'onsave_header' ), 10, 2 );

		add_action( 'rest_after_insert_billy-invoice', array( $this, 'onsave_invoice' ), 10, 2 );
		add_filter( 'wp_insert_post_data', array( $this, 'keep_original_date_on_publishing' ), 10, 2 );

		add_action( 'rest_after_insert_billy-quote', array( $this, 'onsave_quote' ), 10, 2 );

		add_action( 'rest_after_insert_billy-accounting', array( $this, 'onsave_accounting' ), 10, 2 );

		// Modify REST response.
		add_filter( 'rest_prepare_billy-invoice', array( $this, 'blocks_to_rest_api' ), 10, 3 );
		add_filter( 'rest_prepare_billy-quote', array( $this, 'blocks_to_rest_api' ), 10, 3 );

		// Quick Edit rows.
		add_filter( 'post_row_actions', array( $this, 'remove_quick_edit_invoice' ), 10, 2 );
	}


	/**
	 * Flush Rewrite rules.
	 */
	public function flush_rewrite() {
		flush_rewrite_rules();
	}


	/**
	 * Add a widget to the dashboard.
	 */
	public function add_dashboard_widget() {
		wp_add_dashboard_widget(
			'billy_dashboard', // Widget slug.
			sprintf( __( '%1$s %2$s', 'billy' ), self::$plugin_name, self::$plugin_version ), // Title.
			array( $this, 'dashboard_widget' ) // Display function.
		);
	}


	/**
	 * Create the function to output the contents of the dashboard Widget.
	 */
	public static function dashboard_widget_content() {
		return '<table class="widefat">
			<tbody>
				<tr>
					<td><strong>' . __( 'Locale', 'billy' ) . '</strong></td>
					<td><a href="' . esc_url( get_edit_profile_url() ) . '">' . esc_attr( self::$locale ) . '</a></td>
				</tr>
				<tr>
					<td><strong>' . __( 'Currency', 'billy' ) . '</strong></td>
					<td>' . esc_attr( self::$currency ) . '</td>
				</tr>
				<tr>
					<td><strong>' . __( 'Taxes', 'billy' ) . '</strong></td>
					<td>' . nl2br( get_theme_mod( 'taxrates' ) ) . '</td>
				</tr>
				<tr>
					<td><strong>' . __( 'Current invoice number', 'billy' ) . '</strong></td>
					<td><a href="' . esc_url( admin_url( 'edit.php?post_type=billy-invoice' ) ) . '">' . esc_attr( sprintf( __( '%1$s%2$03s', 'invoice-theme' ), get_theme_mod( 'invoice_number_prefix', '#' ), get_theme_mod( 'invoice_number', '0' ) ) ) . '</a></td>
				</tr>
				<tr>
					<td></td>
					<td><p class="customize-edit"><a href="' . esc_url( admin_url( 'customize.php?autofocus[panel]=billy_setup_panel' ) ) . '" title="' . __( 'Edit', 'billy' ) . '">' . sprintf( __( '%1$s %2$s', 'billy' ), '<span class="dashicons dashicons-edit" aria-hidden="true"></span>', __( 'Edit', 'billy' ) ) . '</a></p></td>
				</tr>
			</tbody>
		</table>';
	}
	public static function dashboard_widget_footer() {
		return '<table class="footer">
			<tbody>
				<tr>
					<td><p>' . ( class_exists( 'Billy_Pro' ) ? '<small>' . sprintf( __( 'Thank you for purchasing %s!', 'billy' ), '<strong>Billy Pro</strong> <span class="dashicons dashicons-smiley" aria-hidden="true"></span>' ) . '</small>' : '<strong><a href="' . esc_url( self::$billy_url ) . '">' . sprintf( __( '%1$s %2$s', 'billy' ), __( 'Get the <u>Pro</u> version', 'billy' ), '<span class="dashicons dashicons-external" aria-hidden="true"></span>' ) . '</a></strong><br><small>' . __( 'Premium add-on with Contacts, Address Book, QR code payments, Stats & Charts, Share links, and more.', 'billy' ) . '</small></p>' ) . '<hr><p><strong><a href="' . esc_url( self::$plugin_uri ) . '">' . sprintf( __( '%1$s %2$s', 'billy' ), __( 'Please rate this Plugin', 'billy' ), ' <span class="dashicons dashicons-external" aria-hidden="true"></span>' ) . '</a></strong><br><span class="dashicons dashicons-star-filled" aria-hidden="true"></span><span class="dashicons dashicons-star-filled" aria-hidden="true"></span><span class="dashicons dashicons-star-filled" aria-hidden="true"></span><span class="dashicons dashicons-star-filled" aria-hidden="true"></span><span class="dashicons dashicons-star-filled" aria-hidden="true"></span></p></td>
					<td> </td>
					<td><a href="' . esc_url( self::$billy_url ) . '"><img src="' . esc_url( self::$plugin_url ) . 'assets/img/logo.png" class="logo" alt="Billy" /></a></td>
				</tr>
			</tbody>
		</table>';
	}
	public static function dashboard_widget() {
		echo self::dashboard_widget_content() . self::dashboard_widget_footer();
	}



	/**
	 * Modify Post title format for private/protected posts.
	 */
	public function title_format( $content ) {
		return '%s';
	}


	/**
	 * Add a <div class="{post_type}-wrapper"> wrapper to content of Custom Posttypes.
	 */
	public function cpt_wrapper_content( $content ) {
		if ( ! in_array( get_post_type(), array( 'billy-header' ) ) && false !== strpos( get_post_type(), 'billy-' ) ) {
			$content = '<div' . ( is_singular() ? ' id="' . get_post_type() . '"' : '' ) . ' class="' . get_post_type() . '-wrapper' . ( ! in_array( get_post_type(), array( 'billy-contact' ) ) ? ' alignwide' : '' ) . '">' . $content . '</div>';
		}

		return $content;
	}


	/**
	 * Admin menu.
	 *
	 * Limit Header "Custom Post type" creation to 1 post.
	 */
	public function adjust_admin_menu() {
		$cpt = 'billy-header';

		// Get number of posts.
		$count_private = wp_count_posts( $cpt )->private;
		$count_publish = wp_count_posts( $cpt )->publish;

		// Conditionally remove Edit link if post has been found.
		if ( $count_private >= 1 || $count_publish >= 1 ) {
			remove_submenu_page( 'edit.php?post_type=' . $cpt, 'post-new.php?post_type=' . $cpt );
		}
	}


	/**
	 * Include Custom Posttype in main query.
	 */
	/*public function include_invoices_in_postsquery( $query ) {
		if ( ! is_admin() && $query->is_main_query() && $query->is_home() && current_user_can( 'edit_posts' ) ) {
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
	 * Posttype "Custom Header": https://developer.wordpress.org/reference/hooks/rest_after_insert_this-post_type
	 *
	 * After save/update:
	 * - Change title
	 */
	public function onsave_header( $post, $request ) {
		$post_id = $post->ID;

		$my_post = array(
			'ID' => $post_id,
		);

		// (Optional) Update post status if unpublished: https://wordpress.org/support/article/post-status
		if ( in_array( get_post_status( $post_id ), array( 'publish', 'future'/*, 'private', 'pending', 'draft', 'auto-draft'*/ ) ) ) {
			$my_post['post_status'] = 'private';
		}

		// Update title and slug.
		$post_title            = __( 'Header', 'billy' );
		$my_post['post_title'] = $post_title;
		$my_post['post_name']  = $post_title;

		wp_update_post( $my_post );
	}


	/**
	 * Posttype "Invoice": https://developer.wordpress.org/reference/hooks/rest_after_insert_this-post_type
	 *
	 * After save/update:
	 * - Autoincrement invoice number
	 * - Change title
	 * - Make private
	 */
	public function onsave_invoice( $post, $request ) {
		$post_id = $post->ID;

		$my_post = array(
			'ID' => $post_id,
		);

		$invoicenumber = get_post_meta( $post_id, '_invoice_number', true );

		// (Optional) Update post status if unpublished: https://wordpress.org/support/article/post-status
		if ( in_array( get_post_status( $post_id ), array( 'publish', 'future'/*, 'private', 'pending', 'draft', 'auto-draft'*/ ) ) ) {
			// New?
			if ( empty( $invoicenumber ) ) {
				// Get current number.
				$invoicenumber = get_theme_mod( 'invoice_number', '0' );

				// Compare date of previous invoice with current invoice. If the current invoice date has been set before the previous one modify the date.
				$args = array(
					'posts_per_page' => 1,
					'post_type'      => 'billy-invoice',
					'meta_key'       => '_invoice_number',
					'meta_value'     => $invoicenumber,
				);
				$invoice_previouspost_query     = new WP_Query( $args );
				$invoice_previouspost_unix_time = strtotime( $invoice_previouspost_query->posts[0]->post_date );

				if ( get_the_date( 'U', $post_id ) < $invoice_previouspost_unix_time ) {
					$post_date                = date_i18n( 'Y-m-d H:i:s', ++$invoice_previouspost_unix_time );

					$my_post['post_date']     = $post_date;
					$my_post['post_date_gmt'] = get_gmt_from_date( $post_date );
				}

				// Increment +1.
				++$invoicenumber;

				// Update Post meta value.
				update_post_meta( $post_id, '_invoice_number', $invoicenumber );
				// Update Customizer value.
				set_theme_mod( 'invoice_number', $invoicenumber );
			}

			$my_post['post_status'] = 'private';
		}

		// Update title and slug.
		$post_title = ( empty( $invoicenumber ) ? sprintf( '%1$s (%2$s)', $this->get_invoicenumber( $post_id ), __( 'Pending', 'billy' ) ) : $this->get_invoicenumber( $post_id ) );
		$my_post['post_title'] = $post_title;
		$my_post['post_name']  = $post_title;

		wp_update_post( $my_post );
	}


	/**
	 * Posttype "Quote"
	 *
	 * After save/update:
	 * - Change title
	 * - Make private
	 */
	public function onsave_quote( $post, $request ) {
		$post_id    = $post->ID;
		$post_title = get_the_date( 'Ymd', $post_id );

		// Update title and slug.
		$my_post = array(
			'ID'         => $post_id,
			'post_title' => $post_title,
			'post_name'  => $post_title,
		);

		// (Optional) Update post status: https://wordpress.org/support/article/post-status
		if ( in_array( get_post_status( $post_id ), array( 'publish', 'future' ) ) ) {
			$my_post['post_status'] = 'private';
		}

		wp_update_post( $my_post );
	}


	/**
	 * Get invoicenumber in predefined format.
	 */
	public static function get_invoicenumber( $post_id = null ) {
		if ( null === $post_id ) {
			$post_id = get_the_ID();
		}

		$invoicenumber = get_post_meta( $post_id, '_invoice_number', true );

		// New post?
		if ( empty( $invoicenumber ) ) {
			$invoicenumber = get_theme_mod( 'invoice_number', '0' );
			++$invoicenumber;
		}

		// (Optional) Add prefix.
		$prefix = get_theme_mod( 'invoice_number_prefix', '#' );

		return sprintf( __( '%1$s%2$03s', 'invoice-theme' ), $prefix, $invoicenumber );
	}


	/**
	 * Get duedate in predefined format.
	 */
	public static function get_duedate( $post_id = null, $add_days = '14' ) {
		if ( null === $post_id ) {
			$post_id = get_the_ID();
		}

		$date = new DateTime( get_the_date( 'Y-m-d' ) );
		$date->modify( '+' . $add_days . ' days' );

		return date_i18n( get_option( 'date_format' ), $date->format( 'U' ) );
	}


	/**
	 * Posttype "Accounting".
	 *
	 * After save/update:
	 * - Change title
	 * - Make private
	 */
	public function onsave_accounting( $post, $request ) {
		$post_id    = $post->ID;
		$post_title = get_the_date( 'Y', $post_id );

		// Update title and slug.
		$my_post = array(
			'ID'         => $post_id,
			'post_title' => $post_title,
			'post_name'  => $post_title,
		);

		// (Optional) Update post status: https://wordpress.org/support/article/post-status
		if ( in_array( get_post_status( $post_id ), array( 'publish', 'future' ) ) ) {
			$my_post['post_status'] = 'private';
		}

		wp_update_post( $my_post );
	}


	/**
	 * Invoices: Keep original date once published.
	 */
	public function keep_original_date_on_publishing( $data, $post ) {
		if ( 'billy-invoice' !== $data['post_type'] ) {
			return $data;
		}

		if ( 'private' === get_post_status( $post['ID'] ) ) {
			$post_date = get_the_date( 'Y-m-d H:i:s', $post['ID'] );

			$data['post_date']     = $post_date;
			$data['post_date_gmt'] = get_gmt_from_date( $post_date );
		}

		return $data;
	}


	/**
	 * Remove Quick Edit settings.
	 */
	public function remove_quick_edit_invoice( $actions, $post ) {
		if ( 'billy-invoice' === $post->post_type ) {
			//unset( $actions['edit'] );
			//unset( $actions['view'] );
			unset( $actions['trash'] );
			unset( $actions['inline hide-if-no-js'] );
		}

		return $actions;
	}


	/**
	 * Include block attributes in REST response.
	 *
	 * [TODO] Implement the following approach once included in core: https://github.com/WordPress/gutenberg/pull/18414
	 */
	public function blocks_to_rest_api( $response, $post, $request ) {
		if ( ! function_exists( 'parse_blocks' ) ) {
			return $response;
		}
		if ( isset( $post ) ) {
			$response->data['blocks'] = parse_blocks( $post->post_content ); // https://developer.wordpress.org/reference/functions/parse_blocks
		}

		return $response;
	}


	/**
	 * Register Custom Posttype:
	 * https://developer.wordpress.org/reference/functions/register_post_type
	 *
	 * Block Templates:
	 * https://developer.wordpress.org/block-editor/developers/block-api/block-templates/#custom-post-types
	 */
	public function on_init() {
		// Load translations.
		load_plugin_textdomain( 'billy', false, plugin_basename( dirname( BILLY_PLUGIN_FILE ) ) . '/languages/' );

		// Header.
		register_post_type( 'billy-header',
			array(
				'labels'        => array( 'name' => sprintf( __( '%s Header', 'billy' ), self::$plugin_name ), 'singular_name' => sprintf( __( '%s Header', 'billy' ), self::$plugin_name ) ),
				'menu_icon'     => 'dashicons-editor-table',
				'public'        => false,
				'show_in_rest'  => true,
				'has_archive'   => false,
				'supports'      => array( 'editor', 'revisions' ),
				'show_ui'       => true,
				'template_lock' => 'insert',
				'template'      => array(
					array( 'core/columns', array( 'align' => 'wide', ), array(
						array( 'core/column', array(), array(
							array( 'core/image', array() )
						) ),
						array( 'core/column', array(), array(
							array( 'core/spacer', array() ),
						) ),
						array( 'core/column', array(), array(
							// Theme mod: name.
							array( 'billy-blocks/theme-mod', array( 'themeMod' => 'name', ) ),
							// Theme mod: address.
							array( 'billy-blocks/theme-mod', array( 'themeMod' => 'address', ) ),
							// Theme mod: vat.
							array( 'billy-blocks/theme-mod', array( 'themeMod' => 'vat', ) ),
						) ),
					) ),
				),
			)
		);

		// Invoices.
		register_post_type( 'billy-invoice',
			array(
				'labels'        => array( 'name' => __( 'Invoices', 'billy' ), 'singular_name' => __( 'Invoice', 'billy' ) ),
				'menu_icon'     => 'dashicons-tickets',
				'public'        => true,
				'show_in_rest'  => true,
				'supports'      => array( 'editor', 'excerpt', 'thumbnail', 'revisions', 'custom-fields' ), // Custom fields need to be supported for "register_post_meta".
				'taxonomies'    => array( 'category' ),
				'show_ui'       => true,
				'template_lock' => 'insert',
				'template'      => array(
					// Actions.
					array( 'billy-blocks/invoice-actions', array( 'align' => 'wide', ) ),
					// Header.
					array( 'billy-blocks/header', array() ),
					// Recipient address field.
					array( 'core/columns', array( 'align' => 'wide', 'className' => 'details', ), array(
						array( 'core/column', array( 'className' => 'addressee' ), array(
							class_exists( 'Billy_Pro_Blocks' )
							?
							array( 'billy-blocks/contact-selector', array() )
							:
							// Static address field.
							array( 'core/paragraph', array(
								'placeholder' => __( 'Name', 'billy' ) . ' / ' . __( 'Company', 'billy' ) . "\n" . sprintf( __( 'Address Field %s', 'billy' ), '1' ) . "\n" . sprintf( __( 'Address Field %s', 'billy' ), '2' ) . "\n" . __( 'Country', 'billy' ),
							) )
						) ),
						array( 'core/column', array(), array(
							array( 'core/spacer', array() ),
						) ),
						array( 'core/column', array( 'className' => 'metadata' ), array(
							// Autogenerated from previous entry.
							array( 'billy-blocks/invoice-number' ),
							// Postdate
							array( 'billy-blocks/invoice-date' ),
							// Postdate + ## days
							array( 'billy-blocks/invoice-duedate' ),
							// Meta field: Billing period
							array( 'billy-blocks/invoice-meta', array( 'label' => __( 'Billing Period', 'billy' ), 'text' => '', ) ),
						) ),
					) ),
					// Intro text
					array( 'core/group', array( 'align' => 'wide', 'className' => 'intro', ), array(
						array( 'core/paragraph', array(
							'placeholder' => sprintf( __( '%s (optional)', 'billy' ), __( 'Intro text', 'billy' ) ) . "\n" . __( 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo quis imperdiet massa tincidunt nunc pulvinar sapien et. Vitae turpis massa sed elementum tempus egestas.', 'billy' ),
						) ),
					) ),
					// Product or service details (table).
					array( 'billy-blocks/invoice-table', array( 'align' => 'wide', ) ),
					// Payment Information, Notes.
					array( 'core/group', array( 'align' => 'wide', 'className' => 'information', ), array(
						array( 'core/heading', array(
							'level'       => 3,
							'placeholder' => __( 'Information', 'billy' ),
							'content'     => __( 'Information', 'billy' ),
						) ),
						array( 'billy-blocks/invoice-paymentinformation' ),
						array( 'core/paragraph', array(
							'placeholder' => sprintf( __( '%s (optional)', 'billy' ), __( 'Notes', 'billy' ) ),
						) ),
					) ),
				),
			)
		);

		// Quotes.
		register_post_type( 'billy-quote',
			array(
				'labels'        => array( 'name' => __( 'Quotes', 'billy' ), 'singular_name' => __( 'Quote', 'billy' ) ),
				'menu_icon'     => 'dashicons-tickets-alt',
				'public'        => true,
				'show_in_rest'  => true,
				'supports'      => array( 'editor', 'thumbnail', 'revisions', 'custom-fields' ), // Custom fields need to be supported for "register_post_meta".
				'taxonomies'    => array( 'category' ),
				'show_ui'       => true,
				'template_lock' => 'insert',
				'template'      => array(
					// Actions.
					array( 'billy-blocks/quote-actions', array( 'align' => 'wide', ) ),
					// Header.
					array( 'billy-blocks/header', array() ),
					// Recipient address field.
					array( 'core/columns', array( 'align' => 'wide', 'className' => 'details', ), array(
						array( 'core/column', array( 'className' => 'addressee' ), array(
							class_exists( 'Billy_Pro_Blocks' )
							?
							array( 'billy-blocks/contact-selector', array() )
							:
							// Static address field.
							array( 'core/paragraph', array(
								'placeholder' => __( 'Name', 'billy' ) . ' / ' . __( 'Company', 'billy' ) . "\n" . sprintf( __( 'Address Field %s', 'billy' ), '1' ) . "\n" . sprintf( __( 'Address Field %s', 'billy' ), '2' ) . "\n" . __( 'Country', 'billy' ),
							) )
						) ),
						array( 'core/column', array(), array(
							array( 'core/spacer', array() ),
						) ),
						array( 'core/column', array( 'className' => 'metadata' ), array(
							// Postdate.
							array( 'billy-blocks/quote-date' ),
							// Postdate + ## days.
							array( 'billy-blocks/quote-validuntildate' ),
							// Meta field: Reference
							array( 'billy-blocks/quote-meta', array( 'label' => __( 'Reference', 'billy' ), 'text' => '', ) ),
						) ),
					) ),
					// Intro text
					array( 'core/group', array( 'align' => 'wide', 'className' => 'intro', ), array(
						array( 'core/paragraph', array(
							'placeholder' => sprintf( __( '%s (optional)', 'billy' ), __( 'Intro text', 'billy' ) ) . "\n" . __( 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo quis imperdiet massa tincidunt nunc pulvinar sapien et. Vitae turpis massa sed elementum tempus egestas.', 'billy' ),
						) ),
					) ),
					// Product or service details (table).
					array( 'billy-blocks/quote-table', array( 'align' => 'wide', ) ),
					// Quote Information, Notes.
					array( 'core/group', array( 'align' => 'wide', 'className' => 'information', ), array(
						array( 'core/heading', array(
							'level'       => 3,
							'placeholder' => __( 'Information', 'billy' ),
							'content'     => __( 'Information', 'billy' ),
						) ),
						array( 'billy-blocks/quote-information' ),
						array( 'core/paragraph', array(
							'placeholder' => sprintf( __( '%s (optional)', 'billy' ), __( 'Notes', 'billy' ) ),
						) ),
					) ),
				),
			)
		);

		// Accounting.
		register_post_type( 'billy-accounting',
			array(
				'labels'        => array( 'name' => __( 'Accounting', 'billy' ), 'singular_name' => __( 'Accounting', 'billy' ) ),
				'menu_icon'     => 'dashicons-book-alt',
				'public'        => true,
				'show_in_rest'  => true,
				'supports'      => array( 'editor', 'thumbnail', 'revisions' ), 
				'taxonomies'    => array( 'category' ),
				'show_ui'       => true,
				'template_lock' => 'insert',
				'template'      => array(
					// Actions.
					array( 'billy-blocks/accounting-actions', array( 'align' => 'wide', ) ),
					// Header.
					array( 'billy-blocks/header', array( 'align' => 'wide', ) ),
					// Table.
					array( 'billy-blocks/accounting-table', array( 'align' => 'wide', ) ),
					// Notes.
					array( 'core/paragraph', array(
						'placeholder' => sprintf( __( '%s (optional)', 'billy' ), __( 'Notes', 'billy' ) ),
					) ),
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
				return current_user_can( 'edit_posts' );
			},
		);

		// "Invoice" number.
		register_post_meta( 'billy-invoice', '_invoice_number', $field_args );

		// "Quote" number.
		register_post_meta( 'billy-quote', '_quote_number', $field_args );

	}


	/**
	 * Enqueue scripts and styles.
	 */
	public function enqueue_assets() {
		// Styles.
		wp_enqueue_style( 'dashicons' );

		wp_enqueue_style( 'billy-style', self::$plugin_url . 'assets/css/main.css', array(), self::$plugin_version );
		if ( is_rtl() ) {
			wp_enqueue_style( 'billy-style-rtl', self::$plugin_url . 'assets/css/rtl.css', array(), self::$plugin_version );
		}

		// Scripts.
		wp_enqueue_script( 'billy-script', self::$plugin_url . 'assets/js/main.bundle.js', false, self::$plugin_version, true );
		wp_add_inline_script( 'billy-script', 'var globalDataBilly = {
			postId: "' .  get_the_ID() . '",
			wpAdmin: "' . get_dashboard_url() . '",
			currency: "' . self::$currency . '",
			locale: "' . self::$locale . '",
			translations: {
				earnings: "' . __( 'Earnings', 'billy' ) . '",
				expenses: "' . __( 'Expenses', 'billy' ) . '",
			},
		};' );
	}


	public function enqueue_admin_assets() {
		$theme_mods = array(
			'name'     => __( 'Name', 'billy' ),
			'address'  => __( 'Address', 'billy' ),
			'vat'      => __( 'VAT', 'billy' ),
			'currency' => __( 'Currency', 'billy' ),
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
				$value = ( empty( $value ) || '%' !== substr( $value, -1 ) || ! in_array( preg_replace( '/[^0-9]/', '', $value ), range( 1, 99 ) ) ? '0%' : $value ); // Default: 0%
				$tax_options .= '{ label: "' . $value . '", value: "' . $value . '" },';
			}
			$tax_options .= '{ label: "0%", value: "0%" },';
		}

		// Styles.
		wp_enqueue_style( 'billy-editor-style', self::$plugin_url . 'assets/admin/css/style-editor.css' );
		if ( is_rtl() ) {
			wp_enqueue_style( 'billy-editor-rtl-style', self::$plugin_url . 'assets/admin/css/style-editor-rtl.css' );
		}

		// Scripts.
		wp_enqueue_script( 'billy-adminscripts', self::$plugin_url . 'assets/admin/js/admin.js', false, self::$plugin_version, true );
		wp_add_inline_script( 'billy-adminscripts', 'var globalDataBilly = {
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
	 */
	public function wp_customizer_options( $wp_customize ) {
		/**
		 * Initialize panel.
		 */
		$wp_customize->add_panel( 'billy_setup_panel', array(
			'title'       => self::$plugin_name,
			'description' => __( 'Plugin Setup', 'billy' ),
		) );

		/**
		 * Initialize sections.
		 */
		$wp_customize->add_section( 'billy_general_section', array(
			'title'    => __( 'General', 'billy' ),
			'priority' => 1,
			'panel'    => 'billy_setup_panel',
		) );

		$wp_customize->add_section( 'billy_quote_section', array(
			'title'    => __( 'Quote', 'billy' ),
			'priority' => 2,
			'panel'    => 'billy_setup_panel',
		) );

		$wp_customize->add_section( 'billy_invoice_section', array(
			'title'    => __( 'Invoice', 'billy' ),
			'priority' => 3,
			'panel'    => 'billy_setup_panel',
		) );

		/**
		 * Controls.
		 */
		// Name.
		$wp_customize->add_setting( 'name', array(
			'sanitize_callback' => 'sanitize_text_field',
		) );
		$wp_customize->add_control( 'name', array(
			'type'     => 'text',
			'label'    => __( 'Name', 'billy' ),
			'section'  => 'billy_general_section',
			'settings' => 'name',
			'priority' => 2,
		) );
		// Default mod.
		if ( empty( get_theme_mod( 'name' ) ) ) {
			set_theme_mod( 'name', get_bloginfo( 'name' ) );
		}

		// Address.
		$wp_customize->add_setting( 'address', array(
			'sanitize_callback' => 'wp_kses',
		) );
		$wp_customize->add_control( 'address', array(
			'type'     => 'textarea',
			'label'    => __( 'Address', 'billy' ),
			'section'  => 'billy_general_section',
			'settings' => 'address',
			'priority' => 3,
		) );

		// VAT.
		$wp_customize->add_setting( 'vat', array(
			'sanitize_callback' => 'sanitize_text_field',
		) );
		$wp_customize->add_control( 'vat', array(
			'type'        => 'text',
			'label'       => __( 'VAT', 'billy' ),
			'description' => __( 'Enter your VAT identification number or Taxpayer ID', 'billy' ),
			'section'     => 'billy_general_section',
			'settings'    => 'vat',
			'priority'    => 4,
		) );

		// Currency.
		$wp_customize->add_setting( 'currency', array(
			'sanitize_callback' => 'sanitize_text_field',
			'validate_callback' => array( $this, 'validate_currency' ),
		) );
		$wp_customize->add_control( 'currency', array(
			'type'        => 'text',
			'label'       => __( 'Currency Code', 'billy' ),
			'description' => 'https://w.wiki/Fgw' . '<br>' . __( 'Caution: Any changes made here may affect existing entries. Create a backup first!', 'billy' ),
			'section'     => 'billy_general_section',
			'settings'    => 'currency',
			'priority'    => 5,
		) );

		// Taxes.
		$wp_customize->add_setting( 'taxrates', array(
			'sanitize_callback' => 'wp_kses',
			'validate_callback' => array( $this, 'validate_taxrates' ),
		) );
		$wp_customize->add_control( 'taxrates', array(
			'type'        => 'textarea',
			'label'       => __( 'Tax Rates', 'billy' ),
			'description' => sprintf( __( 'Enter the taxrates separated by newline: e.g. %s', 'billy' ), '10%
			20%' ) . '<br>' . __( 'Caution: Any changes made here may affect existing entries. Create a backup first!', 'billy' ),
			'section'     => 'billy_general_section',
			'settings'    => 'taxrates',
			'priority'    => 6,
		) );

		// Invoice number prefix.
		$wp_customize->add_setting( 'invoice_number_prefix', array(
			'sanitize_callback' => 'sanitize_text_field',
		) );
		$wp_customize->add_control( 'invoice_number_prefix', array(
			'type'     => 'text',
			'label'    => __( 'Invoice number: Prefix', 'billy' ),
			'section'  => 'billy_invoice_section',
			'settings' => 'invoice_number_prefix',
			'priority' => 1,
		) );

		// Invoice number start.
		$wp_customize->add_setting( 'invoice_number', array(
			'sanitize_callback' => 'sanitize_text_field',
		) );
		$wp_customize->add_control( 'invoice_number', array(
			'type'        => 'text',
			'label'       => __( 'Current invoice number', 'billy' ),
			'description' => __( 'Upcoming invoice numbers will be autoincremented based on this value!', 'billy' ),
			'section'     => 'billy_invoice_section',
			'settings'    => 'invoice_number',
			'priority'    => 2,
		) );
		// Default mod.
		if ( empty( get_theme_mod( 'invoice_number' ) ) ) {
			$latest_invoices = wp_get_recent_posts( array(
				'numberposts' => 1,
				'post_status' => 'private',
				'post_type'   => 'billy-invoice',
			) );

			set_theme_mod( 'invoice_number', ( $latest_invoices ? get_post_meta( $latest_invoices[0]['ID'], '_invoice_number', true ) : '0' ) );
		}

		// Payment is due within ## days.
		$wp_customize->add_setting( 'payment_due_days', array(
			'sanitize_callback' => 'sanitize_text_field',
		) );
		$wp_customize->add_control( 'payment_due_days', array(
			'type'     => 'number',
			'label'    => __( 'Payment due within # days', 'billy' ),
			'section'  => 'billy_invoice_section',
			'settings' => 'payment_due_days',
			'priority' => 3,
		) );
		// Default mod.
		if ( empty( get_theme_mod( 'payment_due_days' ) ) ) {
			set_theme_mod( 'payment_due_days', '14' );
		}

		// Payment Information.
		$wp_customize->add_setting( 'payment_information', array(
			'sanitize_callback' => 'wp_kses_post',
		) );
		$wp_customize->add_control( 'payment_information', array(
			'type'        => 'textarea',
			'label'       => __( 'Payment Information', 'billy' ),
			'description' => __( 'Add the payment instructions and link to your terms.', 'billy' ),
			'section'     => 'billy_invoice_section',
			'settings'    => 'payment_information',
			'priority'    => 4,
		) );
		// Default mod.
		if ( empty( get_theme_mod( 'payment_information' ) ) ) {
			set_theme_mod( 'payment_information', __( 'Thank you for your business!', 'billy' ) );
		}

		// Quote Information.
		$wp_customize->add_setting( 'quote_information', array(
			'sanitize_callback' => 'wp_kses_post',
		) );
		$wp_customize->add_control( 'quote_information', array(
			'type'        => 'textarea',
			'label'       => __( 'Quote Information', 'billy' ),
			'description' => __( 'Inform your contacts about special terms, quote expiration clauses, etc.', 'billy' ),
			'section'     => 'billy_quote_section',
			'settings'    => 'quote_information',
			'priority'    => 1,
		) );
		// Default mod.
		if ( empty( get_theme_mod( 'quote_information' ) ) ) {
			set_theme_mod( 'quote_information', __( 'We will be happy to answer any questions you may have!', 'billy' ) );
		}

		// Quote is valid for ## days.
		$wp_customize->add_setting( 'quote_valid_days', array(
			'sanitize_callback' => 'sanitize_text_field',
		) );
		$wp_customize->add_control( 'quote_valid_days', array(
			'type'     => 'number',
			'label'    => __( 'Quote valid for # days', 'billy' ),
			'section'  => 'billy_quote_section',
			'settings' => 'quote_valid_days',
			'priority' => 2,
		) );
		// Default mod.
		if ( empty( get_theme_mod( 'quote_valid_days' ) ) ) {
			set_theme_mod( 'quote_valid_days', '30' );
		}
	}


	/**
	 * Theme Customizer: Validation.
	 */
	public function validate_currency( $validity, $value ) {
		if ( ! empty( $value ) && strlen( $value ) > 3 ) {
			$validity->add( 'no_valid_currency', __( 'Please provide a valid currency format', 'billy' ) );
		}

		return $validity;
	}

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
				$validity->add( 'no_valid_taxrates', __( 'Please separate the taxrates by newline and don\'t forget to append the "%" sign to each value.', 'billy' ) );
			}
		}

		return $validity;
	}

}
