const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
	name: 'client',
	entry: path.resolve(__dirname, './src/index.tsx'),
	output: {
		path: path.resolve(__dirname, 'build'),
	},
	devServer: {
		contentBase: path.join(__dirname, 'src'),
		https: false,
	},
	mode: 'development',
	devtool: 'eval-source-map',
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.json', '.jsx', '.styl', '.css'],
	},
	module: {
		rules: [
			{
				test: /\.(ts|tsx|js|jsx)?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							'@babel/preset-env',
							'@babel/preset-typescript'
						],
						plugins: [
							['@babel/transform-react-jsx', { runtime: 'automatic' }],
							'@babel/transform-runtime',
							'babel-plugin-transform-react-pug'
						]
					}
				}
			},
			{
				test: /\.styl$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'stylus-loader',
				]
			},
			{
				test: /\.(jpe?g|png|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
				loader: 'url-loader'
			}
		],
	},
	plugins: [
		new HtmlPlugin({ template: path.resolve(__dirname, 'public/index.html') }),
		new MiniCssExtractPlugin()
	],
}
