import React, { Component } from 'react';
//import logo from './logo.svg';<!-- <img src={logo} className="App-logo" alt="logo" /> -->
import './App.css';
//import Intro from "../Intro/index";
import Series from '../../containers/Series';
import 'whatwg-fetch';

class Index extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">TV Series List</h1>
        </header>
        {/*<Intro message={"Here you can find all of your most loved series"}/>*/}
          <Series />
      </div>
    );
  }
}

export default Index;
