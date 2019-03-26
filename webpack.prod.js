const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

 module.exports = merge(common, {
   mode: 'production',
   devtool: 'source-map',
   optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: false, // set to true if you want JS source maps
        uglifyOptions: {
          mangle: true, // Note `mangle.properties` is `false` by default.
          compress: {
            drop_console: true //remove all console logs for production
          }
        },
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  }
 });
