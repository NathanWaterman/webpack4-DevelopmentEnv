const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

 module.exports = merge(common, {
   mode: 'development',
   devtool: 'inline-source-map',
   plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
   devServer: {
     contentBase: './dist',
     hot: true,
     port: 9000,
     proxy: {
        '/api': {
            target: 'http://localhost:3000',
            secure: false
        }
    }
   }
 });