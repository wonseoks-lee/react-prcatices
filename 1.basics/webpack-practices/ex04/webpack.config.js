const path = require('path');

module.exports = {
    mode: 'development',
    entry: path.resolve('src/index.js'),
    output: {
        path: path.resolve('public'),
        filename: 'bundle.js'
    },
    module: {
        rules:[{
            test: /\.css$/i,
            use:['style-loader', 'css-loader']
        }]
    },
    devServer: {
        host: '0.0.0.0',
        port: 9090,
        liveReload: true, //    소스에 변경사항이 있을 시, 자동 리로드
        hot: false,
        compress: true
    }
}