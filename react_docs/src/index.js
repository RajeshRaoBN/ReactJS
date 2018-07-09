import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));

//ReactDOM.render(<h1>Hello, World! Welcome to Docsland</h1>, document.getElementById('root'));

/* const name = 'Rajesh Rao';
const element = <h1>Hello, {name}! Welcome to Docsland</h1>;
ReactDOM.render(element, document.getElementById('root')); */

function formatName(user) {
    return user.firstName + ' ' + user.lastName
}

var user;

/*const user = {
    firstName: 'Rajesh',
    lastName: 'Rao'
};*/

function getGreeting(user) {
    if (user) {
        return "{formatName(user)}!";
    }
    return "Stranger."
}
/*const element = <div tabIndex="0">
    <h1>
        Hello, {getGreeting(user)}
    </h1>
    <h2>Good to see you here.</h2>
    <img src="https://s.gravatar.com/avatar/ceadcc1e6d905108a205621c1d0f21b7?s=80"></img>
    </div>;*/

/*const element = React.createElement(
    'h1', {className:'greeting'}, 'Hello, World!'
);*/

// Note: this structure is simplified
/*
const element = {
    type: 'h1',
    props: {
        className: 'greeting',
        children: 'Hello, world!'
    }
};
*/
//const element = <h1>Hello, world</h1>
//ReactDOM.render(element, document.getElementById('root'));

function tick() {
    const element = (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
    ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);

registerServiceWorker();
