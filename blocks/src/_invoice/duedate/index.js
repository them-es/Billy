/**
 * Due Date
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
import { InspectorControls } from '@wordpress/blockEditor';
import {
	PanelBody,
	Disabled,
} from '@wordpress/components';
import ServerSideRender from '@wordpress/server-side-render';


registerBlockType( 'billy-blocks/invoice-duedate', {
	title: sprintf( __( '%1$s: %2$s', 'billy' ), __( 'Invoice', 'billy' ), __( 'Due Date', 'billy' ) ),
	icon: 'calendar-alt', // https://developer.wordpress.org/resource/dashicons
	category: 'billy-blocks', // Custom category: see index.php
	supports: {
		inserter: false,
		reusable: false,
		html: false,
	},

	edit: props => {
		// Markup: Backend
		return (
			<>
				<InspectorControls>
					<PanelBody title={ __( 'Info', 'billy' ) }>
						<div className="components-notice">
							<div className="components-notice__content">
								{
									sprintf( __( 'The %s values can be modified in the Theme Customizer', 'billy' ), __( 'Payment due days', 'billy' ) )
								}
							</div>
						</div>
					</PanelBody>
				</InspectorControls>

				<Disabled>
					<ServerSideRender block="billy-blocks/invoice-duedate" />
				</Disabled>
			</>
		);
	},

	save: props => {
		// Handled by PHP.
		return null;
	},
} );
