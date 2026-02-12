<?php

defined( 'ABSPATH' ) || exit;

echo ( new Billy_Blocks() )->meta_label_text_render_callback( esc_html__( 'Due By', 'billy' ), ( new Billy() )->get_duedate( get_the_ID(), (int) get_theme_mod( 'payment_due_days', 14 ) ), 'date' . ( isset( $attributes['className'] ) ? ' ' . esc_attr( $attributes['className'] ) : '' ) );
