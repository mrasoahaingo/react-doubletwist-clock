var path = require('path');
var webpack = require('webpack');
var nib = require('nib');
var poststylus = require('poststylus');

module.exports = {
    devtool: 'eval',
    entry: [
        'webpack-hot-middleware/client',
        './src/index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    devtool: 'source-map',
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['babel'],
            include: path.join(__dirname, 'src')
        },{
            test: /\.styl$/,
            loaders: ['style', 'css', 'autoprefixer', 'stylus'],
            include: path.join(__dirname, 'src')
        },{
            test: /\.svg/,
            loaders: ['raw'],
            include: path.join(__dirname, 'src')
        }]
    },
    stylus: {
        use: [nib(), poststylus('lost')]
    }
};
