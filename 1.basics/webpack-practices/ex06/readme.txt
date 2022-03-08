이미지 모듈 번들링 하기

1.  설치 패키지
$ npm i -D webpack webpack-cli webpack-dev-server style-loader css-loader node-sass sass-loader

2.  Image Loader Loader 설정(webpack.config.js)
    output: {
        ..
        [생략]
        ..
        assetModuleFilename: 'assets/images/[hash][ext]'
    }
    module: {
        rules:[{
            test: /\.(sa|sc|c)ss$/i, //   sa ss 로 시작하는지 sc ss로 시작하는지 c ss 로 시작하는지 
            use:['style-loader', 'css-loader', 'sass-loader'] //    순서 중요
        }]
    },

3.  스크립팅
"start": "npx webpack serve --progress"

4.  개발 서버 실행 
$ npm start