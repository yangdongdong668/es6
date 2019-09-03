const path = require('path');
const webpack = require('webpack');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode:'development',
    devtool:'source-map',
    devServer:{
        contentBase:path.join(__dirname,'dist'),
        port:8000,
        hot:true,
        overlay:true,
        proxy:{
            '/coments':{
                target:'https://m.weibo.cn',
                changeOrigin:true,
                logLevel:'debug',
                headers:{
                    Cookie:''
                }

            }
        },
        historyApiFallback:true
    },
    entry:{
        page:'./src/index.js'
    },
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'[name].bundle.js',
        publicPath:'/'
    },
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title:'自动生成html',
            minify:{
                removeComments:true,
                collapseWhitespace:true,
                minifyCSS:true
            },
            filename:'index.html',
            template:'index.html'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ],
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use:{
                    loader:'babel-loader'
                }
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            }
        ]
    }
}