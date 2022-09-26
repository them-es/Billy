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

		// Enqueue Frontend assets.
		add_action( 'wp_enqueue_scripts', array( $this, 'enqueue_assets' ), 998 );
		// Enqueue Backend assets.
		add_action( 'admin_enqueue_scripts', array( $this, 'enqueue_admin_assets' ), 998 );

		// Theme Customizer.
		add_action( 'customize_register', array( $this, 'wp_customizer_options' ), 998 );

		// Title Format.
		add_filter( 'private_title_format', array( $this, 'title_format' ) );
		add_filter( 'protected_title_format', array( $this, 'title_format' ) );

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
			sprintf( esc_html__( '%1$s %2$s', 'billy' ), self::$plugin_name, self::$plugin_version ), // Title.
			array( $this, 'dashboard_widget' ) // Display function.
		);
	}


	/**
	 * Create the function to output the contents of the dashboard widget.
	 */
	public static function dashboard_widget_content() {
		$debug = array();

		// (Debug|Undocumented) Get invoices with missing metadata ("_invoice_number" is required!) and provide a solution to rewrite all post metas based on the latest invoice.
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

		if ( $invoices_missing_meta->have_posts() ) {
			while ( $invoices_missing_meta->have_posts() ) {
				$invoices_missing_meta->the_post();

				$debug[] = '#' . get_the_ID();
			}

			if ( isset( $_GET['fix_invoices'] ) && 'true' === $_GET['fix_invoices'] ) {
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
							$invoicenumber = get_theme_mod( 'invoice_number' );
						} else {
							// Next invoice.
							global $post;
							$post = get_post( $post_id );

							$get_next = get_next_post();

							if ( $get_next ) {
								// Get invoice number (next invoice).
								$invoicenumber = get_post_meta( $get_next->ID, '_invoice_number', true );

								// Decrement -1.
								--$invoicenumber;
							}
						}

						update_post_meta( $post_id, '_invoice_number', $invoicenumber );

						// Update title and slug.
						$post_title = self::get_invoicenumber( $post_id );

						wp_update_post(
							array(
								'ID'         => $post_id,
								'post_title' => $post_title,
								'post_name'  => $post_title,
							)
						);

						++$row;
					}
				}
			}

			$output_script = '<script>console.error( "The following [Billy] Invoices are missing required meta data: ' . implode( ', ', $debug ) . '", "\n", "Would you like to fix it? Please make sure that the latest invoice number is correct. Invoice numbers will be regenerated and updated in descending order. It is strongly advised to backup the database before clicking this link. ' . esc_url( admin_url( 'index.php?fix_invoices=true' ) ) . '" )</script>';
		}

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
					<td>' . nl2br( get_theme_mod( 'taxrates' ) ) . '</td>
				</tr>
				<tr>
					<td><strong>' . esc_html__( 'Current invoice number', 'billy' ) . '</strong></td>
					<td><a href="' . esc_url( admin_url( 'edit.php?post_type=billy-invoice' ) ) . '">' . sprintf( esc_html__( '%1$s%2$03s', 'billy' ), get_theme_mod( 'invoice_number_prefix', '#' ), get_theme_mod( 'invoice_number', '0' ) ) . '</a></td>
				</tr>
				<tr>
					<td>' . ( ! empty( $output_script ) ? '<span class="dashicons dashicons-warning" aria-hidden="true" title="' . esc_attr__( 'Problems detected. Please open the Web Console for more information!', 'billy' ) . '" style="color: red;"></span>' : '' ) . '</td>
					<td><p class="customize-edit"><a href="' . esc_url( admin_url( 'customize.php?autofocus[panel]=billy_setup_panel' ) ) . '" title="' . esc_attr__( 'Edit', 'billy' ) . '">' . sprintf( __( '%1$s %2$s', 'billy' ), '<span class="dashicons dashicons-edit" aria-hidden="true"></span>', esc_html__( 'Edit', 'billy' ) ) . '</a></p></td>
				</tr>
			</tbody>
		</table>' . ( ! empty( $output_script ) ? $output_script : '' );
	}
	public static function dashboard_widget_footer() {
		return '<table class="footer">
			<tbody>
				<tr>
					<td><p>' . ( class_exists( 'Billy_Pro' ) ? '<small>' . sprintf( __( 'Thank you for purchasing %s!', 'billy' ), '<strong>Billy Pro</strong> <span class="dashicons dashicons-smiley" aria-hidden="true"></span>' ) . '</small>' : '<strong><a href="' . esc_url( self::$billy_url ) . '">' . sprintf( __( '%1$s %2$s', 'billy' ), __( 'Get the <u>Pro</u> version', 'billy' ), '<span class="dashicons dashicons-external" aria-hidden="true"></span>' ) . '</a></strong><br><small>' . __( 'Premium add-on with Contacts, Address Book, QR code payments, Stats & Charts, Share links, and more.', 'billy' ) . '</small></p>' ) . '<hr><p><strong><a href="' . esc_url( 'https://wordpress.org/support/plugin/' . self::$plugin_slug . '/reviews/?rate=5#new-post' ) . '">' . sprintf( __( '%1$s %2$s', 'billy' ), __( 'Please rate this Plugin', 'billy' ), ' <span class="dashicons dashicons-external" aria-hidden="true"></span>' ) . '</a></strong><br><span class="dashicons dashicons-star-filled" aria-hidden="true"></span><span class="dashicons dashicons-star-filled" aria-hidden="true"></span><span class="dashicons dashicons-star-filled" aria-hidden="true"></span><span class="dashicons dashicons-star-filled" aria-hidden="true"></span><span class="dashicons dashicons-star-filled" aria-hidden="true"></span></p></td>
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
	 * Modify Post content
	 * Add a <div class="{post_type}-wrapper"> wrapper to Custom Post types.
	 * Add pre-header with general information, Download buttons and PDF preview.
	 */
	public function preheader_render_callback() {
		$output = '<div class="pre-header d-print-none d-admin-none">';
			$output .= '<div>';
				// Print.
				$output .= '<span class="wp-block-button"><button class="wp-block-button__link is-style-outline print-button">' . esc_html__( 'Print', 'billy' ) . '</button></span>';
				$output .= '&nbsp;';

				if ( in_array( get_post_type(), array( 'billy-accounting' ) ) ) {
					// Export table data as tab separated txt file.
					$output .= '<span class="wp-block-button"><button class="wp-block-button__link tsv-button">' . sprintf( esc_html__( 'Export %s', 'billy' ), esc_html__( 'TSV', 'billy' ) ) . '</button></span>';
				}
				$output .= '</div>';

			// PDF export.
			$pdf_link = get_rest_url( null, 'export/pdf/?id=' . get_the_id() /*. ( empty( $enqueued_styles ) ? '' : '&stylesheets=' . base64_encode( json_encode( $enqueued_styles ) ) ) */ );
			$output .= '<!-- wp:file {"href":"' . esc_url( $pdf_link ) . '","displayPreview":true} --><div id="pdf" class="wp-block-file"><a href="' . esc_url( $pdf_link ) . '" class="wp-block-file__button wp-element-button" download>' . sprintf( esc_html__( 'Download %s', 'billy' ), esc_html__( 'PDF', 'billy' ) ) . '</a>' . esc_html( get_the_title() ) . ' <object class="wp-block-file__embed" data="' . esc_url( $pdf_link ) . '"></object></div><!-- /wp:file -->';
		$output .= '</div>';

		return $output;
	}

	public function cpt_wrapper_content( $content ) {
		if ( is_singular() && in_array( get_post_type(), array( 'billy-invoice', 'billy-quote', 'billy-accounting' ) ) ) {
			$content = '<div id="' . get_post_type() . '" class="' . get_post_type() . '-wrapper' . ( ! in_array( get_post_type(), array( 'billy-contact' ) ) ? ' alignwide' : '' ) . '">' . $this->preheader_render_callback() . $content . '</div>';
		}

		return $content;
	}


	/**
	 * Include Custom Post Type in main query.
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
	 * Post Type "Invoice": https://developer.wordpress.org/reference/hooks/rest_after_insert_this-post_type
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

		// Update post status if unpublished: https://wordpress.org/support/article/post-status
		if ( in_array( get_post_status( $post_id ), array( 'publish', 'future'/*, 'private', 'pending', 'draft', 'auto-draft'*/ ) ) ) {
			// New?
			if ( ! is_numeric( $invoicenumber ) ) {
				global $post;
				$post = get_post( $post_id );

				$get_prev = get_previous_post();

				if ( $get_prev ) {
					// Get invoice number (previous invoice).
					$invoicenumber = get_post_meta( $get_prev->ID, '_invoice_number', true );
				} else {
					// Get current invoice number (Customizer).
					$invoicenumber = get_theme_mod( 'invoice_number', '0' );
				}

				// Increment +1.
				++$invoicenumber;

				// Update Post meta value.
				update_post_meta( $post_id, '_invoice_number', $invoicenumber );
				// Update Customizer value.
				set_theme_mod( 'invoice_number', $invoicenumber );

				// Update post date: Current invoice must be published after previous invoice.
				$get_prev_unix_time = strtotime( $get_prev->post_date );

				if ( get_the_date( 'U', $post_id ) < $get_prev_unix_time ) {
					$post_date                = date_i18n( 'Y-m-d H:i:s', (int) ++$get_prev_unix_time );

					$my_post['post_date']     = $post_date;
					$my_post['post_date_gmt'] = get_gmt_from_date( $post_date );
				}
			}

			$my_post['post_status'] = 'private';
		}

		// Update title and slug.
		$post_title = ( empty( $invoicenumber ) ? sprintf( '%1$s (%2$s)', $this->get_invoicenumber( $post_id ), esc_html__( 'Pending', 'billy' ) ) : $this->get_invoicenumber( $post_id ) );
		$my_post['post_title'] = $post_title;
		$my_post['post_name']  = $post_title;

		wp_update_post( $my_post );
	}


	/**
	 * Post Type "Quote".
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
		if ( ! is_numeric( $invoicenumber ) ) {
			global $post;
			$post = get_post( $post_id );

			$get_prev = get_previous_post();

			if ( $get_prev ) {
				// Get invoice number (previous invoice).
				$invoicenumber = get_post_meta( $get_prev->ID, '_invoice_number', true );
			} else {
				// Get current invoice number (Customizer).
				$invoicenumber = get_theme_mod( 'invoice_number', '0' );
			}

			// Increment +1.
			++$invoicenumber;
		}

		// (Optional) Add prefix.
		$prefix = get_theme_mod( 'invoice_number_prefix', '#' );

		return sprintf( esc_html__( '%1$s%2$03s', 'billy' ), $prefix, $invoicenumber );
	}


	/**
	 * Get duedate in predefined format.
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
	 * Register Custom Post Type:
	 * https://developer.wordpress.org/reference/functions/register_post_type
	 *
	 * Block Templates:
	 * https://developer.wordpress.org/block-editor/developers/block-api/block-templates/#custom-post-types
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

<!-- wp:column {"className":"text-right"} -->
<div class="wp-block-column text-right"><!-- wp:billy-blocks/theme-mod {"themeMod":"name"} /-->

<!-- wp:billy-blocks/theme-mod {"themeMod":"address"} /-->

<!-- wp:billy-blocks/theme-mod {"themeMod":"vat","className":"vat"} /--></div>
<!-- /wp:column --></div>
<!-- /wp:columns --></div>
<!-- /wp:group -->';
		}

		$header_reusable_block = get_posts(
			array(
				'post_type'   => 'wp_block',
				'title'       => 'Billy Header',
				'post_status' => array( 'publish', 'private' ),
			)
		);
		if ( ! $header_reusable_block ) {
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
			$header_id = $header_reusable_block[0]->ID;
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
									// Postdate + ## days.
									array( 'billy-blocks/invoice-duedate' ),
									// Meta field: Billing period.
									array(
										'billy-blocks/invoice-meta',
										array(
											'label' => esc_html__( 'Billing Period', 'billy' ),
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
									// Postdate + ## days.
									array( 'billy-blocks/quote-validuntildate' ),
									// Meta field: Reference.
									array(
										'billy-blocks/quote-meta',
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
				'template_lock' => 'insert',
				'template'      => array(
					// Actions.
					array(
						'billy-blocks/accounting-actions',
						array( 'align' => 'wide' ),
					),
					// Heeading.
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
		global $post;

		// Only enqueue when post contains a Billy block.
		if ( $post && has_blocks( $post->post_content ) ) {
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


	public function enqueue_admin_assets() {
		$theme_mods = array(
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
				$value = ( empty( $value ) || '%' !== substr( $value, -1 ) || ! in_array( preg_replace( '/[^0-9]/', '', $value ), range( 1, 99 ) ) ? '0%' : $value ); // Default: 0%
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
		wp_enqueue_script( 'billy-adminscripts', self::$plugin_url . 'assets/admin/js/admin.js', array(), self::$plugin_version, true );
		wp_add_inline_script(
			'billy-adminscripts',
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
				'type'     => 'text',
				'label'    => esc_html__( 'Name', 'billy' ),
				'section'  => 'billy_general_section',
				'settings' => 'name',
				'priority' => 2,
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
			)
		);
		$wp_customize->add_control(
			'address',
			array(
				'type'     => 'textarea',
				'label'    => esc_html__( 'Address', 'billy' ),
				'section'  => 'billy_general_section',
				'settings' => 'address',
				'priority' => 3,
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
				'settings'    => 'vat',
				'priority'    => 4,
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
				'settings'    => 'currency',
				'priority'    => 5,
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
				'settings'    => 'taxrates',
				'priority'    => 6,
			)
		);

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
				'type'     => 'text',
				'label'    => esc_html__( 'Invoice number: Prefix', 'billy' ),
				'section'  => 'billy_invoice_section',
				'settings' => 'invoice_number_prefix',
				'priority' => 1,
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
				'settings'    => 'invoice_number',
				'priority'    => 2,
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

		// Payment is due within ## days.
		$wp_customize->add_setting(
			'payment_due_days',
			array(
				'sanitize_callback' => 'sanitize_text_field',
			)
		);
		$wp_customize->add_control(
			'payment_due_days',
			array(
				'type'     => 'number',
				'label'    => esc_html__( 'Payment due within # days', 'billy' ),
				'section'  => 'billy_invoice_section',
				'settings' => 'payment_due_days',
				'priority' => 3,
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
				'settings'    => 'payment_information',
				'priority'    => 4,
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
				'settings'    => 'quote_information',
				'priority'    => 1,
			)
		);
		// Default mod.
		if ( empty( get_theme_mod( 'quote_information' ) ) ) {
			set_theme_mod( 'quote_information', esc_html__( 'We will be happy to answer any questions you may have!', 'billy' ) );
		}

		// Quote is valid for ## days.
		$wp_customize->add_setting(
			'quote_valid_days',
			array(
				'sanitize_callback' => 'sanitize_text_field',
			)
		);
		$wp_customize->add_control(
			'quote_valid_days',
			array(
				'type'     => 'number',
				'label'    => esc_html__( 'Quote valid for # days', 'billy' ),
				'section'  => 'billy_quote_section',
				'settings' => 'quote_valid_days',
				'priority' => 2,
			)
		);
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
			$validity->add( 'no_valid_currency', esc_html__( 'Please provide a valid currency format', 'billy' ) );
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
				$validity->add( 'no_valid_taxrates', esc_html__( 'Please separate the taxrates by newline and don\'t forget to append the "%" sign to each value.', 'billy' ) );
			}
		}

		return $validity;
	}

}
