/**
 * Meta Field
 * https://wordpress.org/gutenberg/handbook/designers-developers/developers/tutorials/block-tutorial/writing-your-first-block-type
 */

import { registerBlockType } from '@wordpress/blocks';
import { __, sprintf } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { TextControl, PanelBody } from '@wordpress/components';
import { RawHTML } from '@wordpress/element';

registerBlockType('billy-blocks/invoice-meta', {
	apiVersion: 2,
	title: sprintf(
		__('%1$s: %2$s', 'billy'),
		__('Invoice', 'billy'),
		__('Meta', 'billy')
	),
	icon: 'editor-textcolor', // https://developer.wordpress.org/resource/dashicons
	category: 'billy-blocks', // Custom category: see index.php
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
	supports: {
		inserter: false,
		reusable: false,
		html: false,
		className: true,
	},

	edit: (props) => {
		const {
			className,
			attributes: { label, text },
			setAttributes,
		} = props;
		const blockProps = useBlockProps({
			className: className ? ' ' + className : '',
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
	},

	save: (props) => {
		const {
			className,
			attributes: { label, text },
		} = props;

		const blockProps = useBlockProps.save({
			className: className ? ' ' + className : '',
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
	},

	deprecated: [
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
					className,
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
					className,
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
	],
});
