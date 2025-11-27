<?php
$value = esc_attr( $attributes['themeMod'] );

// Fallback value (only shown in edit mode).
global $wp;
$fallback_value = str_contains( $wp->request, 'block-renderer' ) ? sprintf( __( '<strong>%1$s</strong> %2$s', 'billy' ), '{' . $value . '}', esc_html__( 'N/A', 'billy' ) ) : '';

echo ( new Billy_Blocks() )->meta_label_text_render_callback( '', nl2br( get_theme_mod( $value, $fallback_value ) ), 'thememod' . ( isset( $attributes['className'] ) ? ' ' . esc_attr( $attributes['className'] ) : '' ) );
