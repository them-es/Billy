const path = require('path'),
	removeEmptyScriptsPlugin = require('webpack-remove-empty-scripts'),
	webpackConfig = require('@wordpress/scripts/config/webpack.config');

module.exports = {
	...webpackConfig,
	...{
		mode: 'production',
		context: path.resolve(__dirname, 'assets'),
		entry: {
			main: ['./main.js', './main.scss'],
		},
		plugins: [
			...webpackConfig.plugins,
			new removeEmptyScriptsPlugin({
				stage: removeEmptyScriptsPlugin.STAGE_AFTER_PROCESS_PLUGINS,
			}),
		],
	},
};
