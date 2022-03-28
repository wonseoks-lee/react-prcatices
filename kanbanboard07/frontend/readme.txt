1.  설치
$ npm i -D webpack webpack-cli webpack-dev-server style-loader css-loader node-sass sass-loader babel-loader @babel/core @babel/cli @babel/preset-env @babel/preset-react @babel/plugin-transform-runtime @babel/plugin-syntax-throw-expressions
$ npm i react react-dom prop-types

2.  설정
config/babel.config.json
config/webpack.config.js

3.  npm 스크립팅
  "scripts": {
    "build": "npm run build:frontend && npm run build:backend",
    "build:frontend": "npx webpack --config config/webpack.config.js --mode production",
    "build:backend" : "cd ../backend && mvn clean package",
    "dev": "",
    "dev:frontend": "npx webpack serve --config config/webpack.config.js --progress --mode development",
    "dev:backend": "cd ../backend && mvn spring-boot:run"
  },

4.  실행
