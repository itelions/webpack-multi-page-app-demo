const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const config  =require('./webpack.config.js')

// 开发环境中的插件
const ENV = new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('development')
})
const plugins = [ENV];

config.plugins=config.plugins.concat(plugins);

// 开发环境服务器配置
config.devServer={
	contentBase: "./", //本地服务器所加载的页面所在的目录
	historyApiFallback: true, //不跳转
	port: 4399,
	inline: true,
}

module.exports=config;
