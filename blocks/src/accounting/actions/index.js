/**
 * Accounting Actions
 * https://wordpress.org/gutenberg/handbook/designers-developers/developers/tutorials/block-tutorial/writing-your-first-block-type
 */

import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps } from '@wordpress/block-editor';
import { __, _n, sprintf } from '@wordpress/i18n';
import { withSelect } from '@wordpress/data';

registerBlockType('billy-blocks/accounting-actions', {
	apiVersion: 2,
	title: sprintf(
		__('%1$s: %2$s', 'billy'),
		__('Accounting', 'billy'),
		__('Actions', 'billy')
	),
	icon: 'menu-alt', // https://developer.wordpress.org/resource/dashicons
	category: 'billy-blocks', // Custom category: see index.php
	supports: {
		inserter: false,
		reusable: false,
		html: false,
	},

	getEditWrapperProps() {
		return { 'data-align': 'wide' };
	},

	edit: withSelect((select) => {
		return {
			postModifiedDate:
				select('core/editor').getEditedPostAttribute('modified'),
		};
	})((props) => {
		const { postModifiedDate } = props;
		const blockProps = useBlockProps({
			className: 'components-placeholder',
			style: { minHeight: 'auto' },
		});

		// Markup: Backend
		return (
			<div {...blockProps}>
				<small>
					{sprintf(
						__('%1$s: %2$s', 'billy'),
						__('Last modified', 'billy'),
						new Date(postModifiedDate).toLocaleString()
					)}
				</small>
			</div>
		);
	}),

	save: () => {
		return null;
	},
});
