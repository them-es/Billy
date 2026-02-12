<?php

defined( 'ABSPATH' ) || exit;

echo ( new Billy_Blocks() )->meta_label_text_render_callback( esc_html__( 'Date', 'billy' ), get_the_date(), 'date' . ( isset( $attributes['className'] ) ? ' ' . esc_attr( $attributes['className'] ) : '' ) );
