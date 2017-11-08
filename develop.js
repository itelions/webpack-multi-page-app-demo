const webpack = require('webpack');
// const CopyWebpackPlugin = require('copy-webpack-plugin');
const config = require('./webpack.config.js')


const ENV = new webpack.DefinePlugin({
    DEVELOPMENT: JSON.stringify(true)
})

// 开发环境中的插件
const plugins = [ENV];

// 开发环境服务器配置
config.devServer = {
    contentBase: "./", //本地服务器所加载的页面所在的目录
    historyApiFallback: true, //不跳转
    port: 4399,
    inline: true,
    // webpack反向代理
    // proxy: {
    //     '/api': {
    //         target: 'http://192.168.12.216:8186',
    //         changeOrigin: true,
    //         pathRewrite: {
    //             '^/api': ''
    //         }
    //     }
    // }
}

const CssLoader = {
    test: /\.css$/,
    use: [{
        loader: "style-loader"
    }, {
        loader: "css-loader"
    }]
}
const ScssLoader = {
    test: /\.scss$/,
    use: [{
        loader: "style-loader"
    }, {
        loader: "css-loader"
    }, {
        loader: "sass-loader"
    }]
}
const rules = [CssLoader, ScssLoader];

config.module.rules = config.module.rules.concat(rules)

config.plugins = config.plugins.concat(plugins);

module.exports = config;
