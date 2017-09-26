const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const config  =require('./webpack.config.js')

// 生产环境中的插件
const plugins = [
	new webpack.optimize.OccurrenceOrderPlugin(),
	new webpack.optimize.UglifyJsPlugin(),
	new CopyWebpackPlugin([{
	    from: __dirname + '/static',
	    to:__dirname + '/dist/static',
	}]),
];

config.plugins=config.plugins.concat(plugins);

module.exports=config;
