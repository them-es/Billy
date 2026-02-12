<?php

defined( 'ABSPATH' ) || exit;

echo ( new Billy_Blocks() )->meta_label_text_render_callback( sprintf( esc_html__( 'Current %s', 'billy' ), esc_html__( 'Invoice', 'billy' ) ), ( new Billy() )->get_invoice_number( get_the_ID() ), 'invoice_number' . ( isset( $attributes['className'] ) ? ' ' . esc_attr( $attributes['className'] ) : '' ) );
