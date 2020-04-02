import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Note from './Note';
import Board from './Board'
import App1 from './App1'
import App3 from '.'
import * as serviceWorker from './serviceWorker';

class App2 extends React.Component {
    render() {
        return(
            <div>
                <h1>Welcome Mr. {this.props.name}</h1>
            </div>
        )
    }
}

ReactDOM.render(<App3 books={App3.booklist}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
