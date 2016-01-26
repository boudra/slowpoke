const path = require('path')
const webpack = require('webpack');

var config = {
    entry: './index.js',
    output: {
        path: path.join(__dirname),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};

module.exports = config;
