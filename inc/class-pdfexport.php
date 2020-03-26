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
	 * Font directory.
	 *
	 * @access protected
	 * @var string
	 */
	protected static $pdffont_dir;

	/**
	 * Font data.
	 *
	 * @access protected
	 * @var array
	 */
	protected static $pdffont;

	/**
	 * On load.
	 */
	public function __construct() {
		self::$pdffont_dir = dirname( __DIR__ ) . '/mpdf/fonts/';
		self::$pdffont     = array(
			'R' => 'Roboto-Regular.ttf',
			'B' => 'Roboto-Bold.ttf',
		);

		if ( current_user_can( 'read_private_posts' ) ) {
			$this->init();
		}
	}

	/**
	 * Plugin initiation.
	 *
	 * A helper function to initiate actions, hooks and other features needed.
	 */
	public function init() {
		add_action( 'rest_api_init', array( $this, 'billy_rest_api_init' ) );
	}

	/**
	 * WP-API initiation.
	 *
	 * GET /wp-json/export/pdf/{ID}
	 */
	public function billy_rest_api_init() {
		register_rest_route(
			'export',
			'/pdf',
			array(
				'methods'  => 'GET',
				'callback' => array( $this, 'billy_export_pdf' ),
			)
		);
	}

	/**
	 * WP-API Custom endpoint callbacks.
	 *
	 * @param array $data Options for the function.
	 * @return json object of post data.
	 */
	public function billy_export_pdf( $data ) {
		$parameters = $data->get_params();
		$post_id    = esc_attr( $parameters['id'] );
		$post_type  = get_post_type( $post_id );

		$css = '';
		/*if ( ! empty( $parameters['stylesheets'] ) ) {
			$enqueued_styles = base64_decode( esc_attr( $parameters['stylesheets'] ) );
			$enqueued_styles = explode( ',', str_replace( array( '[', ']', '"' ), '', $enqueued_styles ) );

			// Add all registered stylesheets to output.
			foreach ( $enqueued_styles as $enqueued_style ) {
				$css .= file_get_contents( $enqueued_style );
			}
		}*/
		$css .= '
			body {
				font-size: 10pt;
				line-height: 1.5;
			}

			.d-none,
			.d-print-none {
				display: none;
			}
			
			p {
				font-size: inherit;
			}

			.small {
				font-size: small;
			}

			hr {
				margin: 10pt 0;
			}

			.header {
				margin-bottom: 40pt;
			}
			.header p {
				margin: 0;
			}
			.header .wp-block-image {
				width: 100pt;
			}
			.header .wp-block-columns {
				display: block;
				width: 100%;
			}
			.header .wp-block-columns .wp-block-column {
				display: block;
				float: left;
				width: 33%;
				min-width: 33%;
				margin: 0;
				border-bottom: 1px solid #fff;
			}
		
			strong {
				font-weight: bold;
			}

			.alignwide {
				display: block;
				max-width: none;
				width: 100%;
				margin-top: 0;
			}

			.details p {
				margin: 0;
			}
			.metadata p {
				text-align: right;
			}

			.intro {
				margin: 40pt 0 0;
			}
		
			.table {
				font-size: inherit;
				border-spacing: 10px;
				border-collapse: collapse;
				margin: 40pt 0;
				width: 100%;
			}
			.table th {
				text-align: left;
				font-weight: bold;
				background-color: #F8F8F8;
			}
			.table th,
			.table td {
				border: 1px solid;
				border-left: 0;
				border-right: 0;
				padding: 5pt 10pt;
			}
			.table tfoot td {
				font-weight: bold;
			}

			.wp-block-columns {
				display: block;
				width: 100%;
			}
			.wp-block-columns .wp-block-column {
				display: block;
				float: left;
				width: 33%;
				min-width: 33%;
				margin: 0;
			}

			.qr .qr-info {
				font-size: 9pt;
				padding: 0 15pt;
			}
		';

		// Debugging.
		//print_r( $css );exit();
		//print_r( str_replace( '"', '', base64_decode( $parameters['stylesheets'] ) ) );exit();
		//print_r( $post_type );exit();
		//print_r( $enqueued_styles );exit();
		//print_r( apply_filters( 'the_content', get_post_field( 'post_content', $post_id ) ) );exit();

		// Create PDF.
		$mpdf = new Mpdf(
			array(
				'tempDir'      => dirname( __DIR__, 1 ) . '/mpdf/tmp',
				'simpleTables' => true,
				'mode'         => 'utf-8',
				'fontDir'      => array(
					static::$pdffont_dir,
				),
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

			wp_reset_postdata();

			$mpdf->SetHTMLFooter(
				'<table width="100%">
					<tr>
						<td width="33%"><small>' . esc_attr( date_i18n( get_option( 'date_format' ), date( 'U' ) ) ) . '</small></td>
						<td width="33%" align="center"><small>{PAGENO}/{nbpg}</small></td>
						<td width="33%" align="right"><small>' . esc_attr( get_the_title( $post_id ) ) . '</small></td>
					</tr>
				</table>'
			);
		}

		$output = '<html>
			<body class="' . $post_type . '-template-default single single-' . $post_type . ' singular"><div class="entry-content"><div id="' . $post_type . '" class="' . $post_type . '-wrapper">' . $content . '</div></div>
			</body>
		</html>';

		$mpdf->WriteHTML( $output, \Mpdf\HTMLParserMode::HTML_BODY );

		$mpdf->Output();
		exit();
	}

}
