/**
 * Quote Meta: Deprecated
 * https://developer.wordpress.org/block-editor/developers/block-api/block-deprecation
 */

/**
 * WordPress dependencies
 */

import { __, sprintf } from '@wordpress/i18n';

const deprecated = [
	// < v1.7.0 (202312)
	{
		attributes: {
			label: {
				type: 'string',
				default: '',
			},
			text: {
				type: 'string',
				default: '',
			},
		},

		save: (props) => {
			const {
				attributes: { label, text },
			} = props;

			return (
				text && (
					<>
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
					</>
				)
			);
		},
	},

	// < v1.2.3 (202012)
	{
		attributes: {
			label: {
				type: 'string',
				default: '',
			},
			text: {
				type: 'string',
				default: '',
			},
		},

		save: (props) => {
			const {
				attributes: { label, text },
			} = props;

			return (
				text && (
					<p>
						<RawHTML>
							{sprintf(
								'<p>' +
									__(
										'<strong>%1$s</strong> <span>%2$s</span>',
										'billy'
									) +
									'</p>',
								label ? label : '',
								text ? text : __('N/A', 'billy')
							)}
						</RawHTML>
					</p>
				)
			);
		},
	},
];

export default deprecated;
