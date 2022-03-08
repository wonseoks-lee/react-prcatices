import './aseets/scss/App.scss';

const App = function App(){
    const App = document.createElement('h1');
    App.className = 'Header';
    App.textContent = 'Hello Webpack';
    return App;
}

export { App }