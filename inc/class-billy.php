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
		self::$plugin_name    = esc_attr( $plugin_data['Name'] );
		self::$plugin_version = esc_attr( $plugin_data['Version'] );
		self::$plugin_slug    = esc_attr( $plugin_data['TextDomain'] );
		self::$plugin_url     = defined( 'BILLY_PLUGIN_URL' ) ? esc_url( BILLY_PLUGIN_URL ) : esc_url( plugin_dir_url( __DIR__ ) );
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

		// Enqueue Frontend assets.
		add_action( 'wp_enqueue_scripts', array( $this, 'enqueue_assets' ), 998 );

		// Title Format.
		add_filter( 'private_title_format', array( $this, 'title_format' ), 10, 2 );
		add_filter( 'protected_title_format', array( $this, 'title_format' ), 10, 2 );

		// Custom Post Type wrapper.
		add_filter( 'the_content', array( $this, 'billy_modify_content' ), 1 );

		// Include Custom Posts in main query.
		// add_action( 'pre_get_posts', array( $this, 'include_invoices_in_postsquery' ) );

		// Modify REST response.
		if ( ! is_admin() ) {
			add_filter( 'rest_prepare_billy-invoice', array( $this, 'blocks_to_rest_api' ), 10, 3 );
			add_filter( 'rest_prepare_billy-quote', array( $this, 'blocks_to_rest_api' ), 10, 3 );
		}
	}

	/**
	 * [Fallback/Legacy] Create the function to output the dashboard widget content.
	 * (!) This admin-only function moved to the new Billy_Admin() class in v2.0.
	 *
	 * @return string
	 */
	public static function dashboard_widget_content() {
		return ( new Billy_Admin() )->wp_dashboard_widget_body();
	}

	/**
	 * [Fallback/Legacy] Create the function to output the dashboard widget footer.
	 * (!) This admin-only function moved to the new Billy_Admin() class in v2.0.
	 *
	 * @return string
	 */
	public static function dashboard_widget_footer() {
		return ( new Billy_Admin() )->wp_dashboard_widget_footer();
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

		// [TODO: Remove] Deprecated 2022-09.
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
		// [TODO: Remove] Deprecated 2022-09: billy-header found? Insert existing content as reusable block and delete old post. Otherwise insert empty template.
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
					if ( wpml_get_language_information( null, $header_reusable_block->ID )['locale'] === self::$locale ) {
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
					if ( wpml_get_language_information( null, $footer_reusable_block->ID )['locale'] === self::$locale ) {
						$footer_id = $footer_reusable_block->ID;
					}
				}
			}

			if ( empty( $footer_id ) ) {
				$footer_id = $footer_reusable_blocks[0]->ID;
			}
		}

		/**
		 * Register post type: Invoices.
		 */
		$invoice_template = array(
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
		);

		// Filterable template. @since 1.10.0
		$invoice_template = apply_filters(
			'billy_invoice_template',
			$invoice_template,
			array(
				'ref_header' => $header_id,
				'ref_footer' => $footer_id,
			)
		);

		$cpt_settings = array(
			'labels'        => array(
				'name'          => esc_html__( 'Invoices', 'billy' ),
				'singular_name' => esc_html__( 'Invoice', 'billy' ),
			),
			'menu_icon'     => 'dashicons-tickets',
			'public'        => true,
			'show_in_rest'  => true,
			'supports'      => array(
				'editor' => array( 'notes' => true ),
				'excerpt',
				'author',
				'thumbnail',
				'revisions',
				'custom-fields',
			), // Custom fields need to be supported for "register_post_meta".
			'taxonomies'    => array( 'category' ),
			'show_ui'       => true,
			'show_in_menu'  => defined( 'BILLY_ADMIN_MENU' ) ? 'billy' : true,
			'template_lock' => 'insert',
		);

		if ( ! is_readable( get_theme_file_path( 'templates/billy-invoice.html' ) ) ) {
			$cpt_settings['template'] = $invoice_template;
		}

		register_post_type( 'billy-invoice', $cpt_settings );

		/**
		 * Register post type: Quotes.
		 */
		$quote_template = array(
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
		);

		// Filterable template. @since 1.10.0
		$quote_template = apply_filters(
			'billy_quote_template',
			$quote_template,
			array(
				'ref_header' => $header_id,
				'ref_footer' => $footer_id,
			)
		);

		$cpt_settings = array(
			'labels'        => array(
				'name'          => esc_html__( 'Quotes', 'billy' ),
				'singular_name' => esc_html__( 'Quote', 'billy' ),
			),
			'menu_icon'     => 'dashicons-tickets-alt',
			'public'        => true,
			'show_in_rest'  => true,
			'supports'      => array(
				'editor' => array( 'notes' => true ),
				'excerpt',
				'author',
				'thumbnail',
				'revisions',
				'custom-fields',
			), // Custom fields need to be supported for "register_post_meta".
			'taxonomies'    => array( 'category' ),
			'show_ui'       => true,
			'show_in_menu'  => defined( 'BILLY_ADMIN_MENU' ) ? 'billy' : true,
			'template_lock' => 'insert',
		);

		if ( ! is_readable( get_theme_file_path( 'templates/billy-quote.html' ) ) ) {
			$cpt_settings['template'] = $quote_template;
		}

		register_post_type( 'billy-quote', $cpt_settings );

		/**
		 * Register post type: Accounting.
		 */
		$financial_year = (int) get_the_date( 'Y' );

		// Custom financial year starting in month?
		if ( (int) wp_date( 'm' ) < (int) get_theme_mod( 'financial_year_begins_on_month', '01' ) ) {
			$financial_year = --$financial_year;
		}

		$accounting_template = array(
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
					'content'     => $financial_year,
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
		);

		// Filterable template. @since 1.10.0!
		$accounting_template = apply_filters( 'billy_accounting_template', $accounting_template );

		$cpt_settings = array(
			'labels'        => array(
				'name'          => esc_html__( 'Accounting', 'billy' ),
				'singular_name' => esc_html__( 'Accounting', 'billy' ),
			),
			'menu_icon'     => 'dashicons-book-alt',
			'public'        => true,
			'show_in_rest'  => true,
			'supports'      => array(
				'editor' => array( 'notes' => true ),
				'author',
				'thumbnail',
				'revisions',
			),
			'taxonomies'    => array( 'category' ),
			'show_ui'       => true,
			'show_in_menu'  => defined( 'BILLY_ADMIN_MENU' ) ? 'billy' : true,
			'template_lock' => 'insert',
		);

		if ( ! is_readable( get_theme_file_path( 'templates/billy-accounting.html' ) ) ) {
			$cpt_settings['template'] = $accounting_template;
		}

		register_post_type( 'billy-accounting', $cpt_settings );

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
	 * Flush rewrite rules.
	 *
	 * @return void
	 */
	public function flush_rewrite() {
		flush_rewrite_rules();
	}

	/**
	 * Get previous Post ID from existing post.
	 *
	 * @param int $post_id Post ID.
	 *
	 * @return int
	 */
	public static function get_previous_post_id( $post_id ) {
		global $post;
		$post = get_post( $post_id );

		$get_prev = get_previous_post();

		return $get_prev->ID ?? null;
	}

	/**
	 * Current financial year begins timestamp.
	 *
	 * @return DateTime
	 */
	public static function current_financial_year_begins_datetime() {
		$financial_year_begins_on_month = get_theme_mod( 'financial_year_begins_on_month', '01' );
		$financial_year_begins          = new DateTime( wp_date( 'Y' ) . '-' . $financial_year_begins_on_month . '-01' );

		if ( (int) $financial_year_begins_on_month > (int) wp_date( 'm' ) ) {
			$financial_year_begins = $financial_year_begins->modify( '- 1 year' );
		}

		return $financial_year_begins;
	}

	/**
	 * Current financial year begins.
	 *
	 * @param string $format Date format.
	 *
	 * @return string
	 */
	public static function get_current_financial_year_begins( $format = 'Y-m-d' ) {
		return self::current_financial_year_begins_datetime()->format( $format );
	}

	/**
	 * Current financial year ends.
	 *
	 * @param string $format Date format.
	 *
	 * @return string
	 */
	public static function get_current_financial_year_ends( $format = 'Y-m-d' ) {
		return self::current_financial_year_begins_datetime()->modify( '+ 1 year' )->modify( '- 1 day' )->format( $format );
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
		$post_id = get_the_ID();

		// PDF export link with 'wp_rest' nonce.
		$pdf_link = wp_nonce_url(
			get_rest_url(
				null,
				'export/pdf/?id=' . $post_id,
			),
			'wp_rest'
		);
		$output   = '<!-- wp:file {"href":"' . esc_url( $pdf_link ) . '","displayPreview":true} --><div id="pdf" class="wp-block-file"><a href="' . esc_url( $pdf_link ) . '" class="wp-block-file__button wp-element-button" download>' . sprintf( esc_html__( 'Download %s', 'billy' ), esc_html__( 'PDF', 'billy' ) ) . '</a>' . esc_html( get_the_title() ) . ' <object class="wp-block-file__embed" data="' . esc_url( $pdf_link ) . '"></object></div><!-- /wp:file -->';

		if ( in_array( get_post_type(), array( 'billy-invoice', 'billy-quote', 'billy-accounting' ), true ) ) {
			$output .= do_blocks( '<!-- wp:billy-blocks/export-table /-->' );
		}

		// Filterable output. @since 2.0.0
		$output = apply_filters( 'billy_preheader_content', $output );

		return '<div class="pre-header d-print-none d-admin-none">' . $output . '</div>';
	}

	/**
	 * Wrap content.
	 *
	 * @param string $content Post content.
	 *
	 * @return string
	 */
	public function billy_modify_content( $content ) {
		$post_type = get_post_type();

		if ( ! str_starts_with( $post_type, 'billy-' ) ) {
			return $content;
		}

		// [WORKAROUND] Replace translation labels in table output with gettext strings. [TODO|TBD] Refactor table blocks with render.php?
		$translation_placeholders       = array(
			'data-label="index"></th>',
			'data-label="title"></th>',
			'data-label="description"></th>',
			'data-label="amount"></th>',
			'data-label="subtotal"></th>',
			'data-label="total"></th>',
			'data-label="tax"></th>',
			'data-label="date"></th>',
			'data-label="reference"></th>',
			'data-label="earnings"></th>',
			'data-label="expenses"></th>',
			'data-label="taxes"></th>',
			'data-label="earnings-expenses"></th>',
			'data-label="taxes-earnings-expenses"></th>',
		);
		$translation_placeholder_values = array(
			'>' . __( '#', 'billy' ) . '</th>',
			'>' . __( '#', 'billy' ) . '</th>',
			'>' . __( 'Description', 'billy' ) . '</th>',
			'>' . __( 'Amount', 'billy' ) . '</th>',
			'>' . __( 'Subtotal', 'billy' ) . '</th>',
			'>' . __( 'Total', 'billy' ) . '</th>',
			'>' . __( 'Tax', 'billy' ) . '</th>',
			'>' . __( 'Date', 'billy' ) . '</th>',
			'>' . __( 'Reference', 'billy' ) . '</th>',
			'>' . __( 'Earnings', 'billy' ) . '</th>',
			'>' . __( 'Expenses', 'billy' ) . '</th>',
			'>' . __( 'Taxes', 'billy' ) . '</th>',
			'>' . sprintf(
				__( '%1$s/%2$s', 'billy' ),
				__( 'Earnings', 'billy' ),
				__( 'Expenses', 'billy' )
			) . '</th>',
			'>' . sprintf(
				__( '%1$s (%2$s/%3$s)', 'billy' ),
				__( 'Taxes', 'billy' ),
				__( 'Earnings', 'billy' ),
				__( 'Expenses', 'billy' )
			) . '</th>',
		);
		$content                        = str_replace( $translation_placeholders, $translation_placeholder_values, $content );

		if ( in_array( $post_type, array( 'billy-accounting' ), true ) && is_numeric( get_the_title() ) ) {
			$financial_year_begins_on_month = get_theme_mod( 'financial_year_begins_on_month', '01' );
			$financial_year_begins          = new DateTime( get_the_title() . '-' . $financial_year_begins_on_month . '-01' );

			$content = '<p class="financial-year alignright"><small>' . sprintf( esc_html__( '%1$s - %2$s', 'billy' ), $financial_year_begins->format( 'Y-m-d' ), $financial_year_begins->modify( '+ 1 year' )->modify( '- 1 day' )->format( 'Y-m-d' ) ) . '</small></p>' . $content;
		}

		return '<div id="' . esc_attr( $post_type ) . '" class="' . esc_attr( $post_type ) . '-wrapper' . ( ! in_array( $post_type, array( 'billy-contact' ), true ) ? ' alignwide' : '' ) . '">' . ( ! in_array( $post_type, array( 'billy-contact' ), true ) ? $this->preheader_render_callback() : '' ) . $content . '</div>';
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
	 * Get invoice number from meta.
	 *
	 * @param int $post_id Post ID.
	 *
	 * @return string
	 */
	public static function get_invoice_number_meta( $post_id = null ) {
		$invoice_number = get_post_meta( $post_id, '_invoice_number', true );

		// Meta does not exist. Autoincrement number from previous post or start new.
		if ( ! is_numeric( $invoice_number ) ) {
			$get_prev_id = self::get_previous_post_id( $post_id );

			if ( $get_prev_id ) {
				// Existing post: Get previous invoice number.
				$invoice_number     = (int) self::get_invoice_number_meta( $get_prev_id );
				$get_prev_unix_time = get_the_date( 'U', $get_prev_id );

				// New financial year: Reset to "0" if defined in Customizer.
				if ( $get_prev_unix_time < self::get_current_financial_year_begins( 'U' ) && get_theme_mod( 'reset_numbers_each_year' ) && 0 !== $invoice_number ) {
					$invoice_number = 0;
					set_theme_mod( 'invoice_number', $invoice_number );
				}
			} else {
				// New: Get current invoice number from Customizer.
				$invoice_number = (int) get_theme_mod( 'invoice_number', 0 );
			}

			// Increment +1.
			++$invoice_number;
		}

		return $invoice_number;
	}

	/**
	 * Get number as formatted string with optional prefix.
	 *
	 * @param int $post_id Post ID.
	 * @param int $number  Invoice/Quote number.
	 *
	 * @return string
	 */
	public static function prefix_number( $post_id, $number = null ) {
		if ( 'billy-quote' === get_post_type( $post_id ) ) {
			if ( empty( $number ) ) {
				$number = self::get_quote_number_meta( $post_id );
			}

			$prefix = get_theme_mod( 'quote_number_prefix', '' );
		} else {
			if ( empty( $number ) ) {
				$number = self::get_invoice_number_meta( $post_id );
			}

			$prefix = get_theme_mod( 'invoice_number_prefix', '' );
		}

		if ( empty( $prefix ) ) {
			return $number;
		}

		// Replace placeholders (optional).
		$prefix_placeholders = array(
			'{FINANCIALYEAR}',
			'{YEAR}',
			'{MONTH}',
			'{DAY}',
		);

		$financial_year_begins_on_month = get_theme_mod( 'financial_year_begins_on_month', '01' );
		$financial_year_begins          = new DateTime( get_the_date( 'Y', $post_id ) . '-' . $financial_year_begins_on_month . '-01' );

		if ( (int) $financial_year_begins_on_month > (int) get_the_date( 'm', $post_id ) ) {
			$financial_year_begins = $financial_year_begins->modify( '- 1 year' );
		}

		$prefix_placeholder_values = array(
			esc_attr( $financial_year_begins->format( 'Y' ) ),
			esc_attr( in_array( get_post_status( $post_id ), array( 'publish', 'private' ), true ) ? get_the_date( 'Y', $post_id ) : wp_date( 'Y' ) ),
			esc_attr( in_array( get_post_status( $post_id ), array( 'publish', 'private' ), true ) ? get_the_date( 'm', $post_id ) : wp_date( 'm' ) ),
			esc_attr( in_array( get_post_status( $post_id ), array( 'publish', 'private' ), true ) ? get_the_date( 'd', $post_id ) : wp_date( 'd' ) ),
		);
		$prefix                    = str_replace( $prefix_placeholders, $prefix_placeholder_values, $prefix );

		return sprintf( esc_html__( '%1$s%2$03s', 'billy' ), $prefix, $number );
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

		return self::prefix_number( $post_id );
	}

	/**
	 * [TEMP] Get invoice number in predefined format.
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
	 * Get quote number from meta.
	 *
	 * @param int $post_id Post ID.
	 *
	 * @return string
	 */
	public static function get_quote_number_meta( $post_id = null ) {
		$quote_number = get_post_meta( $post_id, '_quote_number', true );

		// Meta does not exist. Autoincrement number from previous post or start new.
		if ( ! is_numeric( $quote_number ) ) {
			$get_prev_id = self::get_previous_post_id( $post_id );

			if ( $get_prev_id ) {
				// Existing post: Get previous invoice number.
				$quote_number       = (int) self::get_quote_number_meta( $get_prev_id );
				$get_prev_unix_time = get_the_date( 'U', $get_prev_id );

				// New financial year: Reset to "0" if defined in Customizer.
				if ( $get_prev_unix_time < self::get_current_financial_year_begins( 'U' ) && get_theme_mod( 'reset_numbers_each_year' ) && 0 !== $quote_number ) {
					$quote_number = 0;
					set_theme_mod( 'invoice_number', $quote_number );
				}
			} else {
				// New: Get current invoice number from Customizer.
				$quote_number = (int) get_theme_mod( 'quote_number', 0 );
			}

			// Increment +1.
			++$quote_number;
		}

		return $quote_number;
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
			$quote_number = in_array( get_post_status( $post_id ), array( 'publish', 'private' ), true ) ? get_the_date( 'Ymd', $post_id ) : wp_date( 'Ymd' );
		} else {
			$quote_number = self::get_quote_number_meta( $post_id );
		}

		return self::prefix_number( $post_id, $quote_number );
	}

	/**
	 * [TEMP] Get quote number in predefined format.
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
		$date->modify( '+ ' . $add_days . ' days' );

		return date_i18n( get_option( 'date_format' ), (int) $date->format( 'U' ) );
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
		if ( 'PUT' === $request->get_method() ) {
			return $response;
		}

		// [TODO|TBD] Implement the following approach once included in core: https://github.com/WordPress/gutenberg/pull/18414
		$response->data['blocks'] = parse_blocks( $post->post_content );

		return $response;
	}

	/**
	 * Enqueue frontend assets.
	 *
	 * @return void
	 */
	public function enqueue_assets() {
		global $post;

		// Only enqueue when post contains a Billy block.
		if ( is_user_logged_in() && $post instanceof WP_Post && str_contains( $post->post_content, ':billy-blocks/' ) ) {
			// Styles.
			wp_enqueue_style( 'dashicons' );

			wp_enqueue_style( 'billy-style', self::$plugin_url . 'build/main.css', array(), self::$plugin_version );
			if ( is_rtl() ) {
				wp_enqueue_style( 'billy-style-rtl', self::$plugin_url . 'build/main-rtl.css', array(), self::$plugin_version );
			}

			// Scripts.
			wp_enqueue_script( 'billy-script', self::$plugin_url . 'build/main.js', array(), self::$plugin_version, true );
			wp_add_inline_script(
				'billy-script',
				'var globalDataBilly = {
					postId: "' . (int) get_the_ID() . '",
					postTitle: "' . esc_html( get_the_title() ) . '",
					postDate: "' . esc_html( get_the_date( 'Y-m-d' ) ) . '",
					postType: "' . esc_html( get_post_type() ) . '",
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
