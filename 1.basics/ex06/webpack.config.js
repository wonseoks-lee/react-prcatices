const path = require('path');

module.exports = {
    mode: 'development',
    entry: path.resolve('src/index.js'),
    output: {
        path: path.resolve('public'),
        filename: 'file.js',
        assetModuleFilename: 'assets/images/[hash][ext]'
    },
    module: {
        rules:[{
            test: /\.(sa|sc|c)ss$/i, //   sa ss 로 시작하는지 sc ss로 시작하는지 c ss 로 시작하는지 
            use:['style-loader', 'css-loader', 'sass-loader'] //    순서 중요
        }, {
            test: /\.(png|git|jpe?g|svg|ico|tiff?|bmp)$/i,
            type: 'asset/resource'
        }]
    },
    devServer: {
        host: '0.0.0.0',
        port: 9090,
        liveReload: true, //    소스에 변경사항이 있을 시, 자동 리로드
        hot: false,
        compress: true,
        historyApiFallback:true
    }
}