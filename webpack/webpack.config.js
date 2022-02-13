const modoDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const miniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptmizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')


module.exports = {
    mode: modoDev ? 'development' : 'production',
    entry: './src/principal.js',
    output: {
        filename: 'principal.js',
        path: __dirname + '/public'
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                'style-loader', //Adiciona Css a DOM injetando a tag <style>
                'css-loader' // interpretar @import, url(), ...
            ]
        }]
    },
    optimization: {
        minimizer: [
            new OptmizeCSSAssetsPlugin ({})
        ]
    },
    plugins: [
        new miniCssExtractPlugin({
            filename: "estilo.css"
        })
    ],
    module: {
        rules: [{
            test: /\.s?[ac]ss$/, 
            use: [
                miniCssExtractPlugin.loader, 
                //'style-loader', //Adiciona Css a DOM injetando a tag <style>
                'css-loader', // interpretar @import, url(), ...
                'sass-loader',
            ]
        }]
    },
}
 