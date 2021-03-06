var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var webpack = require('webpack');
// 引入基本配置
var config = require('./webpack.config');

config.plugins = [
	
    /*new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: '"production"'
        }
    }),
    // 压缩代码
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),*/

	/* 提取css为单文件*/
	new webpack.LoaderOptionsPlugin({
		// test: /\.xxx$/, // may apply this only for some modules
		options: {
		  vue: {
				loaders: {
					css: ExtractTextPlugin.extract("css-loader")
				}
			}
		}
    }),
    new ExtractTextPlugin("../static/[name].[contenthash].css"),
    new HtmlWebpackPlugin({
        filename: '../index.html',
        template: path.resolve(__dirname, '../app/index/index.html'),
        inject: true
    }),

	//公共模块的提取
	new webpack.optimize.CommonsChunkPlugin({
		name: 'vendors',
		filename: 'vendors.js',
	}),
];

module.exports = config;