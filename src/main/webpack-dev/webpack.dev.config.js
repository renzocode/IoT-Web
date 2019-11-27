const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
	entry : {
    	shell : './src/bundle/shell/shell.js'
	},
	output : {
		path : path.join(__dirname, '../webapp/resources/public'),
		publicPath : '/resources/public',
		filename : 'apps/[name]/build/bundle.js'
	},
	target : 'web',
	devtool : '#source-map',
	module : {
		rules : [
			{
				test : /\.js$/,
				exclude : /node_modules/,
				use : {
					loader : "babel-loader"
				}
			},
			{
				test : /\.html$/,
				use : [
					{
						loader : "html-loader"
					}
				]
			},
			{
				test : /\.css$/i,
				use : ['style-loader', 'css-loader']
			},
			{
				test : /\.(png|svg|jpg|gif)$/,
				use : ['file-loader']
			},
			 {
          		test: /\.(eot|woff2?|svg|ttf)([\?]?.*)$/,
          		use: ['file-loader', 'url-loader']
        	}
		]
	},
	plugins : [
		new HtmlWebpackPlugin({
			template : "./src/html/dashboardDev.html",
			inject : "false",
			chunks : ["shell"],
			filename : "../../WEB-INF/view/dashboardDev.jsp"
		})
	]

}
