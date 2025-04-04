<?php
/**
 * "mPDF" PHP library.
 * https://mpdf.github.io
 */
require __DIR__ . '/../vendor-prefixed/autoload.php';

use Billy\Mpdf\Mpdf;
use Billy\Mpdf\WatermarkText;
use Billy\Mpdf\HTMLParserMode;

defined( 'ABSPATH' ) || exit;

/**
 * Export PDF class.
 */
class Billy_PDF_Export {

	/**
	 * Stylesheet.
	 *
	 * @access public
	 * @var string
	 */
	public static $pdfstyles;

	/**
	 * Temporary directory.
	 * https://mpdf.github.io/installation-setup/folders-for-temporary-files.html
	 *
	 * @access public
	 * @var string
	 */
	public static $temp_dir;

	/**
	 * Font directory.
	 * https://mpdf.github.io/fonts-languages/fonts-in-mpdf-7-x.html
	 *
	 * @access public
	 * @var array
	 */
	public static $pdffont_dir;

	/**
	 * Font data.
	 *
	 * @access public
	 * @var array
	 */
	public static $pdffont;

	/**
	 * On load.
	 */
	public function __construct() {
		$mpdf_dir          = dirname( __DIR__ ) . '/mpdf';
		self::$pdfstyles   = file_get_contents( $mpdf_dir . '/css/pdf.css' );
		self::$temp_dir    = $mpdf_dir . '/tmp';
		self::$pdffont_dir = array(
			$mpdf_dir . '/fonts',
		);
		self::$pdffont     = array(
			'R' => 'Roboto-Regular.ttf',
			'B' => 'Roboto-Bold.ttf',
		);

		$this->init();
	}

	/**
	 * Plugin initiation:
	 * A helper function to initiate actions, hooks and other features needed.
	 *
	 * @return void
	 */
	public function init() {
		add_action( 'rest_api_init', array( $this, 'billy_rest_api_init' ), 100 );
	}

	/**
	 * Authorization.
	 *
	 * @return bool
	 */
	public function billy_authorized_to_view_pdf() {
		// [TODO]: Also authorize on password protected posts if the correct password has been entered.
		// 1. Get Invoice/Quote ID: intval( $_GET['id'] ) )...
		// 2. Get connected [PRO] Share link ID by querying "_post_uuid"...
		// 3. Permission granted if connected post has been accessed with the correct password...

		return current_user_can( 'read_private_posts' );
	}

	/**
	 * WP-API initiation:
	 * GET /wp-json/export/pdf/{ID}
	 *
	 * @return void
	 */
	public function billy_rest_api_init() {
		register_rest_route(
			'export',
			'/pdf',
			array(
				'methods'             => 'GET',
				'callback'            => array( $this, 'billy_export_pdf' ),
				'permission_callback' => function () {
					return self::billy_authorized_to_view_pdf();
				},
			)
		);
	}

	/**
	 * WP-API Custom endpoint callbacks.
	 *
	 * @param WP_REST_Request $request Options for the function.
	 *
	 * @return string|WP_Error
	 */
	public function billy_export_pdf( $request ) {
		// PDF generation is restricted.
		if ( ! self::billy_authorized_to_view_pdf() ) {
			return new WP_Error(
				'rest_cannot_view',
				esc_html__( 'You are not allowed to view this content.', 'billy' ),
				array( 'status' => rest_authorization_required_code() )
			);
		}

		$has_valid_parameters = $request->has_valid_params();
		if ( ! $has_valid_parameters || is_wp_error( $has_valid_parameters ) ) {
			return $has_valid_parameters;
		}

		$parameters = $request->get_params();

		$post_id = (int) $parameters['id']; // Invoice/Quote.

		global $post;
		$post = get_post( $post_id );

		if ( empty( $post_id ) || ! $post ) {
			return '404';
		}

		$post_type = $post->post_type;
		$reference = $post->post_title;

		$css = static::$pdfstyles;

		// Create PDF: https://github.com/mpdf/mpdf/blob/development/src/Config/ConfigVariables.php
		$mpdf = new Mpdf(
			array(
				'tempDir'             => static::$temp_dir,
				'mode'                => 'utf-8',
				'fontDir'             => static::$pdffont_dir,
				'fontdata'            => array(
					'pdffont' => static::$pdffont,
				),
				'default_font'        => 'pdffont',
				'simpleTables'        => false, // https://stackoverflow.com/a/67087295
				'useSubstitutions'    => true,
				'setAutoBottomMargin' => 'stretch',
			)
		);

		if ( ! in_array( $post->post_status, array( 'publish', 'future', 'private' ), true ) ) {
			$mpdf->SetWatermarkText( new WatermarkText( esc_html__( 'DRAFT', 'billy' ) ) );
			$mpdf->showWatermarkText = true;
		}

		$mpdf->WriteHTML( $css, HTMLParserMode::HEADER_CSS );

		$footer_ids = get_posts(
			array(
				'post_type'   => 'wp_block',
				'title'       => 'Billy Footer',
				'post_status' => array( 'publish', 'private' ),
				'fields'      => 'ids',
			)
		);

		$content = '';

		$blocks = parse_blocks( get_the_content() );

		foreach ( $blocks as $block ) {
			// Exclude reusable Footer blocks.
			if ( 'core/block' !== $block['blockName'] || ( 'core/block' === $block['blockName'] && ! in_array( $block['attrs']['ref'], $footer_ids, true ) ) ) {
				$content .= render_block( $block );
			}
		}

		// Remove line breaks from content.
		$content = preg_replace( '/\r|\n/', '', $content );

		// Filterable content. @since 1.10.0!
		if ( is_readable( get_theme_file_path( 'templates/' . $post_type . '-pdf-content.html' ) ) ) {
			$content = file_get_contents( get_theme_file_path( 'templates/' . $post_type . '-pdf-content.html' ) );
		} elseif ( is_readable( get_theme_file_path( 'templates/billy-pdf-content.html' ) ) ) {
			$content = file_get_contents( get_theme_file_path( 'templates/billy-pdf-content.html' ) );
		} else {
			$content = apply_filters( 'billy_pdf_content', $content, $post_type );
		}

		// [WORKAROUND] Replace translation labels in table output with gettext strings. [TODO] Refactor table block.
		$translation_placeholders       = array(
			'data-label="title"></th>',
			'data-label="description"></th>',
			'data-label="amount"></th>',
			'data-label="subtotal"></th>',
			'data-label="total"></th>',
			'data-label="tax"></th>',
		);
		$translation_placeholder_values = array(
			'>' . __( '#', 'billy' ) . '</th>',
			'>' . __( 'Description', 'billy' ) . '</th>',
			'>' . __( 'Amount', 'billy' ) . '</th>',
			'>' . __( 'Subtotal', 'billy' ) . '</th>',
			'>' . __( 'Total', 'billy' ) . '</th>',
			'>' . __( 'Tax', 'billy' ) . '</th>',
		);
		$content                        = str_replace( $translation_placeholders, $translation_placeholder_values, $content );

		// Replace dynamic value.
		$content_placeholders       = array(
			'{DATE}',
			'{EMAIL}',
			'{SITETITLE}',
			'{SITEICON}',
			'{CURRENTPAGE}',
			'{TOTALPAGES}',
			'class="has-text-align-center',
			'class="has-text-align-right',
			'class="has-text-align-left',
			'<p ',
			'</p>',
		);
		$content_placeholder_values = array(
			esc_html( get_the_date( '', $post_id ) ),
			esc_html( get_theme_mod( 'email', get_bloginfo( 'admin_email' ) ) ),
			esc_html( get_bloginfo( 'name' ) ),
			get_site_icon_url() ? '<img src="' . esc_url( get_site_icon_url() ) . '" height="70" />' : '',
			'{PAGENO}',
			'{nbpg}',
			'align="center" class="has-text-align-center',
			'align="right" class="has-text-align-right',
			'align="left" class="has-text-align-left',
			'<figure ',
			'</figure>',
		);
		$content                    = str_replace( $content_placeholders, $content_placeholder_values, $content );

		// Workaround to fix mising display "flex" compatibility. Count inner "wp-block-column" blocks and add width to style attributes.
		$dom = new DOMDocument();
		libxml_use_internal_errors( true ); // Suppress warnings for invalid HTML.
		$dom->loadHTML( '<meta charset="UTF-8" />' . $content ); // Make sure the content will be UTF-8 formatted.
		libxml_clear_errors();

		$xpath = new DOMXPath( $dom );

		// Find all wp-block-columns elements.
		$columns = $xpath->query( '//div[contains(@class, "wp-block-columns")]' );

		foreach ( $columns as $column ) {
			// Find all inner wp-block-column elements.
			$inner_columns = $xpath->query( './/div[contains(@class, "wp-block-column")]', $column );
			$count         = $inner_columns->length;

			if ( $count > 0 ) {
				foreach ( $inner_columns as $inner_column ) {
					$inner_column->setAttribute( 'style', 'width: ' . (int) ( 100 / $count ) . '%;' );
				}
			}
		}

		$content = $dom->saveHTML();

		wp_reset_postdata();

		// PDF footer.
		if ( $footer_ids ) {
			$footer_content = get_post_field( 'post_content', $footer_ids[0] );
		} else {
			// Fallback.
			$footer_content = '<table class="footer" width="100%">
			<tr>
				<td width="33%"><small>' . esc_html( get_the_date( '', $post_id ) ) . '</small></td>
				<td width="33%" align="center"><small>{PAGENO}/{nbpg}</small></td>
				<td width="33%" align="right"><small>' . esc_html( $reference ) . '</small></td>
			</tr>
		</table>';
		}

		// Filterable footer. @since 1.10.0!
		if ( is_readable( get_theme_file_path( 'templates/' . $post_type . '-pdf-footer.html' ) ) ) {
			$content = file_get_contents( get_theme_file_path( 'templates/' . $post_type . '-pdf-footer.html' ) );
		} elseif ( is_readable( get_theme_file_path( 'templates/billy-pdf-footer.html' ) ) ) {
			$footer_content = file_get_contents( get_theme_file_path( 'templates/billy-pdf-footer.html' ) );
		} else {
			$footer_content = apply_filters( 'billy_pdf_footer', $footer_content, $post_type );
		}

		$footer_placeholders       = array(
			'{DATE}',
			'{EMAIL}',
			'{SITETITLE}',
			'{SITEICON}',
			'{CURRENTPAGE}',
			'{TOTALPAGES}',
			'class="has-text-align-center',
			'class="has-text-align-right',
			'class="has-text-align-left',
			'<p ',
			'</p>',
		);
		$footer_placeholder_values = array(
			esc_html( get_the_date( '', $post_id ) ),
			esc_html( get_theme_mod( 'email', get_bloginfo( 'admin_email' ) ) ),
			esc_html( get_bloginfo( 'name' ) ),
			get_site_icon_url() ? '<img src="' . esc_url( get_site_icon_url() ) . '" height="35" />' : '',
			'{PAGENO}',
			'{nbpg}',
			'align="center" class="has-text-align-center',
			'align="right" class="has-text-align-right',
			'align="left" class="has-text-align-left',
			'<figure ',
			'</figure>',
		);
		$footer_content            = str_replace( $footer_placeholders, $footer_placeholder_values, $footer_content );

		// Workaround to fix mising display "flex" compatibility. Count inner "wp-block-column" blocks and add width to style attributes.
		$dom = new DOMDocument();
		libxml_use_internal_errors( true ); // Suppress warnings for invalid HTML.
		$dom->loadHTML( '<meta charset="UTF-8" />' . $footer_content ); // Make sure the content will be UTF-8 formatted.
		libxml_clear_errors();

		$xpath = new DOMXPath( $dom );

		// Find all wp-block-columns elements.
		$columns = $xpath->query( '//div[contains(@class, "wp-block-columns")]' );

		foreach ( $columns as $column ) {
			// Find all inner wp-block-column elements.
			$inner_columns = $xpath->query( './/div[contains(@class, "wp-block-column")]', $column );
			$count         = $inner_columns->length;

			if ( $count > 0 ) {
				foreach ( $inner_columns as $inner_column ) {
					$inner_column->setAttribute( 'style', 'width: ' . (int) ( 100 / $count ) . '%;' );
				}
			}
		}

		$footer_content = $dom->saveHTML();

		$mpdf->SetHTMLFooter( do_blocks( $footer_content ) );

		$write_html = '<html>
			<body class="' . esc_attr( $post_type ) . '-template-default single single-' . esc_attr( $post_type ) . ' singular">
			<div class="entry-content"><div id="' . esc_attr( $post_type ) . '" class="' . esc_attr( $post_type ) . '-wrapper">' . $content . '</div></div>
			</body>
		</html>';

		$mpdf->SetTitle( esc_html( $reference ) );
		$mpdf->WriteHTML( $write_html, HTMLParserMode::HTML_BODY );
		$file = esc_attr( $reference ) . '.pdf';

		// https://mpdf.github.io/reference/mpdf-functions/output.html
		if ( ! empty( $parameters['return'] ) ) {
			return $mpdf->Output( $file, 'S' );// Return the document data as a string. Required for ZIP generation, etc.
		}

		$mpdf->Output( $file, 'I' );// Send file inline.
		exit();
	}
}
