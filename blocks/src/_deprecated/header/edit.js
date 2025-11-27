import { __, sprintf } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, Disabled } from '@wordpress/components';
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
export default function edit() {
	return (
		<>
			<InspectorControls>
				<PanelBody title={__('Info', 'billy')}>
					<div className="components-notice">
						<div className="components-notice__content">
							<a
								href={
									globalDataBilly.wpAdmin +
									'edit.php?post_type=wp_block'
								}
							>
								{sprintf(
									__('Edit the %s layout', 'billy'),
									__('Header', 'billy')
								)}
							</a>
						</div>
					</div>
					<div className="components-notice">
						<div className="components-notice__content">
							{sprintf(
								__(
									'The %s values can be modified in the Theme Customizer.',
									'billy'
								),
								__('Header', 'billy')
							)}
						</div>
					</div>
				</PanelBody>
			</InspectorControls>

			<Disabled>
				<ServerSideRender block="billy-blocks/header" />
			</Disabled>
		</>
	);
}
