<?php
/**
 * mPDF PHP library.
 * https://mpdf.github.io
 */
require dirname( __DIR__, 1 ) . '/vendor/autoload.php';

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

		if ( current_user_can( 'read_private_posts' ) ) {
			$this->init();
		}
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
					if ( ! wp_get_current_user() ) {
						return new WP_Error( 'rest_forbidden', esc_html__( 'You are not permitted to use this endpoint. Please sign in.', 'billy' ), array( 'status' => 401 ) );
					}

					return true;
				},
			)
		);
	}

	/**
	 * WP-API Custom endpoint callbacks.
	 *
	 * @param  WP_REST_Request $request Options for the function.
	 * @return void
	 */
	public function billy_export_pdf( $request ) {
		$parameters = $request->get_params();
		$post_id    = (int) $parameters['id'];
		$post_type  = get_post_type( $post_id );
		$reference  = esc_attr( get_the_title( $post_id ) );

		$css = static::$pdfstyles;
		/*if ( ! empty( $parameters['stylesheets'] ) ) {
			$enqueued_styles = base64_decode( esc_attr( $parameters['stylesheets'] ) );
			$enqueued_styles = explode( ',', str_replace( array( '[', ']', '"' ), '', $enqueued_styles ) );

			// Add all registered stylesheets to CSS output.
			foreach ( $enqueued_styles as $enqueued_style ) {
				$css .= file_get_contents( $enqueued_style );
			}
		}*/

		// Debugging.
		//print_r( $css ); exit();
		//print_r( str_replace( '"', '', base64_decode( $parameters['stylesheets'] ) ) ); exit();
		//print_r( $post_type ); exit();
		//print_r( apply_filters( 'the_content', get_post_field( 'post_content', $post_id ) ) ); exit();

		// Create PDF: https://github.com/mpdf/mpdf/blob/development/src/Config/ConfigVariables.php
		$mpdf = new Mpdf(
			array(
				'tempDir'      => static::$temp_dir,
				'simpleTables' => true,
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
						<td width="33%"><small>' . esc_attr( get_the_date( '', $post_id ) ) . '</small></td>
						<td width="33%" align="center"><small>{PAGENO}/{nbpg}</small></td>
						<td width="33%" align="right"><small>' . $reference . '</small></td>
					</tr>
				</table>'
			);
		}

		$output = '<html>
			<body class="' . $post_type . '-template-default single single-' . $post_type . ' singular"><div class="entry-content"><div id="' . $post_type . '" class="' . $post_type . '-wrapper">' . $content . '</div></div>
			</body>
		</html>';

		$mpdf->SetTitle( $reference );
		$mpdf->WriteHTML( $output, \Mpdf\HTMLParserMode::HTML_BODY );
		$mpdf->Output( $reference . '.pdf', 'I' );
		exit();
	}

}
