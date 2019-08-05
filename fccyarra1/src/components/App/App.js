import React, { Component } from 'react';
import './App.css';
import Intro from '../Intro';
import Series from '../../containers/Series';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>TV Series List</h1>
        </header>
        <Intro message="Here your can find all of your most loved series"></Intro>
        <Series />
      </div>
    );
  }
}

export default App;
