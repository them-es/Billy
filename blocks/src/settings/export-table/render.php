<?php

defined( 'ABSPATH' ) || exit;

if ( class_exists( 'WP_Interactivity_API' ) && is_user_logged_in() ) {
	$output              = '<div ' . get_block_wrapper_attributes() . ' data-wp-interactive="billy">';
		$output         .= '<details class="wp-block-details">';
				$output .= '<summary class="wp-block-button__link wp-element-button">' . esc_html__( 'Export Table', 'billy' ) . '</summary>';
			$output     .= '<ul>';
	foreach ( array( 'xlsx', 'ods', 'csv' ) as $file_type ) {
		$output .= '<li><a data-wp-on--click="actions.exportTable" data-filetype="' . esc_attr( $file_type ) . '">' . esc_html( $file_type ) . '</a></li>';
	}
		$output .= '</ul>';
		$output .= '</details>';
	$output     .= '</div>';

	echo $output;
}
