/**
 * Header [Deprecated 2022-09; Block is still needed for backwards compatibility]
 * https://wordpress.org/gutenberg/handbook/designers-developers/developers/tutorials/block-tutorial/writing-your-first-block-type
 */

/**
 * WordPress dependencies
 */

import { registerBlockType } from '@wordpress/blocks';
import {
	__,
	sprintf
} from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import {
	PanelBody,
	Disabled,
} from '@wordpress/components';
import ServerSideRender from '@wordpress/server-side-render';


registerBlockType( 'billy-blocks/header', {
	title: __( 'Header', 'billy' ),
	icon: 'editor-table', // https://developer.wordpress.org/resource/dashicons
	category: 'billy-blocks', // Custom category: see index.php
	supports: {
		inserter: false,
		reusable: false,
		html: false,
	},

	getEditWrapperProps() {
		return { 'data-align': 'wide' };
	},

	edit: props => {
		return (
			<>
				<InspectorControls>
					<PanelBody title={ __( 'Info', 'billy' ) }>
						<div className="components-notice">
							<div className="components-notice__content">
								<a href={ globalDataBilly.wpAdmin + 'wp-admin/edit.php?post_type=wp_block' }>
									{
										sprintf( __( 'Edit the %s layout', 'billy' ), __( 'Header', 'billy' ) )
									}
								</a>
							</div>
						</div>
						<div className="components-notice">
							<div className="components-notice__content">
								{
									sprintf( __( 'The %s values can be modified in the Theme Customizer.', 'billy' ), __( 'Header', 'billy' ) )
								}
							</div>
						</div>
					</PanelBody>
				</InspectorControls>

				<Disabled>
					<ServerSideRender block="billy-blocks/header" />
				</Disabled>
			</>
		);
	},

	save: props => {
		// Handled by PHP.
		return null;
	},
} );
