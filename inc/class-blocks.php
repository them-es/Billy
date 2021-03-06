<?php

defined( 'ABSPATH' ) || exit;


/**
 * [PRO] Primary controller class
 */
class Billy_Blocks {

	/**
	 * On load.
	 */
	public function __construct() {
		$this->init();
	}


	/**
	 * Plugin initiation.
	 *
	 * A helper function to initiate actions, hooks and other features needed.
	 */
	public function init() {
		// Editor: Block assets.
		add_action( 'enqueue_block_editor_assets', array( $this, 'get_block_editor_assets' ) );

		// Frontend: Block assets.
		//add_action( 'enqueue_block_assets', 'enqueue_block_assets' );

		// Create Block categories.
		if ( ! function_exists( 'get_default_block_categories' ) ) {
			// < WordPress v5.8
			add_filter( 'block_categories', array( $this, 'categories' ), 10, 2 );
		} else {
			// >= WordPress v5.8
			add_filter( 'block_categories_all', array( $this, 'categories' ), 10, 2 );
		}

		// Serverside Render callback.
		if ( function_exists( 'register_block_type' ) ) {
			register_block_type(
				'billy-blocks/header',
				array(
					'render_callback' => array( $this, 'headerlayout_render_callback' ),
				)
			);

			register_block_type(
				'billy-blocks/theme-mod',
				array(
					'attributes' => array(
						'themeMod' => array(
							'type'    => 'string',
							'default' => '',
						),
						'className' => array(
							'type'    => 'string',
							'default' => '',
						),
					),
					'render_callback' => array( $this, 'theme_mod_render_callback' ),
				)
			);

			register_block_type(
				'billy-blocks/table-totals',
				array(
					'render_callback' => array( $this, 'tabletotals_render_callback' ),
				)
			);

			register_block_type(
				'billy-blocks/invoice-paymentinformation',
				array(
					'attributes' => array(
						'className' => array(
							'type'    => 'string',
							'default' => '',
						),
					),
					'render_callback' => array( $this, 'invoicepaymentinformation_render_callback' ),
				)
			);

			register_block_type(
				'billy-blocks/invoice-number',
				array(
					'attributes' => array(
						'className' => array(
							'type'    => 'string',
							'default' => '',
						),
					),
					'render_callback' => array( $this, 'invoicenumber_render_callback' ),
				)
			);

			register_block_type(
				'billy-blocks/invoice-date',
				array(
					'attributes' => array(
						'className' => array(
							'type'    => 'string',
							'default' => '',
						),
					),
					'render_callback' => array( $this, 'date_render_callback' ),
				)
			);

			register_block_type(
				'billy-blocks/invoice-duedate',
				array(
					'attributes' => array(
						'className' => array(
							'type'    => 'string',
							'default' => '',
						),
					),
					'render_callback' => array( $this, 'invoiceduedate_render_callback' ),
				)
			);

			register_block_type(
				'billy-blocks/quote-information',
				array(
					'attributes' => array(
						'className' => array(
							'type'    => 'string',
							'default' => '',
						),
					),
					'render_callback' => array( $this, 'quoteinformation_render_callback' ),
				)
			);

			register_block_type(
				'billy-blocks/quote-date',
				array(
					'attributes' => array(
						'className' => array(
							'type'    => 'string',
							'default' => '',
						),
					),
					'render_callback' => array( $this, 'date_render_callback' ),
				)
			);

			register_block_type(
				'billy-blocks/quote-validuntildate',
				array(
					'attributes' => array(
						'className' => array(
							'type'    => 'string',
							'default' => '',
						),
					),
					'render_callback' => array( $this, 'quotevaliduntildate_render_callback' ),
				)
			);
		}
	}


	/**
	 * Add custom block category to default categories.
	 * https://developer.wordpress.org/block-editor/reference-guides/filters/block-filters/#managing-block-categories
	 */
	public function categories( $categories ) {
		return array_merge(
			$categories,
			array(
				array(
					'slug'  => 'billy-blocks',
					'title' => esc_html__( 'Billy Blocks', 'billy' ),
				),
			)
		);
	}


	/**
	 * Server-side rendering.
	 *
	 * "billy-blocks/header"
	 * "billy-blocks/theme-mod"
	 * "billy-blocks/invoice-paymentinformation"
	 * "billy-blocks/invoice-number"
	 * "billy-blocks/postdate"
	 * "billy-blocks/duedate"
	 */
	public function preheader_render_callback() {
		$output = '<div class="pre-header d-print-none d-admin-none">';
			$output .= '<div>';
				// Print.
				$output .= '<span class="wp-block-button"><button class="wp-block-button__link is-style-outline print-button">' . esc_html__( 'Print', 'billy' ) . '</button></span>';
				$output .= '&nbsp;';

				// PDF export.
				/*if ( get_theme_mod( 'pdf_export_fullstyles_enabled' ) ) {
					// Get Stylesheets.
					$wp_styles       = wp_styles();
					$enqueued_styles = array();

					$urlparts        = wp_parse_url( get_site_url() );
					$domain          = $urlparts['scheme'] . '://' . $urlparts['host'];

					$theme = wp_get_theme();
					// 1. Theme styles.
					$stylesheets_match = array( '\/block\-library', 'themes\/' . $theme->stylesheet, 'themes\/' . $theme->template );
					foreach ( $wp_styles->queue as $handle ) {
						if ( preg_match( '/' . implode( '|', $stylesheets_match ) . '/', $wp_styles->registered[$handle]->src ) ) {
							$enqueued_styles[] = $domain . wp_make_link_relative( $wp_styles->registered[$handle]->src );
						}
					}
					// 2. Billy styles.
					$stylesheets_match = array( 'plugins\/billy\-' );
					foreach ( $wp_styles->queue as $handle ) {
						if ( preg_match( '/' . implode( '|', $stylesheets_match ) . '/', $wp_styles->registered[$handle]->src ) ) {
							$enqueued_styles[] = $domain . wp_make_link_relative( $wp_styles->registered[$handle]->src );
						}
					}

					// Debugging.
					//print_r( esc_url_raw(get_rest_url( null, 'export/pdf/?id=' . get_the_id() . '&stylesheets=' . json_encode( $enqueued_styles ) ) ) );
				}*/
				$output .= '<span class="wp-block-button"><button data-iframesrc="' . esc_url( get_rest_url( null, 'export/pdf/?id=' . get_the_id() /*. ( empty( $enqueued_styles ) ? '' : '&stylesheets=' . base64_encode( json_encode( $enqueued_styles ) ) ) */ ) ) . '" class="wp-block-button__link is-style-outline export-button">' . sprintf( esc_html__( 'Export %s', 'billy' ), esc_html__( 'PDF', 'billy' ) ) . '</button></span>';
				$output .= '&nbsp;';

				if ( in_array( get_post_type(), array( 'billy-accounting' ) ) ) {
					// Export table data as tab separated txt file.
					$output .= '<span class="wp-block-button"><button class="wp-block-button__link tsv-button">' . sprintf( esc_html__( 'Export %s', 'billy' ), esc_html__( 'TSV', 'billy' ) ) . '</button></span>';
				}
			$output .= '</div>';
		$output .= '</div>';

		return $output;
	}

	public function header_render_callback() {
		$output = '<div class="header">';
			if ( in_array( get_post_type(), array( 'billy-accounting' ) ) ) {
				$output .= '<h1>' . esc_html( get_the_date( 'Y' ) ) . '</h1>';
			} else {
				$header_post = wp_get_recent_posts(
					array(
						'post_type'   => 'billy-header',
						'numberposts' => '1',
					)
				);

				if ( ! empty( $header_post ) ) {
					$blocks = parse_blocks( get_post_field( 'post_content', $header_post[0]['ID'] ) );

					foreach ( $blocks as $block ) {
						$output .= render_block( $block );
					}
				} else {
					$output .= '<p class="components-notice is-error d-print-none"><a href="' . esc_url( admin_url( 'post-new.php?post_type=billy-header' ) ) . '" class="components-notice__content edit-link">' . esc_html__( 'Please setup a global header.', 'billy' ) . '</a></p>';
				}
			}
		$output .= '</div>';

		return $output;
	}

	public function headerlayout_render_callback() {
		$output = $this->preheader_render_callback();
		$output .= $this->header_render_callback();

		return $output;
	}

	public function meta_label_text_render_callback( $label, $text, $class ) {
		return '<div' . ( ! empty( $class ) ? ' class="' . $class . '"' : '' ) . '>' . ( ! empty( $text ) ? sprintf( __( '<div class="label">%1$s</div> <div class="text">%2$s</div>', 'billy' ), esc_html( $label ), esc_html( $text ) ) : $label ) . '</div>';
	}

	public function theme_mod_render_callback( $attributes, $content ) {
		$value     = esc_attr( $attributes['themeMod'] );
		$classname = esc_attr( $attributes['className'] );

		return '<div class="thememod' . ( $classname ? ' ' . $classname : '' ) . '">' . nl2br( get_theme_mod( $value, '<span class="d-none d-admin-block">' . sprintf( __( '<strong>%1$s</strong> %2$s', 'billy' ), '{' . $value . '}', esc_html__( 'N/A', 'billy' ) ) . '</span>' ) ) . '</div>';
	}

	public function date_render_callback( $attributes, $content ) {
		$classname = esc_attr( $attributes['className'] );

		return $this->meta_label_text_render_callback( esc_html__( 'Date', 'billy' ), get_the_date(), 'date' . ( $classname ? ' ' . $classname : '' ) );
	}

	public function invoicepaymentinformation_render_callback( $attributes, $content ) {
		$classname = esc_attr( $attributes['className'] );

		return '<p class="paymentinformation' . ( $classname ? ' ' . $classname : '' ) . '">' . nl2br( get_theme_mod( 'payment_information' ) ) . '</p>';
	}

	public function invoicenumber_render_callback( $attributes, $content ) {
		$classname = esc_attr( $attributes['className'] );

		return $this->meta_label_text_render_callback( __( 'Invoice', 'billy' ), Billy::get_invoicenumber( get_the_ID() ), 'invoicenumber' . ( $classname ? ' ' . $classname : '' ) );
	}

	public function invoiceduedate_render_callback( $attributes, $content ) {
		$add_days  = esc_attr( get_theme_mod( 'payment_due_days', '14' ) );
		$classname = esc_attr( $attributes['className'] );

		return $this->meta_label_text_render_callback( esc_html__( 'Due By', 'billy' ), Billy::get_duedate( get_the_ID(), (int) $add_days ), 'date' . ( $classname ? ' ' . $classname : '' ) );
	}

	public function quoteinformation_render_callback( $attributes, $content ) {
		$classname = esc_attr( $attributes['className'] );

		return '<p class="quoteinformation' . ( $classname ? ' ' . $classname : '' ) . '">' . nl2br( get_theme_mod( 'quote_information' ) ) . '</p>';
	}

	public function quotevaliduntildate_render_callback( $attributes, $content ) {
		$add_days  = esc_attr( get_theme_mod( 'quote_valid_days', '30' ) );
		$classname = esc_attr( $attributes['className'] );

		return $this->meta_label_text_render_callback( esc_html__( 'Valid Until', 'billy' ), Billy::get_duedate( get_the_ID(), (int) $add_days ), 'date' . ( $classname ? ' ' . $classname : '' ) );
	}


	/**
	 * Enqueue scripts.
	 */
	public function get_block_editor_assets() {
		// Blocks.
		$blocks_dir = ( defined( 'BILLY_PLUGIN_DIR' ) ? BILLY_PLUGIN_DIR : '' ) . 'blocks/build/';
		$blocks_asset_file = include $blocks_dir . 'index.asset.php';

		// Replace "wp-blockEditor" with "wp-block-editor".
		$blocks_asset_file['dependencies'] = array_replace(
			$blocks_asset_file['dependencies'],
			array_fill_keys(
				array_keys( $blocks_asset_file['dependencies'], 'wp-blockEditor' ),
				'wp-block-editor'
			)
		);

		$blocks_url = ( defined( 'BILLY_PLUGIN_URL' ) ? BILLY_PLUGIN_URL : '' ) . 'blocks/build/';
		wp_enqueue_script(
			'billy-blocks-script',
			$blocks_url . 'index.js',
			$blocks_asset_file['dependencies'],
			$blocks_asset_file['version']
		);

		// Load script translations.
		wp_set_script_translations( 'billy-blocks-script', 'billy' );
	}

}
