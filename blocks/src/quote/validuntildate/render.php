<?php

defined( 'ABSPATH' ) || exit;

echo ( new Billy_Blocks() )->meta_label_text_render_callback( esc_html__( 'Valid Until', 'billy' ), ( new Billy() )->get_duedate( get_the_ID(), (int) get_theme_mod( 'quote_valid_days', 30 ) ), 'date' . ( isset( $attributes['className'] ) ? ' ' . esc_attr( $attributes['className'] ) : '' ) );
