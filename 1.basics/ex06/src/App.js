import React from 'react';

const Header = function(){
    return(
        <div>
            <h1>{message}</h1>;
        </div>
    )
}

const App = function(){
//    const App = React.createElement('h1', null, 'Hello World');
//    return App;
    const message = 'Hello World';
    return (
        <div>
            <h1>{message}</h1>
        </div>
    );
}

export { App }