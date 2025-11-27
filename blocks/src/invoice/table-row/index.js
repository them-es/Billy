/**
 * Invoice Table Row
 * https://wordpress.org/gutenberg/handbook/designers-developers/developers/tutorials/block-tutorial/writing-your-first-block-type
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import edit from './edit';
import save from './save';
import deprecated from './deprecated';

import metadata from './block.json';
const { name } = metadata;

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType(
	{ name, ...metadata },
	{
		getEditWrapperProps() {
			return { 'data-align': 'wide' };
		},

		/**
		 * @see ./edit.js
		 */
		edit,

		/**
		 * @see ./save.js
		 */
		save,

		/**
		 * @see ./deprecated.js
		 */
		deprecated: deprecated,
	}
);
