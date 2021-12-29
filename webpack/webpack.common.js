const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin'); //call html-webpack-plugin
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); //call mini-css-extract-plugin
const path = require('path'); //require lib of nodejs

/**@type{import('webpack').Configuration}*/
module.exports = {
	entry: '/src/index.ts',
	resolve: {
    extensions: ['.js', '.ts'],
  },
	module: {
		rules: [
			{
				test: /\.ts$/i,
				use: 'ts-loader',
				include: [path.resolve(__dirname, 'src')]
			},
			{
				test: /\.html$/i,
				use: 'html-loader',
			},
			{
				test: /\.(hbs|handlebars)$/i,
				use: 'handlebars-loader',
			},
			{
				type: 'asset',
				test: /\.(svg|png|jpg|jpeg|gif)/i,
			}
		]
	},
	output: {
		filename: 'js/[name].[contenthash]bundle.js',
		path: path.resolve(__dirname, '../build'),
		publicPath: '',
		assetModuleFilename: '[name].[ext]',
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: '/src/index.html'
		}),
		new MiniCssExtractPlugin({
			filename: 'css/[name]-style.css'
		})
	],
};
