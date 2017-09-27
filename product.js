const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const config  =require('./webpack.config.js')

// 生产环境中的插件
const ENV = new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production')
})
const plugins = [
	ENV,
	new webpack.optimize.OccurrenceOrderPlugin(),
	new webpack.optimize.UglifyJsPlugin(),
	new CopyWebpackPlugin([{
	    from: __dirname + '/static',
	    to:__dirname + '/dist/static',
	}]),
	new CleanWebpackPlugin(
        ['dist'],　 //匹配删除的文件
        {
            root: __dirname,       　　　　　　　　　　//根目录
            verbose:  true,        　　　　　　　　　　//开启在控制台输出信息
            dry:      false        　　　　　　　　　　//启用删除文件
        }
    )
];

config.plugins=config.plugins.concat(plugins);

module.exports=config;
