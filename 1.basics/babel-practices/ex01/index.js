const babel = require('@babel/core');

// const fn = function(){
//     return 1;
// }
// () 파라미터부분 / => 리턴부분

const result = babel.transform('const fn = () => 1;', {});
console.log(result);


// babel.transform('const fn = () => 1;')