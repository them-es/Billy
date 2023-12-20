<?php
/**
 * "mPDF" PHP library.
 * https://mpdf.github.io
 */
require __DIR__ . '/../vendor/autoload.php';

use Mpdf\Mpdf;

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
		self::$temp_dir    = $mpdf_dir . '/tmp/';
		self::$pdffont_dir = array(
			$mpdf_dir . '/fonts/',
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
		add_action( 'rest_api_init', array( $this, 'billy_rest_api_init' ) );
	}

	/**
	 * Authorization.
	 *
	 * @return bool
	 */
	public function billy_authorized_to_view_pdf() {
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
	 * @return bool|WP_Error
	 */
	public function billy_export_pdf( $request ) {
		$has_valid_parameters = $request->has_valid_params();
		if ( ! $has_valid_parameters || is_wp_error( $has_valid_parameters ) ) {
			return $has_valid_parameters;
		}

		// PDF generation is restricted.
		if ( ! self::billy_authorized_to_view_pdf() ) {
			return new WP_Error(
				'rest_cannot_view',
				__( 'You are not allowed to view this content.', 'billy' ),
				array( 'status' => rest_authorization_required_code() )
			);
		}

		$parameters = $request->get_params();

		$post_id   = (int) $parameters['id']; // Invoice/Quote.
		$post      = get_post( $post_id );
		$post_type = $post->post_type;
		$reference = $post->post_title;

		$css = static::$pdfstyles;

		// Create PDF: https://github.com/mpdf/mpdf/blob/development/src/Config/ConfigVariables.php
		$mpdf = new Mpdf(
			array(
				'tempDir'      => static::$temp_dir,
				'simpleTables' => false, // https://stackoverflow.com/a/67087295
				'mode'         => 'utf-8',
				'fontDir'      => static::$pdffont_dir,
				'fontdata'     => array(
					'pdffont' => static::$pdffont,
				),
				'default_font' => 'pdffont',
			)
		);

		$mpdf->WriteHTML( $css, \Mpdf\HTMLParserMode::HEADER_CSS );

		$content = '';
		if ( ! empty( $post_id ) && get_post( $post_id ) ) {
			global $post;
			$post = get_post( $post_id );

			setup_postdata( $post );

			$blocks = parse_blocks( get_the_content() );
			foreach ( $blocks as $block ) {
				$content .= render_block( $block );
			}

			// --> Start Workaround: Add spacing in tbody content to each <p>/<ul>/<ol>.
			$search_tags  = array(
				'<p>',
				'</p>',
				'<ul>',
				'</ul>',
				'<ol>',
				'</ol>',
			);
			$spacer       = '<hr style="margin: 1.5pt 0; color: #FFF;">';
			$replace_tags = array(
				$spacer . '<p>',
				'</p>' . $spacer,
				$spacer . '<ul>',
				'</ul>' . $spacer,
				$spacer . '<ol>',
				'</ol>' . $spacer,
			);

			// Modify <tbody> content.
			preg_match( '/<tbody>(.*?)<\/tbody>/s', $content, $match );
			$tbody_content = str_replace( $search_tags, $replace_tags, $match[0] );

			// Replace <tbody> with modified content.
			$content = preg_replace( '/<tbody>(.*?)<\/tbody>/s', $tbody_content, $content );
			// <-- End Workaround.

			// Remove line breaks from content.
			$content = preg_replace( '/\r|\n/', '', $content );

			wp_reset_postdata();

			// PDF footer.
			$mpdf->SetHTMLFooter(
				'<table class="footer" width="100%">
					<tr>
						<td width="33%"><small>' . esc_html( get_the_date( '', $post_id ) ) . '</small></td>
						<td width="33%" align="center"><small>{PAGENO}/{nbpg}</small></td>
						<td width="33%" align="right"><small>' . esc_html( $reference ) . '</small></td>
					</tr>
				</table>'
			);
		}

		$output = '<html>
			<body class="' . esc_attr( $post_type ) . '-template-default single single-' . esc_attr( $post_type ) . ' singular"><div class="entry-content"><div id="' . esc_attr( $post_type ) . '" class="' . esc_attr( $post_type ) . '-wrapper">' . $content . '</div></div>
			</body>
		</html>';

		$mpdf->SetTitle( esc_html( $reference ) );
		$mpdf->WriteHTML( $output, \Mpdf\HTMLParserMode::HTML_BODY );
		$mpdf->Output( esc_attr( $reference ) . '.pdf', 'I' );
		exit();
	}
}
