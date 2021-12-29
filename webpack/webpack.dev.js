const { merge } = require('webpack-merge'); //call webpack-merge
const common = require('./webpack.common');

/**@type{import('webpack').configuration}*/
const devConfig = {
	mode: 'development',
	devServer: {
		compress: true,
		port: 3000,
		open: true,
		hot: true,
	},
	module: {
		rules: [
			{
				test: /\.(c|sa|sc)ss$/i,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			}
		]
	}
};
module.exports = merge(common, devConfig);
