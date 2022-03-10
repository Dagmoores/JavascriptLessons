const path = require('path')
const webpack = require('webpack')

module.exports = {
    mode: 'development',
    module: {
        rules: [{
            test: '/\.s[ac]ss$/i',
            use: [
                "sass-loader"
            ]
        }]
    },
    devServer: {
        static: {
            directory: path.join(__dirname + 'src/pages/template')
        },
        compress: true,
        port: 8080
    }   
}