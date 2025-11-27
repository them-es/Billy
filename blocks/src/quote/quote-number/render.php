<?php
echo ( new Billy_Blocks() )->meta_label_text_render_callback( sprintf( esc_html__( 'Current %s', 'billy' ), esc_html__( 'Quote', 'billy' ) ), ( new Billy() )->get_quote_number( get_the_ID() ), 'quote_number' . ( isset( $attributes['className'] ) ? ' ' . esc_attr( $attributes['className'] ) : '' ) );
