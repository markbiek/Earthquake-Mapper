var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');
var LESS_DIR = path.resolve(__dirname, 'src/less');

var config = {
    entry: APP_DIR + '/index.jsx',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    module: {
        preLoaders: [
            {
                test: /\.jsx?/,
                include: APP_DIR,
                loader: 'babel'
            }
        ],
        loaders: [
            {
                test: /\.less$/,
                include: LESS_DIR,
                loader: 'style!css!autoprefixer!less'
            }
        ]
    }
};

module.exports = config;
