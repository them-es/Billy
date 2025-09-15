/**
 * Quote Valid Until Date
 * https://wordpress.org/gutenberg/handbook/designers-developers/developers/tutorials/block-tutorial/writing-your-first-block-type
 */

import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps } from '@wordpress/block-editor';
import { Disabled } from '@wordpress/components';
import { __, sprintf } from '@wordpress/i18n';
import ServerSideRender from '@wordpress/server-side-render';

registerBlockType('billy-blocks/quote-validuntildate', {
	apiVersion: 2,
	title: sprintf(
		__('%1$s: %2$s', 'billy'),
		__('Quote', 'billy'),
		__('Valid Until', 'billy')
	),
	icon: 'calendar-alt', // https://developer.wordpress.org/resource/dashicons
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
				<Disabled>
					<ServerSideRender block="billy-blocks/quote-validuntildate" />
				</Disabled>
			</div>
		);
	},

	save: () => {
		// Handled by PHP.
		return null;
	},
});
