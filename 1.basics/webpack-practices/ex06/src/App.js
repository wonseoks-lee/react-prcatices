import './aseets/scss/App.scss';
import logo from './aseets/images/logo.svg';

const App = function() {
    const app = document.createElement('div');
    app.className = 'App';
    app.innerHTML = 
    `<header class='App-header'>
        <img src='${logo}' class='App-logo' alt = 'logo'/>
        <p>Hello World</p>
    </header>`;
    return app;
}
export { App }