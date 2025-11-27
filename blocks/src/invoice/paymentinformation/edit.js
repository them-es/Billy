import { __, sprintf } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
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
								__('Payment Information', 'billy')
							)}
						</div>
					</div>
				</PanelBody>
			</InspectorControls>

			<Disabled>
				<ServerSideRender block="billy-blocks/invoice-paymentinformation" />
			</Disabled>
		</div>
	);
}
