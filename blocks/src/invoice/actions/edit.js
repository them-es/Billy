import { __, sprintf } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';

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
	const postModifiedDate = useSelect((select) =>
		select('core/editor').getEditedPostAttribute('modified')
	);
	const blockProps = useBlockProps({
		className: 'components-placeholder',
		style: { minHeight: 'auto' },
	});

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
}
