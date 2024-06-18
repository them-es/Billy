<?php

defined( 'ABSPATH' ) || exit;

/**
 * Primary controller class.
 */
class Billy_Blocks {
	/**
	 * On load.
	 */
	public function __construct() {
		$this->init();
	}

	/**
	 * Plugin initiation:
	 * A helper function to initiate actions, hooks and other features needed.
	 *
	 * @return void
	 */
	public function init() {
		add_action( 'init', array( $this, 'on_init' ), 999 );

		// Editor: Block assets.
		add_action( 'enqueue_block_editor_assets', array( $this, 'get_block_editor_assets' ) );

		// Editor: Block categories.
		if ( ! function_exists( 'get_default_block_categories' ) ) {
			// < WordPress v5.8
			add_filter( 'block_categories', array( $this, 'categories' ), 10 );
		} else {
			// >= WordPress v5.8
			add_filter( 'block_categories_all', array( $this, 'categories' ), 10 );
		}
	}

	/**
	 * On init.
	 *
	 * @return void
	 */
	public function on_init() {
		// Serverside Render callbacks.
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
					'attributes'      => array(
						'themeMod'  => array(
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
					'attributes'      => array(
						'className' => array(
							'type'    => 'string',
							'default' => '',
						),
					),
					'render_callback' => array( $this, 'invoice_paymentinformation_render_callback' ),
				)
			);

			register_block_type(
				'billy-blocks/invoice-number',
				array(
					'attributes'      => array(
						'className' => array(
							'type'    => 'string',
							'default' => '',
						),
					),
					'render_callback' => array( $this, 'invoice_number_render_callback' ),
				)
			);

			register_block_type(
				'billy-blocks/invoice-date',
				array(
					'attributes'      => array(
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
					'attributes'      => array(
						'className' => array(
							'type'    => 'string',
							'default' => '',
						),
					),
					'render_callback' => array( $this, 'invoice_duedate_render_callback' ),
				)
			);

			register_block_type(
				'billy-blocks/quote-number',
				array(
					'attributes'      => array(
						'className' => array(
							'type'    => 'string',
							'default' => '',
						),
					),
					'render_callback' => array( $this, 'quote_number_render_callback' ),
				)
			);

			register_block_type(
				'billy-blocks/quote-information',
				array(
					'attributes'      => array(
						'className' => array(
							'type'    => 'string',
							'default' => '',
						),
					),
					'render_callback' => array( $this, 'quote_information_render_callback' ),
				)
			);

			register_block_type(
				'billy-blocks/quote-date',
				array(
					'attributes'      => array(
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
					'attributes'      => array(
						'className' => array(
							'type'    => 'string',
							'default' => '',
						),
					),
					'render_callback' => array( $this, 'quote_validuntildate_render_callback' ),
				)
			);
		}
	}

	/**
	 * Add custom block category to default categories.
	 * https://developer.wordpress.org/block-editor/reference-guides/filters/block-filters/#managing-block-categories
	 *
	 * @param array $categories Block categories.
	 *
	 * @return array
	 */
	public function categories( $categories ) {
		$categories[] = array(
			'slug'  => 'billy-blocks',
			'title' => esc_html__( 'Billy Blocks', 'billy' ),
		);

		return $categories;
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

	/**
	 * Header: Reusable Block.
	 * CPT "billy-header" has been deprecated in 2022-09. It got replaced by this Reusable Block.
	 *
	 * @return string
	 */
	public function headerlayout_render_callback() {
		$output = '';
		if ( in_array( get_post_type(), array( 'billy-accounting' ), true ) ) {
			$output .= '<h1>' . esc_html( get_the_date( 'Y' ) ) . '</h1>';
		} else {
			$header_reusable_block = get_posts(
				array(
					'post_type'   => 'wp_block',
					'title'       => 'Billy Header',
					'post_status' => array( 'publish', 'private' ),
				)
			);

			$output .= do_blocks( '<!-- wp:block {"ref":' . (int) $header_reusable_block[0]->ID . '} /-->' );
		}

		return $output;
	}

	/**
	 * Meta label.
	 *
	 * @param string $label      Meta label.
	 * @param string $text       Meta text.
	 * @param string $class_name Meta class.
	 *
	 * @return string
	 */
	public function meta_label_text_render_callback( $label, $text, $class_name ) {
		return '<div' . ( ! empty( $class_name ) ? ' class="' . $class_name . '"' : '' ) . '>' . ( ! empty( $text ) ? sprintf( __( '<div class="label">%1$s</div> <div class="text">%2$s</div>', 'billy' ), esc_html( $label ), wp_kses_post( $text ) ) : $label ) . '</div>';
	}

	/**
	 * Theme mod (WP Customizer API setting).
	 *
	 * @param array $block_attributes Block attributes.
	 *
	 * @return string
	 */
	public function theme_mod_render_callback( $block_attributes ) {
		$value = esc_attr( $block_attributes['themeMod'] );
		// Fallback value (only shown in edit mode).
		global $wp;
		$fallback_value = ( false !== strpos( $wp->request, 'block-renderer' ) ? sprintf( __( '<strong>%1$s</strong> %2$s', 'billy' ), '{' . $value . '}', esc_html__( 'N/A', 'billy' ) ) : '' );

		return $this->meta_label_text_render_callback( '', nl2br( get_theme_mod( $value, $fallback_value ) ), 'thememod' . ( $block_attributes['className'] ? ' ' . esc_attr( $block_attributes['className'] ) : '' ) );
	}

	/**
	 * Post Date.
	 *
	 * @param array $block_attributes Block attributes.
	 *
	 * @return string
	 */
	public function date_render_callback( $block_attributes ) {
		return $this->meta_label_text_render_callback( esc_html__( 'Date', 'billy' ), get_the_date(), 'date' . ( $block_attributes['className'] ? ' ' . esc_attr( $block_attributes['className'] ) : '' ) );
	}

	/**
	 * Invoice payment information.
	 *
	 * @param array  $block_attributes Block attributes.
	 * @param string $content          Block content (needed for "Pro < 1.4.0" backwards compatibility).
	 *
	 * @return string
	 */
	public function invoice_paymentinformation_render_callback( $block_attributes, $content ) {
		return '<p class="paymentinformation' . ( $block_attributes['className'] ? ' ' . esc_attr( $block_attributes['className'] ) : '' ) . '">' . nl2br( get_theme_mod( 'payment_information' ) ) . '</p>';
	}

	/**
	 * Invoice number.
	 *
	 * @param array $block_attributes Block attributes.
	 *
	 * @return string
	 */
	public function invoice_number_render_callback( $block_attributes ) {
		return $this->meta_label_text_render_callback( sprintf( esc_html__( 'Current %s', 'billy' ), esc_html__( 'Invoice', 'billy' ) ), Billy::get_invoice_number( get_the_ID() ), 'invoice_number' . ( $block_attributes['className'] ? ' ' . esc_attr( $block_attributes['className'] ) : '' ) );
	}

	/**
	 * Invoice due date.
	 *
	 * @param array $block_attributes Block attributes.
	 *
	 * @return string
	 */
	public function invoice_duedate_render_callback( $block_attributes ) {
		return $this->meta_label_text_render_callback( esc_html__( 'Due By', 'billy' ), Billy::get_duedate( get_the_ID(), (int) get_theme_mod( 'payment_due_days', 14 ) ), 'date' . ( $block_attributes['className'] ? ' ' . esc_attr( $block_attributes['className'] ) : '' ) );
	}

	/**
	 * Quote number.
	 *
	 * @param array $block_attributes Block attributes.
	 *
	 * @return string
	 */
	public function quote_number_render_callback( $block_attributes ) {
		return $this->meta_label_text_render_callback( sprintf( esc_html__( 'Current %s', 'billy' ), esc_html__( 'Quote', 'billy' ) ), Billy::get_quote_number( get_the_ID() ), 'quotenumber' . ( $block_attributes['className'] ? ' ' . esc_attr( $block_attributes['className'] ) : '' ) );
	}

	/**
	 * Quote information.
	 *
	 * @param array $block_attributes Block attributes.
	 *
	 * @return string
	 */
	public function quote_information_render_callback( $block_attributes ) {
		return '<p class="quoteinformation' . ( $block_attributes['className'] ? ' ' . esc_attr( $block_attributes['className'] ) : '' ) . '">' . nl2br( get_theme_mod( 'quote_information' ) ) . '</p>';
	}

	/**
	 * Quote valid until date.
	 *
	 * @param array $block_attributes Block attributes.
	 *
	 * @return string
	 */
	public function quote_validuntildate_render_callback( $block_attributes ) {
		return $this->meta_label_text_render_callback( esc_html__( 'Valid Until', 'billy' ), Billy::get_duedate( get_the_ID(), (int) get_theme_mod( 'quote_valid_days', 30 ) ), 'date' . ( $block_attributes['className'] ? ' ' . esc_attr( $block_attributes['className'] ) : '' ) );
	}

	/**
	 * Enqueue scripts.
	 *
	 * @return void
	 */
	public function get_block_editor_assets() {
		// Blocks.
		$blocks_dir        = ( defined( 'BILLY_PLUGIN_DIR' ) ? BILLY_PLUGIN_DIR : '' ) . 'blocks/build/';
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
			$blocks_asset_file['version'],
			true
		);

		// Load script translations.
		wp_set_script_translations( 'billy-blocks-script', 'billy' );
	}
}
