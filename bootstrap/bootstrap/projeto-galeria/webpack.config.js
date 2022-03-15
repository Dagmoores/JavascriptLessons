const webpack = require('webpack')
const CopyWebPackPlugin = require('copy-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    module: {
        rules: [
            {
            test: /\.(sass|css|scss)$/,
            use: ["style-loader", "css-loader", "sass-loader"]
        }]
    },
    devServer: {
        static: './src',
        compress: true,
        port: 9000
    },
    output: {
         filename: 'app.js',
         path: __dirname + '/build'
     }, 
}