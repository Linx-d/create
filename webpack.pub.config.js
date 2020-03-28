const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
//使用cnpm i 下载时使用如下指令
//cnpm i extract-text-webpack-plugin@next -D
const optimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');



//模块输出  输出一个对象 所以是 module.exports
module.exports = {
	entry: {
		app: path.join(__dirname, 'src', 'main.js'),
		vendors: ["jquery", "vue"] //抽离第三方包的配置项
	},
	output: {
		path: path.join(__dirname, 'dist'),
		filename: "js/bundle.js"
	},
	plugins: [
	new htmlWebpackPlugin({
		template: path.join(__dirname, 'src', 'index.html'),
		filename: "index.html",
		minify: {//压缩html文件的配置项
			collapseWhitespace: true,
			removeComments: true,
			removeAttributeQuotes: true
		}
	}),
	new VueLoaderPlugin(),
	new CleanWebpackPlugin(),
	new ExtractTextWebpackPlugin('css/style.css'),
	new optimizeCssAssetsWebpackPlugin()
	
	],
	optimization: { //抽离第三方包的配置项
	    runtimeChunk: true,
	    splitChunks: {
	        cacheGroups: {
	            commons: {
	                test: /[\\/]node_modules[\\/]/,
	                name: "vendors",
	                chunks: "all"
	            }
	        }
	    }
	},
	module: {
		rules: [
		{test: /\.css$/, use: ExtractTextWebpackPlugin.extract({
			fallback: "style-loader",
			use: "css-loader",
			publicPath: "../"
		})},
		{test: /\.less$/, use: ExtractTextWebpackPlugin.extract({
			fallback: "style-loader",
			use: ["css-loader", "sass-loader"],
			publicPath: "../"
		})},
		{test: /\.scss$/, use: ExtractTextWebpackPlugin.extract({
			fallback: "style-loader",
			use: ["css-loader", "sass-loader"],
			publicPath: "../"
		})},
		{test: /\.(jpeg|jpg|gif|png)$/, use: "url-loader?limit=200000&name=images/[hash:8]-[name].[ext]"},
		{test: /\.(eot|svg|ttf|woff|woff2)$/, use: "url-loader"},
		{test: /\.js$/, use: "babel-loader", exclude: /node_modules/},
		{test: /\.vue$/, use: "vue-loader"}
		]
	},
	resolve: {
		alias: {
			/*"vue$": "vue/dist/vue.js"*/
		}
	}
}