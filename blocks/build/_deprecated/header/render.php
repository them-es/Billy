<?php
$output = '<h1>' . esc_html( get_the_date( 'Y' ) ) . '</h1>';

if ( ! in_array( get_post_type(), array( 'billy-accounting' ), true ) ) {
	$header_reusable_block = get_posts(
		array(
			'post_type'   => 'wp_block',
			'title'       => 'Billy Header',
			'post_status' => array( 'publish', 'private' ),
		)
	);

	if ( $header_reusable_block ) {
		$output = do_blocks( '<!-- wp:block {"ref":' . (int) $header_reusable_block[0]->ID . '} /-->' );
	}
}

echo $output;
