import { __, sprintf } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl } from '@wordpress/components';
import { RawHTML } from '@wordpress/element';

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
export default function edit({
	attributes: { label, text },
	setAttributes,
	className,
}) {
	const blockProps = useBlockProps({
		className: className ? className : '',
	});

	const updateLabel = (val) => {
		setAttributes({ label: val });
	};

	const updateInput = (val) => {
		setAttributes({ text: val });
	};

	// Markup: Backend
	return (
		<div {...blockProps}>
			<InspectorControls>
				<PanelBody title={__('Label', 'billy')}>
					<TextControl
						type="text"
						className="label"
						value={label ?? ''}
						onChange={updateLabel}
					/>
				</PanelBody>
				<PanelBody title={__('Text', 'billy')}>
					<TextControl
						type="text"
						className="text"
						value={text ?? ''}
						onChange={updateInput}
					/>
				</PanelBody>
			</InspectorControls>

			<RawHTML>
				{sprintf(
					__(
						'<div class="label">%1$s</div> <div class="text">%2$s</div>',
						'billy'
					),
					label ? label : '',
					text ? text : __('N/A', 'billy')
				)}
			</RawHTML>
		</div>
	);
}
