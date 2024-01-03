/**
 * Header: theme_mod
 * https://wordpress.org/gutenberg/handbook/designers-developers/developers/tutorials/block-tutorial/writing-your-first-block-type
 */

/**
 * WordPress dependencies
 */

import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { SelectControl, PanelBody, Disabled } from '@wordpress/components';
import ServerSideRender from '@wordpress/server-side-render';

registerBlockType('billy-blocks/theme-mod', {
	apiVersion: 2,
	title: __('Theme Mod', 'billy'),
	icon: 'admin-generic', // https://developer.wordpress.org/resource/dashicons
	category: 'billy-blocks', // Custom category: see index.php
	attributes: {
		themeMod: {
			type: 'string',
			default: '',
		},
	},
	supports: {
		inserter: false,
		reusable: false,
		html: false,
	},

	edit: (props) => {
		const {
			attributes: { themeMod },
			setAttributes,
		} = props;

		const updateThemeMod = (val) => {
			setAttributes({ themeMod: val });
		};

		const blockProps = useBlockProps();

		return (
			<div {...blockProps}>
				<InspectorControls>
					<PanelBody title={__('Theme Mod', 'billy')}>
						<SelectControl
							label={__('Setting', 'billy')}
							help={__(
								'Modify the value in the Theme Customizer.',
								'billy'
							)}
							options={globalDataBilly.themeModOptions}
							value={themeMod}
							onChange={updateThemeMod}
						/>
					</PanelBody>
				</InspectorControls>

				<Disabled>
					<ServerSideRender
						block="billy-blocks/theme-mod"
						attributes={props.attributes}
					/>
				</Disabled>
			</div>
		);
	},

	save: () => {
		// Handled by PHP.
		return null;
	},
});
