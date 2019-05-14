//	clean-webpack-plugin	清理指定文件夹
//	html-webpack-plugin	指定一个html文件，后边的编译会基于此html模板来编译

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	entry:"./src/index.ts",	//	入口文件
	output:{				//	指定项目编译完后的输出文件
		filename:"main.js",
	},
	resolve:{
		extensions:['.js','.ts','.tsx']	//	文件后缀，自动解析文件拓展
	},
	module:{
		rules:[{	
			test:/\.tsx?$/,	//	正则匹配
			use:'ts-loader',	//	配置对应loader
			exclude:/node_modules/
		}]	//	配置对指定文件处理的loader
	},
	devtool:process.env.NODE_ENV === 'production'?false:'inline-source-map',	//	测试环境提供source正式环境不需要，减少打包时间，从npm script中传入
	devServer:{
		contentBase:'./dist',	//	本地开发环境运行时基于这个文件夹为根目录
		stats:'errors-only',	//	运行后在webpack平台打印那些信息
		compress:false,	//	不启动压缩
		host:'localhost',
		port:8088
	},
	plugins:[
		new CleanWebpackPlugin({
			cleanOnceBeforeBuildPatterns:['./dist']
		}),
		new HtmlWebpackPlugin({
			template:'./src/template/index.html'
		}),
	],
};