const path = require('path');

const resolve = (...paths) => path.resolve(__dirname, ...paths);

module.exports = {
	mode: 'development',
	entry: './index.pug',
	context: resolve('src'),
	output: {
		path: resolve('dist'),
		filename: 'bundle.js',
		publicPath: '/'
	},
	resolve: {
		extensions: [
			'.pug',
			'.ts',
			'.scss'
		],
		mainFiles: [
			'index.pug'
		],
		modules: [
			resolve('node_modules')
		]
	},
	module: {
		rules: [
			{
				test: /\.pug$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[path][name].html'
						}
					},
					{
						loader: 'extract-loader',
						options: {
							publicPath: './'
						}
					},
					{
						loader: 'html-loader',
						options: {
							basedir: resolve('src'),
							attrs: [
								'img:src',
								'a:href',
								'script:src',
								'link:href'
							],
							root: resolve('src')
						}
					},
					{
						loader: 'pug-html-loader',
						options: {
							basedir: resolve('src'),
							pretty: true,
							data: {
								title: 'test page'
							}
						}
					}
				]
			}
		]
	},
};
