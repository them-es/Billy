/**
 * Plugin Settings Panel: Billy Setup
 * https://github.com/WordPress/gutenberg/blob/trunk/packages/editor/src/components/plugin-document-setting-panel/index.js
 */

import { registerPlugin } from '@wordpress/plugins';
import { __ } from '@wordpress/i18n';
import { PluginDocumentSettingPanel } from '@wordpress/editor';
import ServerSideRender from '@wordpress/server-side-render';

const BillySetup = () => (
	<PluginDocumentSettingPanel
		name="billy-setup"
		title={__('Billy Setup', 'billy')}
		className="my-document-setting-plugin"
	>
		<p>
			<a
				href={
					globalDataBilly.wpAdmin +
					'customize.php?autofocus[panel]=billy_setup_panel'
				}
			>
				{__('Settings (Theme Customizer)', 'billy')}
			</a>
		</p>
		<ul className="ul code">
			<li title={__('Invoice number', 'billy')}>
				<ServerSideRender block="billy-blocks/invoice-number" />
			</li>
			<li title={__('Quote number', 'billy')}>
				<ServerSideRender block="billy-blocks/quote-number" />
			</li>
			<li title={__('Name', 'billy')}>
				<ServerSideRender
					block="billy-blocks/theme-mod"
					attributes={{ themeMod: 'name' }}
				/>
			</li>
			<li title={__('Address', 'billy')}>
				<ServerSideRender
					block="billy-blocks/theme-mod"
					attributes={{ themeMod: 'address' }}
				/>
			</li>
			<li title={__('VAT', 'billy')}>
				<ServerSideRender
					block="billy-blocks/theme-mod"
					attributes={{ themeMod: 'vat' }}
				/>
			</li>
			<li title={__('Currency', 'billy')}>
				<ServerSideRender
					block="billy-blocks/theme-mod"
					attributes={{ themeMod: 'currency' }}
				/>
			</li>
			<li title={__('Taxes', 'billy')}>
				<ServerSideRender
					block="billy-blocks/theme-mod"
					attributes={{ themeMod: 'taxrates' }}
				/>
			</li>
		</ul>
	</PluginDocumentSettingPanel>
);
registerPlugin('billy-setup', { render: BillySetup });
