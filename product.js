const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const config = require('./webpack.config.js')
const ExtractTextPlugin = require("extract-text-webpack-plugin");

// 生产环境中的插件
const ENV = new webpack.DefinePlugin({
	DEVELOPMENT: JSON.stringify(false)
})
const OccurrenceOrder = new webpack.optimize.OccurrenceOrderPlugin();
const Uglify = new webpack.optimize.UglifyJsPlugin();
const CopyWebpack = new CopyWebpackPlugin([{
	from: __dirname + '/static',
	to: __dirname + '/dist/static',
}])
const ExtractText = new ExtractTextPlugin("static/style/[name].[hash].css")

const CleanDistFlode = new CleanWebpackPlugin(
	['dist'], 　 //匹配删除的文件
	{
		root: __dirname,
		　　　　　　　　　　 //根目录
		verbose: true,
		　　　　　　　　　　 //开启在控制台输出信息
		dry: false　　　　　　　　　　 //启用删除文件
	}
)
const plugins = [
	OccurrenceOrder,
	Uglify,
	CopyWebpack,
	ExtractText,
	CleanDistFlode,
	ENV
];

delete config.devtool;

const CssLoader = {
	test: /\.css$/,
	use: ExtractTextPlugin.extract({
		fallback: "style-loader",
		use: "css-loader"
	})
}

const ScssLoader = {
	test: /\.scss$/,
	use: ExtractTextPlugin.extract({
		fallback: 'style-loader',
		//resolve-url-loader may be chained before sass-loader if necessary
		use: ['css-loader', 'sass-loader']
	})
}

const rules = [CssLoader, ScssLoader];

config.module.rules = config.module.rules.concat(rules);

config.plugins = config.plugins.concat(plugins);

module.exports = config;
