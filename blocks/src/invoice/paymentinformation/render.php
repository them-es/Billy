<?php

defined( 'ABSPATH' ) || exit;

echo '<p class="paymentinformation' . ( isset( $attributes['className'] ) ? ' ' . esc_attr( $attributes['className'] ) : '' ) . '">' . wp_kses_post( nl2br( get_theme_mod( 'payment_information' ) ) ) . '</p>';
