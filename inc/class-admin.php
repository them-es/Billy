<?php

defined( 'ABSPATH' ) || exit;

/**
 * Primary controller class.
 */
class Billy_Admin extends Billy {
	/**
	 * On init.
	 */
	public function __construct() {
		// Dashboard widget.
		add_action( 'wp_dashboard_setup', array( $this, 'add_wp_dashboard_widget' ), 998 );

		// Enqueue Backend assets.
		add_action( 'admin_enqueue_scripts', array( $this, 'enqueue_admin_assets' ), 998 );
		add_action( 'enqueue_block_assets', array( $this, 'enqueue_admin_styles' ), 998 );

		// Theme Customizer.
		add_action( 'customize_register', array( $this, 'wp_customizer_options' ), 998 );

		// Output default block templates (if defined in theme).
		add_filter( 'default_content', array( $this, 'billy_default_content' ), 10, 2 );

		// Modify Post data onsave.
		add_action( 'rest_after_insert_billy-invoice', array( $this, 'onsave_invoice' ), 10, 2 );
		add_action( 'rest_after_insert_billy-quote', array( $this, 'onsave_quote' ), 10, 2 );
		add_action( 'rest_after_insert_billy-accounting', array( $this, 'onsave_accounting' ), 10, 2 );
		add_filter( 'wp_insert_post_data', array( $this, 'keep_original_date_on_publishing' ), 10, 2 );

		// Quick Edit rows.
		add_filter( 'post_row_actions', array( $this, 'remove_quick_edit_invoice' ), 10, 2 );
	}

	/**
	 * Add dashboard widget.
	 *
	 * @return void
	 */
	public function add_wp_dashboard_widget(): void {
		wp_add_dashboard_widget(
			'billy_dashboard',
			sprintf( esc_html__( '%1$s %2$s', 'billy' ), self::$plugin_name, self::$plugin_version ),
			array( $this, 'wp_dashboard_widget' )
		);
	}

	/**
	 * Output the dashboard widget content.
	 *
	 * @return string
	 */
	public function wp_dashboard_widget_body(): string {
		// Autofix invoice posts of current year missing meta "_invoice_number".
		$get_invoices_missing_meta = new WP_Query(
			array(
				'post_type'      => 'billy-invoice',
				'post_status'    => 'private',
				'posts_per_page' => -1,
				'meta_query'     => array(
					'relation' => 'OR',
					array(
						'key'     => '_invoice_number',
						'compare' => 'NOT EXISTS',
					),
					array(
						'key'     => '_invoice_number',
						'value'   => '',
						'compare' => '=',
					),
				),
				'fields'         => 'ids',
			),
		);

		if ( current_user_can( 'edit_private_posts' ) && $get_invoices_missing_meta->have_posts() ) {
			if ( wp_verify_nonce( wp_unslash( $_GET['_wpnonce'] ?? '' ) ) && isset( $_GET['fix_invoices'] ) && 'true' === $_GET['fix_invoices'] ) {
				$all_invoices_attrs = array(
					'post_type'      => 'billy-invoice',
					'post_status'    => 'private',
					'posts_per_page' => -1,
					'fields'         => 'ids',
				);

				if ( get_theme_mod( 'reset_numbers_each_year' ) ) {
					// Restrict invoices to current financial year.
					$all_invoices_attrs['date_query'] = array(
						array(
							'after'     => self::get_current_financial_year_begins(),
							'before'    => self::get_current_financial_year_ends(),
							'inclusive' => true,
						),
					);
				}

				$all_invoices = new WP_Query( $all_invoices_attrs );

				if ( $all_invoices->have_posts() ) {
					$invoice_number = get_theme_mod( 'invoice_number' );

					foreach ( $all_invoices->posts as $post_id ) {
						$post_title = self::prefix_number( $post_id, $invoice_number );

						// Update post.
						$fix_post = wp_update_post(
							array(
								'ID'         => (int) $post_id,
								'post_title' => $post_title,
								'post_name'  => sanitize_title( $post_title ),
								'meta_input' => array(
									'_invoice_number' => $invoice_number,
								),
							)
						);

						// Decrement -1.
						--$invoice_number;
					}
				}

				wp_reset_postdata();
			}
		}

		$latest_invoices = get_posts(
			array(
				'numberposts' => 1,
				'post_status' => 'private',
				'post_type'   => 'billy-invoice',
			)
		);
		$latest_quotes   = get_posts(
			array(
				'numberposts' => 1,
				'post_status' => 'private',
				'post_type'   => 'billy-quote',
			)
		);

		$billy_template_filter = array();
		// CPT Templates.
		$billy_template_filter[ esc_html__( 'Invoice', 'billy' ) ]    = has_filter( 'billy_invoice_template' ) || is_readable( get_theme_file_path( 'templates/billy-invoice.html' ) );
		$billy_template_filter[ esc_html__( 'Quote', 'billy' ) ]      = has_filter( 'billy_quote_template' ) || is_readable( get_theme_file_path( 'templates/billy-quote.html' ) );
		$billy_template_filter[ esc_html__( 'Accounting', 'billy' ) ] = has_filter( 'billy_accounting_template' ) || is_readable( get_theme_file_path( 'templates/billy-accounting.html' ) );
		// [PRO].
		$billy_template_filter[ esc_html__( 'Contact', 'billy' ) ]      = has_filter( 'billy_contact_template' ) || is_readable( get_theme_file_path( 'templates/billy-contact.html' ) );
		$billy_template_filter[ esc_html__( 'To do', 'billy' ) ]        = has_filter( 'billy_to_do_template' ) || is_readable( get_theme_file_path( 'templates/billy-to-do.html' ) );
		$billy_template_filter[ esc_html__( 'Timetracking', 'billy' ) ] = has_filter( 'billy_timetracking_template' ) || is_readable( get_theme_file_path( 'templates/billy-timetracking.html' ) );
		// PDF templates.
		$billy_template_filter[ esc_html__( 'PDF Content', 'billy' ) ] = has_filter( 'billy_pdf_content' ) || is_readable( get_theme_file_path( 'templates/billy-pdf-content.html' ) );
		$billy_template_filter[ esc_html__( 'PDF Footer', 'billy' ) ]  = has_filter( 'billy_pdf_footer' ) || is_readable( get_theme_file_path( 'templates/billy-pdf-footer.html' ) );

		$output_billy_templates = '';
		foreach ( $billy_template_filter as $template_name => $template_found ) {
			if ( $template_found ) {
				$output_billy_templates .= sprintf( esc_html__( '✅ %s', 'billy' ), $template_name ) . '<br>';
			}
		}

		return '<table class="widefat">
			<tbody>
				<tr>
					<td><strong>' . esc_html__( 'Locale', 'billy' ) . '</strong></td>
					<td><a href="' . esc_url( get_edit_profile_url() ) . '">' . esc_html( self::$locale ) . '</a></td>
				</tr>
				<tr>
					<td><strong>' . esc_html__( 'Currency', 'billy' ) . '</strong></td>
					<td>' . esc_html( self::$currency ) . '</td>
				</tr>
				<tr>
					<td><strong>' . esc_html__( 'Taxes', 'billy' ) . '</strong></td>
					<td>' . ( get_theme_mod( 'taxrates' ) ? nl2br( get_theme_mod( 'taxrates' ) ) : '-' ) . '</td>
				</tr>' .
				( $latest_invoices ? '
				<tr>
					<td><strong>' . esc_html__( 'Current invoice', 'billy' ) . '</strong></td>
					<td><a href="' . esc_url( admin_url( 'edit.php?post_type=billy-invoice' ) ) . '">' . esc_html( $this->get_invoice_number( $latest_invoices[0]->ID ) ) . '</a></td>
				</tr>' : '' ) .
				( $latest_quotes ?
				'<tr>
					<td><strong>' . esc_html__( 'Current quote', 'billy' ) . '</strong></td>
					<td><a href="' . esc_url( admin_url( 'edit.php?post_type=billy-quote' ) ) . '">' . esc_html( $this->get_quote_number( $latest_quotes[0]->ID ) ) . '</a></td>
				</tr>
				<tr>
					<td><strong>' . esc_html__( 'Financial Year', 'billy' ) . '</strong></td>
					<td>' . sprintf( esc_html__( '%1$s - %2$s', 'billy' ), self::get_current_financial_year_begins(), self::get_current_financial_year_ends() ) . ( get_theme_mod( 'reset_numbers_each_year' ) ? '<br><small>' . esc_html__( 'Numbers will be reset each year', 'billy' ) . '</small>' : '' ) . '</td>
				</tr>' .
				( ! empty( $output_billy_templates ) ? '
				<tr>
					<td><strong>' . esc_html__( 'Customized templates', 'billy' ) . '</strong></td>
					<td>' . $output_billy_templates . '</td>
				</tr>' : '' ) .
				'
				<tr>
					<td><p class="customize-edit"><a href="' . esc_url( admin_url( 'customize.php?autofocus[panel]=billy_setup_panel' ) ) . '" title="' . esc_attr__( 'Edit', 'billy' ) . '">' . sprintf( __( '%1$s %2$s', 'billy' ), '<span class="dashicons dashicons-edit" aria-hidden="true"></span>', esc_html__( 'Edit', 'billy' ) ) . '</a></p></td>
				</tr>
				<tr>
					<td>' .
				(
					isset( $fix_post ) ?
					'<span class="dashicons dashicons-yes-alt" aria-hidden="true" style="color: green;"></span> ' . esc_attr__( 'Problems have been solved!', 'billy' ) :
					(
						$get_invoices_missing_meta->have_posts() ?
							'<span class="dashicons dashicons-warning" aria-hidden="true" style="color: red;"></span> The following invoices are missing required meta data: <strong>' . implode( ', ', $get_invoices_missing_meta->posts ) . '</strong>. <a href="' . add_query_arg( 'fix_invoices', 'true', wp_nonce_url( admin_url() ) ) . '" onclick="return confirm(\'Please make sure that the latest invoice number - defined in the Customizer - is correct. Invoice numbers will be regenerated and updated in descending order.\')">Click here to try to fix the problem</a> - Backing up the database beforehand is strongly recommended!' : ''
					)
				) : '' ) .
				'
					</td>
				</tr>
			</tbody>
		</table>';
	}

	/**
	 * Output the dashboard widget footer.
	 *
	 * @return string
	 */
	public function wp_dashboard_widget_footer(): string {
		return '<table class="footer">
			<tbody>
				<tr>
					<td><p>' . ( class_exists( 'Billy_Pro' ) ? '<small>' . sprintf( __( 'Thank you for purchasing %s!', 'billy' ), '<strong>Billy Pro</strong> <span class="dashicons dashicons-smiley" aria-hidden="true"></span>' ) . '</small>' : '<strong><a href="' . esc_url( self::$billy_url ) . '">' . sprintf( __( '%1$s %2$s', 'billy' ), __( 'Get the <u>Pro</u> version', 'billy' ), '<span class="dashicons dashicons-external" aria-hidden="true"></span>' ) . '</a></strong><br><small>' . __( 'Premium add-on with a project management suite, WooCommerce integration, Contacts, Address Book, QR code payments, Stats & Charts, Share links, and more.', 'billy' ) . '</small></p>' ) . '<hr><p><strong><a href="' . esc_url( 'https://wordpress.org/support/plugin/' . self::$plugin_slug . '/reviews/?rate=5#new-post' ) . '">' . sprintf( __( '%1$s %2$s', 'billy' ), __( 'Please rate this Plugin', 'billy' ), ' <span class="dashicons dashicons-external" aria-hidden="true"></span>' ) . '</a></strong><br><span class="dashicons dashicons-star-filled" aria-hidden="true"></span><span class="dashicons dashicons-star-filled" aria-hidden="true"></span><span class="dashicons dashicons-star-filled" aria-hidden="true"></span><span class="dashicons dashicons-star-filled" aria-hidden="true"></span><span class="dashicons dashicons-star-filled" aria-hidden="true"></span></p></td>
					<td> </td>
					<td><a href="' . esc_url( self::$billy_url ) . '"><img src="' . esc_url( self::$plugin_url ) . 'assets/img/logo.png" class="logo" alt="Billy" /></a></td>
				</tr>
			</tbody>
		</table>';
	}

	/**
	 * Build the dashboard widget.
	 *
	 * @return void
	 */
	public function wp_dashboard_widget(): void {
		echo $this->wp_dashboard_widget_body() . $this->wp_dashboard_widget_footer();
	}

	/**
	 * Optional: Output block template from theme templates directory.
	 * /templates/billy-{invoice|quote|accounting}.html
	 *
	 * @return string
	 */
	public function billy_default_content( $content, $post ): string {
		if ( ! str_starts_with( $post->post_type, 'billy-' ) ) {
			return $content;
		}

		$template = get_theme_file_path( 'templates/' . esc_attr( $post->post_type ) . '.html' );

		if ( is_readable( $template ) ) {
			$template_content = file_get_contents( $template );

			if ( 0 === strlen( $template_content ) ) {
				return $content;
			}

			switch ( $post->post_type ) {
				case 'billy-invoice':
					return ( str_contains( $template_content, '<!-- wp:billy-blocks/invoice-actions /-->' ) ? '' : '<!-- wp:billy-blocks/invoice-actions /-->' ) . $template_content;
				case 'billy-quote':
					return ( str_contains( $template_content, '<!-- wp:billy-blocks/quote-actions /-->' ) ? '' : '<!-- wp:billy-blocks/quote-actions /-->' ) . $template_content;
				case 'billy-accounting':
					return ( str_contains( $template_content, '<!-- wp:billy-blocks/accounting-actions /-->' ) ? '' : '<!-- wp:billy-blocks/accounting-actions /-->' ) . $template_content;
				default:
					break;
			}
		}

		return $content;
	}

	/**
	 * Post Type "Invoice": https://developer.wordpress.org/reference/hooks/rest_after_insert_this-post_type
	 *
	 * After save/update:
	 * - Autoincrement invoice number
	 * - Change title
	 * - Make private
	 *
	 * @param WP_Post         $post    Post object.
	 * @param WP_REST_Request $request Request object.
	 *
	 * @return void
	 */
	public function onsave_invoice( $post, $request ): void {
		$post_id = $post->ID;

		$my_post = array(
			'ID' => (int) $post_id,
		);

		$invoice_number = self::get_invoice_number_meta( $post_id );

		$post_title = sprintf( '%1$s (%2$s)', $invoice_number, esc_html__( 'Pending', 'billy' ) );

		// Update post status if unpublished: https://wordpress.org/support/article/post-status
		if ( in_array( get_post_status( $post_id ), array( 'publish', 'future', 'private' ), true ) ) {
			// Update Post meta value.
			update_post_meta( $post_id, '_invoice_number', $invoice_number );
			// Update Customizer value.
			set_theme_mod( 'invoice_number', $invoice_number );

			// Update post date: Current invoice must be published after previous invoice.
			$get_prev_id = self::get_previous_post_id( $post_id );

			if ( $get_prev_id ) {
				$get_prev_unix_time = get_the_date( 'U', $get_prev_id );

				if ( $get_prev_unix_time > get_the_date( 'U', $post_id ) ) {
					$post_date = date_i18n( 'Y-m-d H:i:s', (int) ++$get_prev_unix_time );

					$my_post['post_date']     = $post_date;
					$my_post['post_date_gmt'] = get_gmt_from_date( $post_date );
				}
			}

			$my_post['post_status'] = 'private';
			$post_title             = self::get_invoice_number( $post_id );
		}

		// Update title and slug.
		$my_post['post_title'] = $post_title;
		$my_post['post_name']  = sanitize_title( $post_title );

		wp_update_post( $my_post );
	}

	/**
	 * Post Type "Quote".
	 *
	 * After save/update:
	 * - Autoincrement quote number
	 * - Change title
	 * - Make private
	 *
	 * @param WP_Post         $post    Post object.
	 * @param WP_REST_Request $request Request object.
	 *
	 * @return void
	 */
	public function onsave_quote( $post, $request ): void {
		$post_id = $post->ID;

		$my_post = array(
			'ID' => (int) $post_id,
		);

		$quote_number = self::get_quote_number_meta( $post_id );

		$post_title = sprintf( '%1$s (%2$s)', $quote_number, esc_html__( 'Pending', 'billy' ) );

		// Update post status if unpublished: https://wordpress.org/support/article/post-status
		if ( in_array( get_post_status( $post_id ), array( 'publish', 'future', 'private' ), true ) ) {
			// Update Post meta value.
			update_post_meta( $post_id, '_quote_number', $quote_number );
			// Update Customizer value.
			set_theme_mod( 'quote_number', $quote_number );

			// Update post date: Current quote must be published after previous quote.
			$get_prev_id = self::get_previous_post_id( $post_id );

			if ( $get_prev_id ) {
				$get_prev_unix_time = get_the_date( 'U', $get_prev_id );

				if ( $get_prev_unix_time > get_the_date( 'U', $post_id ) ) {
					$post_date = date_i18n( 'Y-m-d H:i:s', (int) ++$get_prev_unix_time );

					$my_post['post_date']     = $post_date;
					$my_post['post_date_gmt'] = get_gmt_from_date( $post_date );
				}
			}

			$my_post['post_status'] = 'private';
			$post_title             = self::get_quote_number( $post_id );
		}

		// Update title and slug.
		$my_post['post_title'] = $post_title;
		$my_post['post_name']  = sanitize_title( $post_title );

		wp_update_post( $my_post );
	}

	/**
	 * Post Type "Accounting".
	 *
	 * After save/update:
	 * - Change title
	 * - Make private
	 *
	 * @param WP_Post         $post    Post object.
	 * @param WP_REST_Request $request Request object.
	 *
	 * @return void
	 */
	public function onsave_accounting( $post, $request ): void {
		$post_id    = $post->ID;
		$post_title = get_the_date( 'Y', $post_id );

		// Update title and slug.
		$my_post = array(
			'ID'         => (int) $post_id,
			'post_title' => $post_title,
			'post_name'  => sanitize_title( $post_title ),
		);

		// (Optional) Update post status: https://wordpress.org/support/article/post-status
		if ( in_array( get_post_status( $post_id ), array( 'publish', 'future' ), true ) ) {
			$my_post['post_status'] = 'private';
		}

		wp_update_post( $my_post );
	}

	/**
	 * Invoices: Keep original date once published.
	 *
	 * @param array $data    An array of slashed, sanitized, and processed post data.
	 * @param array $postarr An array of sanitized (and slashed) but otherwise unmodified post data.
	 *
	 * @return array
	 */
	public function keep_original_date_on_publishing( $data, $postarr ): array {
		if ( 'billy-invoice' !== $data['post_type'] ) {
			return $data;
		}

		if ( 'private' === get_post_status( $postarr['ID'] ) ) {
			$post_date = get_the_date( 'Y-m-d H:i:s', $postarr['ID'] );

			$data['post_date']     = $post_date;
			$data['post_date_gmt'] = get_gmt_from_date( $post_date );
		}

		return $data;
	}

	/**
	 * Remove Quick Edit settings.
	 *
	 * @param string[] $actions An array of row action links.
	 * @param WP_Post  $post    Post object.
	 *
	 * @return array
	 */
	public function remove_quick_edit_invoice( $actions, $post ): array {
		if ( 'billy-invoice' === $post->post_type ) {
			// unset( $actions['edit'] );
			// unset( $actions['view'] );
			unset( $actions['trash'] );
			unset( $actions['inline hide-if-no-js'] );
		}

		return $actions;
	}

	/**
	 * Enqueue admin assets.
	 *
	 * @return void
	 */
	public function enqueue_admin_assets(): void {
		$theme_mods        = array(
			'name'     => esc_html__( 'Name', 'billy' ),
			'address'  => esc_html__( 'Address', 'billy' ),
			'vat'      => esc_html__( 'VAT', 'billy' ),
			'currency' => esc_html__( 'Currency', 'billy' ),
		);
		$theme_mod_options = '';
		foreach ( $theme_mods as $key => $value ) {
			$theme_mod_options .= '{ label: "' . $value . '", value: "' . $key . '" },';
		}

		$taxes       = ! empty( get_theme_mod( 'taxrates' ) ) ? preg_split( '/\n|\r\n/', get_theme_mod( 'taxrates' ) ) : '';
		$tax_options = '';
		if ( is_array( $taxes ) ) {
			$tax_options = '';
			foreach ( $taxes as $key => $value ) {
				// Validate input.
				$value        = empty( $value ) || '%' !== substr( $value, -1 ) || ! in_array( (int) preg_replace( '/[^0-9]/', '', $value ), range( 1, 99 ), true ) ? '0%' : $value; // Default: 0%
				$tax_options .= '{ label: "' . $value . '", value: "' . $value . '" },';
			}
			$tax_options .= '{ label: "0%", value: "0%" },';
		}

		// Styles.
		wp_enqueue_style( 'billy-editor-style', self::$plugin_url . 'assets/admin/css/style-editor.css', array(), self::$plugin_version );
		if ( is_rtl() ) {
			wp_enqueue_style( 'billy-editor-rtl-style', self::$plugin_url . 'assets/admin/css/style-editor-rtl.css', array(), self::$plugin_version );
		}

		// Scripts.
		wp_add_inline_script(
			'editor',
			'var globalDataBilly = {
				postId: "' . get_the_ID() . '",
				postTitle: "' . esc_attr( get_the_title() ) . '",
				wpAdmin: "' . get_dashboard_url() . '",
				currency: "' . esc_attr( self::$currency ) . '",
				locale: "' . esc_attr( self::$locale ) . '",
				themeModOptions: [' . $theme_mod_options . '],
				taxOptions: [' . $tax_options . '],
			};'
		);
	}

	/**
	 * Enqueue admin styles.
	 *
	 * @return void
	 */
	public function enqueue_admin_styles(): void {
		if ( is_admin() ) {
			// Styles.
			wp_enqueue_style( 'billy-editor-style', self::$plugin_url . 'assets/admin/css/style-editor.css', array(), self::$plugin_version );
			if ( is_rtl() ) {
				wp_enqueue_style( 'billy-editor-rtl-style', self::$plugin_url . 'assets/admin/css/style-editor-rtl.css', array(), self::$plugin_version );
			}
		}
	}

	/**
	 * Theme Customizer options.
	 *
	 * @param WP_Customize_Manager $wp_customize Theme Customizer object.
	 *
	 * @return void
	 */
	public function wp_customizer_options( $wp_customize ): void {
		/**
		 * Initialize panel.
		 */
		$wp_customize->add_panel(
			'billy_setup_panel',
			array(
				'title'       => self::$plugin_name,
				'description' => esc_html__( 'Plugin Setup', 'billy' ),
			)
		);

		/**
		 * Initialize sections.
		 */
		$wp_customize->add_section(
			'billy_general_section',
			array(
				'title'    => esc_html__( 'General', 'billy' ),
				'priority' => 1,
				'panel'    => 'billy_setup_panel',
			)
		);

		$wp_customize->add_section(
			'billy_quote_section',
			array(
				'title'    => esc_html__( 'Quote', 'billy' ),
				'priority' => 2,
				'panel'    => 'billy_setup_panel',
			)
		);

		$wp_customize->add_section(
			'billy_invoice_section',
			array(
				'title'    => esc_html__( 'Invoice', 'billy' ),
				'priority' => 3,
				'panel'    => 'billy_setup_panel',
			)
		);

		$wp_customize->add_section(
			'billy_pdf_section',
			array(
				'title'    => esc_html__( 'PDF Export', 'billy' ),
				'priority' => 6,
				'panel'    => 'billy_setup_panel',
			)
		);

		/**
		 * Controls.
		 */
		// Name.
		$wp_customize->add_setting(
			'name',
			array(
				'sanitize_callback' => 'sanitize_text_field',
			)
		);
		$wp_customize->add_control(
			'name',
			array(
				'type'    => 'text',
				'label'   => esc_html__( 'Name', 'billy' ),
				'section' => 'billy_general_section',
			)
		);
		// Default mod.
		if ( empty( get_theme_mod( 'name' ) ) ) {
			set_theme_mod( 'name', get_bloginfo( 'name' ) );
		}

		// Address.
		$wp_customize->add_setting(
			'address',
			array(
				'sanitize_callback' => 'wp_kses',
				'validate_callback' => array( $this, 'geocode' ),
			)
		);
		$wp_customize->add_control(
			'address',
			array(
				'type'    => 'textarea',
				'label'   => esc_html__( 'Address', 'billy' ),
				'section' => 'billy_general_section',
			)
		);

		// Geocoding on/off.
		$wp_customize->add_setting(
			'geocoding_enabled',
			array(
				'default' => '1',
			)
		);
		$wp_customize->add_control(
			'geocoding_enabled',
			array(
				'type'    => 'checkbox',
				'label'   => sprintf( esc_html__( 'Enable %s', 'billy' ), sprintf( esc_html__( 'Geocoding powered by %s', 'billy' ), 'nominatim.openstreetmap.org' ) ),
				'section' => 'billy_general_section',
			)
		);

		// Address (geocoded).
		if ( get_theme_mod( 'geocoding_enabled', '1' ) ) {
			$wp_customize->add_setting(
				'address_geocoded',
				array(
					'sanitize_callback' => 'wp_kses',
				)
			);
			$wp_customize->add_control(
				'address_geocoded',
				array(
					'type'        => 'textarea',
					'label'       => esc_html__( 'Address (geocoded)', 'billy' ),
					'description' => sprintf( esc_html__( 'Geocoding powered by %s', 'billy' ), 'nominatim.openstreetmap.org' ),
					'input_attrs' => array(
						'readonly' => 'readonly',
						'style'    => 'display: none;',
					),
					'section'     => 'billy_general_section',
				)
			);
		}

		// Email.
		$wp_customize->add_setting(
			'email',
			array(
				'sanitize_callback' => 'sanitize_text_field',
			)
		);
		$wp_customize->add_control(
			'email',
			array(
				'type'        => 'text',
				'label'       => esc_html__( 'Email', 'billy' ),
				'description' => esc_html__( 'Enter your email', 'billy' ),
				'section'     => 'billy_general_section',
			)
		);
		// Default mod.
		if ( empty( get_theme_mod( 'email' ) ) ) {
			set_theme_mod( 'email', get_bloginfo( 'admin_email' ) );
		}

		// Phone.
		$wp_customize->add_setting(
			'phone',
			array(
				'sanitize_callback' => 'sanitize_text_field',
			)
		);
		$wp_customize->add_control(
			'phone',
			array(
				'type'        => 'text',
				'label'       => esc_html__( 'Phone', 'billy' ),
				'description' => esc_html__( 'Enter your phone number', 'billy' ),
				'section'     => 'billy_general_section',
			)
		);

		// VAT.
		$wp_customize->add_setting(
			'vat',
			array(
				'sanitize_callback' => 'sanitize_text_field',
			)
		);
		$wp_customize->add_control(
			'vat',
			array(
				'type'        => 'text',
				'label'       => esc_html__( 'VAT', 'billy' ),
				'description' => esc_html__( 'Enter your VAT identification number or Taxpayer ID', 'billy' ),
				'section'     => 'billy_general_section',
			)
		);

		// Currency.
		$wp_customize->add_setting(
			'currency',
			array(
				'sanitize_callback' => 'sanitize_text_field',
				'validate_callback' => array( $this, 'validate_currency' ),
			)
		);
		$wp_customize->add_control(
			'currency',
			array(
				'type'        => 'text',
				'label'       => esc_html__( 'Currency Code', 'billy' ),
				'description' => 'https://w.wiki/Fgw' . '<br>' . esc_html__( 'Caution: Any changes made here may affect existing entries. Create a backup first!', 'billy' ),
				'section'     => 'billy_general_section',
			)
		);

		// Taxes.
		$wp_customize->add_setting(
			'taxrates',
			array(
				'sanitize_callback' => 'wp_kses',
				'validate_callback' => array( $this, 'validate_taxrates' ),
			)
		);
		$wp_customize->add_control(
			'taxrates',
			array(
				'type'        => 'textarea',
				'label'       => esc_html__( 'Tax Rates', 'billy' ),
				'description' => sprintf(
					esc_html__( 'Enter the taxrates separated by newline: e.g. %s', 'billy' ),
					'10%
			20%'
				) . '<br>' . esc_html__( 'Caution: Any changes made here may affect existing entries. Create a backup first!', 'billy' ),
				'section'     => 'billy_general_section',
			)
		);

		// Custom financial year begins on month.
		$wp_customize->add_setting(
			'financial_year_begins_on_month',
			array(
				'sanitize_callback' => 'sanitize_text_field',
			)
		);
		$wp_customize->add_control(
			'financial_year_begins_on_month',
			array(
				'type'        => 'select',
				'label'       => esc_html__( 'Custom financial year', 'billy' ),
				'description' => esc_html__( 'Select the month that your custom financial year begins', 'billy' ) . '<br><em>' . esc_html__( 'Only change this value if you know what you are doing', 'billy' ) . '</em>',
				'choices'     => array(
					'01' => __( 'January', 'billy' ),
					'02' => __( 'February', 'billy' ),
					'03' => __( 'March', 'billy' ),
					'04' => __( 'April', 'billy' ),
					'05' => __( 'May', 'billy' ),
					'06' => __( 'June', 'billy' ),
					'07' => __( 'July', 'billy' ),
					'08' => __( 'August', 'billy' ),
					'09' => __( 'September', 'billy' ),
					'10' => __( 'October', 'billy' ),
					'11' => __( 'November', 'billy' ),
					'12' => __( 'December', 'billy' ),
				),
				'section'     => 'billy_general_section',
			)
		);

		// Reset numbers on beginning of financial year.
		$wp_customize->add_setting(
			'reset_numbers_each_year',
			array(
				'default' => '',
			)
		);
		$wp_customize->add_control(
			'reset_numbers_each_year',
			array(
				'type'        => 'checkbox',
				'label'       => esc_html__( 'Reset numbers each year', 'billy' ),
				'description' => esc_html__( 'The number counter will automatically reset at the start of the new financial year.', 'billy' ) . '<br>' . esc_html__( 'Only change this value if you know what you are doing', 'billy' ) . '</em>',
				'section'     => 'billy_general_section',
			)
		);

		// Invoice number start.
		$wp_customize->add_setting(
			'invoice_number',
			array(
				'sanitize_callback' => 'sanitize_text_field',
			)
		);
		$wp_customize->add_control(
			'invoice_number',
			array(
				'type'        => 'number',
				'label'       => esc_html__( 'Current invoice number', 'billy' ),
				'description' => esc_html__( 'Upcoming invoice numbers will be autoincremented based on this value', 'billy' ) . '<br><em>' . esc_html__( 'Only change this value if you know what you are doing', 'billy' ) . '</em>',
				'section'     => 'billy_invoice_section',
			)
		);
		// Default mod.
		if ( empty( get_theme_mod( 'invoice_number' ) ) ) {
			$latest_invoice = get_posts(
				array(
					'numberposts' => 1,
					'post_status' => 'private',
					'post_type'   => 'billy-invoice',
				)
			);

			set_theme_mod( 'invoice_number', $latest_invoice ? self::get_invoice_number_meta( $latest_invoice[0]->ID ) : '0' );
		}

		// Invoice number prefix.
		$wp_customize->add_setting(
			'invoice_number_prefix',
			array(
				'sanitize_callback' => 'sanitize_text_field',
			)
		);
		$wp_customize->add_control(
			'invoice_number_prefix',
			array(
				'type'        => 'text',
				'label'       => esc_html__( 'Invoice number: Prefix', 'billy' ),
				'description' => sprintf( esc_html__( 'You can include placeholders like %s.', 'billy' ), '{FINANCIALYEAR}, {YEAR}, {MONTH} and {DAY}' ),
				'section'     => 'billy_invoice_section',
			)
		);

		// Payment is due within # days.
		$wp_customize->add_setting(
			'payment_due_days',
			array(
				'sanitize_callback' => 'sanitize_text_field',
			)
		);
		$wp_customize->add_control(
			'payment_due_days',
			array(
				'type'    => 'number',
				'label'   => esc_html__( 'Payment due within # days', 'billy' ),
				'section' => 'billy_invoice_section',
			)
		);
		// Default mod.
		if ( empty( get_theme_mod( 'payment_due_days' ) ) ) {
			set_theme_mod( 'payment_due_days', '14' );
		}

		// Payment Information.
		$wp_customize->add_setting(
			'payment_information',
			array(
				'sanitize_callback' => 'wp_kses_post',
			)
		);
		$wp_customize->add_control(
			'payment_information',
			array(
				'type'        => 'textarea',
				'label'       => esc_html__( 'Payment Information', 'billy' ),
				'description' => esc_html__( 'Add the payment instructions and link to your terms.', 'billy' ),
				'section'     => 'billy_invoice_section',
			)
		);
		// Default mod.
		if ( empty( get_theme_mod( 'payment_information' ) ) ) {
			set_theme_mod( 'payment_information', esc_html__( 'Thank you for your business!', 'billy' ) );
		}

		// Quote Information.
		$wp_customize->add_setting(
			'quote_information',
			array(
				'sanitize_callback' => 'wp_kses_post',
			)
		);
		$wp_customize->add_control(
			'quote_information',
			array(
				'type'        => 'textarea',
				'label'       => esc_html__( 'Quote Information', 'billy' ),
				'description' => esc_html__( 'Inform your contacts about special terms, quote expiration clauses, etc.', 'billy' ),
				'section'     => 'billy_quote_section',
			)
		);
		// Default mod.
		if ( empty( get_theme_mod( 'quote_information' ) ) ) {
			set_theme_mod( 'quote_information', esc_html__( 'We will be happy to answer any questions you may have!', 'billy' ) );
		}

		// Quote number start.
		$wp_customize->add_setting(
			'quote_number',
			array(
				'sanitize_callback' => 'sanitize_text_field',
			)
		);
		$wp_customize->add_control(
			'quote_number',
			array(
				'type'        => 'number',
				'label'       => esc_html__( 'Current quote number', 'billy' ),
				'description' => esc_html__( 'Upcoming quote numbers will be autoincremented based on this value', 'billy' ),
				'section'     => 'billy_quote_section',
			)
		);
		// Default mod.
		if ( empty( get_theme_mod( 'quote_number' ) ) ) {
			$latest_quotes = get_posts(
				array(
					'numberposts' => 1,
					'post_status' => 'private',
					'post_type'   => 'billy-quote',
				)
			);

			set_theme_mod( 'quote_number', $latest_quotes ? self::get_quote_number_meta( $latest_quotes[0]->ID ) : '0' );
		}

		// Quote number format: Use current date.
		$wp_customize->add_setting(
			'quote_number_as_date',
			array(
				'default' => '1',
			)
		);
		$wp_customize->add_control(
			'quote_number_as_date',
			array(
				'label'   => esc_html__( 'Just use the current date ("Ymd") as quote number', 'billy' ),
				'section' => 'billy_quote_section',
				'type'    => 'checkbox',
			)
		);

		// Quote number prefix.
		$wp_customize->add_setting(
			'quote_number_prefix',
			array(
				'sanitize_callback' => 'sanitize_text_field',
			)
		);
		$wp_customize->add_control(
			'quote_number_prefix',
			array(
				'type'        => 'text',
				'label'       => esc_html__( 'Quote number: Prefix', 'billy' ),
				'description' => sprintf( esc_html__( 'You can include placeholders like %s.', 'billy' ), '{FINANCIALYEAR}, {YEAR}, {MONTH} and {DAY}' ),
				'section'     => 'billy_quote_section',
			)
		);

		// Quote is valid for # days.
		$wp_customize->add_setting(
			'quote_valid_days',
			array(
				'sanitize_callback' => 'sanitize_text_field',
			)
		);
		$wp_customize->add_control(
			'quote_valid_days',
			array(
				'type'    => 'number',
				'label'   => esc_html__( 'Quote valid for # days', 'billy' ),
				'section' => 'billy_quote_section',
			)
		);
		// Default mod.
		if ( empty( get_theme_mod( 'quote_valid_days' ) ) ) {
			set_theme_mod( 'quote_valid_days', '30' );
		}

		// Support Emojis in PDFs.
		$wp_customize->add_setting(
			'pdf_emoji_support',
			array(
				'default' => '1',
			)
		);
		$wp_customize->add_control(
			'pdf_emoji_support',
			array(
				'type'        => 'checkbox',
				'label'       => sprintf( esc_html__( 'Support %s in PDFs', 'billy' ), esc_html__( 'Emojis', 'billy' ) ),
				'description' => esc_html__( 'Emojis will be converted to image files hosted by WordPress', 'billy' ),
				'section'     => 'billy_pdf_section',
			)
		);
	}

	/**
	 * Theme Customizer: Geocode.
	 *
	 * @param object $validity WP Customize validity.
	 * @param string $value    WP Customize value.
	 *
	 * @return object
	 */
	public function geocode( $validity, $value ): object {
		if ( get_theme_mod( 'geocoding_enabled', '1' ) && ! empty( $value ) && strlen( $value ) > 3 ) {
			$result = null;

			$address = preg_replace( '/^\/\d\p{L}+/u', ' ', trim( $value ) );

			$response = wp_remote_get(
				'https://nominatim.openstreetmap.org/search?q=' . urlencode( $address ) . '&addressdetails=1&format=json&limit=1',
				array(
					'timeout' => 10,
					'referer' => get_home_url(),
				),
			);

			if ( ! is_wp_error( $response ) ) {
				$response_body = wp_remote_retrieve_body( $response );

				$result = json_decode( $response_body, true )[0] ?? '';

				if ( ! empty( $result ) ) {
					set_theme_mod( 'address_geocoded', json_encode( $result ) );
				} else {
					error_log( json_encode( $response ) );
					$validity->add( 'no_address_found', sprintf( esc_html__( 'Geocode was not successful - please provide a valid address: %s', 'billy' ), $address ) );
				}
			} else {
				error_log( json_encode( $response ) );
				$validity->add( 'error', json_encode( $response ) );
			}
		}

		return $validity;
	}

	/**
	 * Theme Customizer: Validate currency.
	 *
	 * @param object $validity WP Customize validity.
	 * @param string $value    WP Customize value.
	 *
	 * @return object
	 */
	public function validate_currency( $validity, $value ): object {
		if ( ! empty( $value ) && strlen( $value ) > 3 ) {
			$validity->add( 'no_valid_currency', esc_html__( 'Please provide a valid currency format', 'billy' ) );
		}

		return $validity;
	}

	/**
	 * Theme Customizer: Validate tax rates.
	 *
	 * @param object $validity WP Customize validity.
	 * @param string $value    WP Customize value.
	 *
	 * @return object
	 */
	public function validate_taxrates( $validity, $value ): object {
		if ( ! empty( $value ) ) {
			$newlines = explode( "\n", $value );

			foreach ( $newlines as $newline ) {
				$wrong = true;

				if ( preg_match( '/^([0-9]{1,2}){1}(\.[0-9]{1,2})?%$/', $newline ) ) {
					$wrong = false;
				}
			}

			if ( $wrong ) {
				$validity->add( 'no_valid_taxrates', esc_html__( 'Please separate the taxrates by newline and don\'t forget to append the "%" sign to each value.', 'billy' ) );
			}
		}

		return $validity;
	}
}
