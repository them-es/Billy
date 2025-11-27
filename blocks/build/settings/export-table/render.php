<?php
if ( class_exists( 'WP_Interactivity_API' ) && is_user_logged_in() ) {
	$output      = '<div ' . get_block_wrapper_attributes() . ' data-wp-interactive="billy">';
	$output     .= '<label for="export-table" data-wp-on--click="actions.exportTable">' . esc_html__( 'Export Table', 'billy' ) . '</label>';
	$output     .= '<select id="export-table" data-wp-on--change="actions.exportTable">';
		$output .= '<option value=""></option>';
	foreach ( array( 'xlsx', 'ods', 'csv' ) as $option ) {
		$output .= '<option value="' . esc_attr( $option ) . '">' . esc_html( $option ) . '</option>';
	}
	$output .= '</select>';
	$output .= '</div>';

	echo $output;
}
