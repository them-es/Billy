<?php
echo '<p class="quoteinformation' . ( isset( $attributes['className'] ) ? ' ' . esc_attr( $attributes['className'] ) : '' ) . '">' . nl2br( get_theme_mod( 'quote_information' ) ) . '</p>';
