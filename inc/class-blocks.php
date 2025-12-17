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
	public function init(): void {
		add_action( 'init', array( $this, 'on_init' ), 999 );

		// Editor: Block categories.
		add_filter( 'block_categories_all', array( $this, 'categories' ), 10 );
	}

	/**
	 * On init.
	 *
	 * @return void
	 */
	public function on_init(): void {
		// Block registration from meta data.
		if ( function_exists( 'register_block_type' ) ) {
			$block_json_files = glob( __DIR__ . '/../blocks/build/*/*/block.json' );

			// Autoregister all blocks found in the `build/blocks` folder.
			foreach ( $block_json_files as $filename ) {
				register_block_type( $filename );
			}
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
	public function categories( $categories ): array {
		$categories[] = array(
			'slug'  => 'billy-blocks',
			'title' => esc_html__( 'Billy Blocks', 'billy' ),
		);

		return $categories;
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
	public function meta_label_text_render_callback( $label, $text, $class_name ): string {
		return '<div' . ( ! empty( $class_name ) ? ' class="' . $class_name . '"' : '' ) . '>' . ( ! empty( $text ) ? sprintf( __( '<div class="label">%1$s</div> <div class="text">%2$s</div>', 'billy' ), esc_html( $label ), wp_kses_post( $text ) ) : $label ) . '</div>';
	}
}
