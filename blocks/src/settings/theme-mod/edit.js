import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { SelectControl, PanelBody, Disabled } from '@wordpress/components';
import ServerSideRender from '@wordpress/server-side-render';

/**
 * Editor styles.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
//import './editor.scss';

/**
 * Edit function.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function edit({ attributes, setAttributes }) {
	const { themeMod } = attributes;

	const updateThemeMod = (val) => {
		setAttributes({ themeMod: val });
	};

	const blockProps = useBlockProps({
		className: 'components-placeholder',
		style: { minHeight: 'auto' },
	});

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
						value={themeMod ?? ''}
						onChange={updateThemeMod}
					/>
				</PanelBody>
			</InspectorControls>

			<Disabled>
				<ServerSideRender
					block="billy-blocks/theme-mod"
					attributes={attributes}
				/>
			</Disabled>
		</div>
	);
}
