/**
 * Quote Information
 * https://wordpress.org/gutenberg/handbook/designers-developers/developers/tutorials/block-tutorial/writing-your-first-block-type
 */

/**
 * WordPress dependencies
 */

import { registerBlockType } from '@wordpress/blocks';
import { __, sprintf } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';
import ServerSideRender from '@wordpress/server-side-render';

registerBlockType('billy-blocks/quote-information', {
	apiVersion: 2,
	title: sprintf(
		__('%1$s: %2$s', 'billy'),
		__('Quote', 'billy'),
		__('Information', 'billy')
	),
	icon: 'info', // https://developer.wordpress.org/resource/dashicons
	category: 'billy-blocks', // Custom category: see index.php
	supports: {
		inserter: false,
		reusable: false,
		html: false,
	},

	edit: () => {
		const blockProps = useBlockProps();
		// Markup: Backend
		return (
			<div {...blockProps}>
				<InspectorControls>
					<PanelBody title={__('Info', 'billy')}>
						<div className="components-notice">
							<div className="components-notice__content">
								{sprintf(
									__(
										'The %s values can be modified in the Theme Customizer.',
										'billy'
									),
									__('Quote Information', 'billy')
								)}
							</div>
						</div>
					</PanelBody>
				</InspectorControls>

				<ServerSideRender block="billy-blocks/quote-information" />
			</div>
		);
	},

	save: () => {
		// Handled by PHP.
		return null;
	},
});
