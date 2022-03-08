import React from 'react';

const App = function App(){
    // const App = document.createElement('h1');
    // App.textContent = 'Hello World';
    // 돔 Api는 브라우저의 dom에다가 만드는 것
    // 리액트 api는 리액트의 dom에다가 만드는 것
    const App = React.createElement('h1', null, 'Hello World');
    return App;
}

export { App }