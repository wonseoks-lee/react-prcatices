const path = require('path');

module.exports = function() { 
    return {
        mode: 'development',
        entry: path.resolve(`src/index.js`),
        output: {
            path: path.resolve('../backend/src/main/resources'),
            filename: 'static/js/main.js',
            assetModuleFilename: 'static/images/[hash][ext]'
        },
        module: {
            rules:[{
                test: /\.js$/i,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    configFile: path.resolve('config/babel.config.json')
                }
            }, {
                test: /\.(sa|sc|c)ss$/i,
                use: [
                    'style-loader',
                    {loader: 'css-loader', options: {modules: true}},
                    'sass-loader'
                ]
            }, {
                test: /\.(png|git|jpe?g|svg|ico|tiff?|bmp)$/i,
                type: 'asset/resource'
            }]
        },
        devServer: {
            host: '0.0.0.0',
            port: 9999,
            proxy: {
                '/api' : 'http://localhost:8888'
            },
            liveReload: true,
            hot: false,
            compress: true,
            historyApiFallback: true
        } 
    }
}