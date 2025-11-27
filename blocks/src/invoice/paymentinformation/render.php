<?php
echo '<p class="paymentinformation' . ( isset( $attributes['className'] ) ? ' ' . esc_attr( $attributes['className'] ) : '' ) . '">' . nl2br( get_theme_mod( 'payment_information' ) ) . '</p>';
