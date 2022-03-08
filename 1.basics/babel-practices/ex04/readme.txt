Env Preset
1.  여러 플러그인의 변환 규칙을 한 번에 적용하기 위해 미리 관련 플러그인들을 모아 놓은 것.
2.  ECMAScript 년도별(버전별)로 모아 놓은 것들
    stage(0, 1, 2, 3) 레벨로 모아 놓은 것들
    3rd party(typecript, react)
    등 종류가 다양하다.
3.  Env Preset은 stage 3레벨 이상의 문법들을 변환하는 플러그인
4.  Env Preset뿐만 아니라 다양한 플러그인들은 babel 설정을 통해서 적용할 수 있다.(babel.config.json)

Env Preset 설치 (바벨 설치)
$ npm i -D @babel/core @babel/cli @babel/preset-env

Env Preset의 플러그인 확인 하기
$ npm list --depth=1

Env Preset 설정(브라우저 타겟 설정)
브라우저별 es6 호환성 테이블(kangax.github.io/compat-table/es6)

변환하기
$ npx babel src/ex.js -o dist/ex.js
