<?php

defined( 'ABSPATH' ) || exit;

$value = esc_attr( $attributes['themeMod'] );

// Fallback value (only shown in edit mode).
global $wp;
$fallback_value = str_contains( $wp->request, 'block-renderer' ) ? wp_kses_post( sprintf( __( '<strong>%1$s</strong> %2$s', 'billy' ), '{' . $value . '}', esc_html__( 'N/A', 'billy' ) ) ) : '';

echo Billy_Blocks::meta_label_text_render_callback( '', wp_kses( nl2br( get_theme_mod( $value, $fallback_value ) ), array( 'br' => array() ) ), 'thememod' . ( isset( $attributes['className'] ) ? ' ' . esc_attr( $attributes['className'] ) : '' ) );
