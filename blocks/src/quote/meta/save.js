import { __, sprintf } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { RawHTML } from '@wordpress/element';

/**
 * Save function.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save({ attributes, className }) {
	const { label, text } = attributes;

	const blockProps = useBlockProps.save({
		className: className ? className : '',
	});

	return (
		text && (
			<div {...blockProps}>
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
		)
	);
}
