const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const WorkboxPlugin = require('workbox-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry:{
		app: './src/index.ts'
    },
    plugins: [
		new CleanWebpackPlugin(['dist']),
		//plugin that injects index to the browser based on entry point
        new HtmlWebpackPlugin({
			title: 'Flash to HTML5',
			inject: true,
			//in order for the PWA Workbox plugin to work
			//hash has to be set to false as to not add unique characters to end of the file
			//this is more relevant for PRODUCTION - leave TRUE for DEVELOPMENT (prevent caching for hot reload)
            hash: true,
            template: './src/index.html',
            filename: 'index.html'
		  }),
		  //vendor caching
		  new webpack.HashedModuleIdsPlugin(),
		  new MiniCssExtractPlugin({
			filename: "[name].css",
			chunkFilename: "[name].css"
		  }),
		  //PWA workbox plugin - useful for non or low network connectivity
		  new WorkboxPlugin.GenerateSW({
				// these options encourage the ServiceWorkers to get in there fast 
				// and not allow any straggling "old" SWs to hang around
				clientsClaim: true,
				skipWaiting: true
		  })
    ],
    module: {
        rules: [
			{
				test: /\.ts$/,
				use: 'ts-loader'
			},
			{
				test: /\.html$/,
				use: {
					loader: 'html-loader',
					options: {
						attrs: ['img:src', 'link:href']
					}
				}
			},
			{
				test: /\.s?css$/,
				use: [
				  MiniCssExtractPlugin.loader,
				  "css-loader",
				  "sass-loader"
				]
			},
			{
				test: /\.(gif|png|jpe?g|svg)$/i,
				use: [{
					loader: 'file-loader',
					options: {
						name(file) {
						  if (process.env.NODE_ENV === 'development') {
							return '[path][name].[ext]';
						  }
		  
						  return '[hash].[ext]';
						},
						outputPath: 'imgs/'
					  }
				}]
			}
		],
	},
	resolve: {
		extensions: ['.ts', '.js','.tsx','.html' ],
	},
    output: {
		filename: '[name].bundle.js',
		//path: path.resolve(__dirname, 'dist')
	},
	//remove below will bundle appl JS into one file
	//below removes vendor js and puts them into a vendor.js file to cache
	optimization: {
		runtimeChunk: 'single',
		splitChunks: {
			cacheGroups: {
				vendor: {
				test: /[\\/]node_modules[\\/]/,
				name: 'vendors',
				chunks: 'all'
				}
			}
		}
	}
};

