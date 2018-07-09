import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <form className="form">
            <table>
                <tr>
                    <td width="100px">First Name:</td>
                    <td width="200px"><input type="text" name="first_name"/></td>
                </tr>
                <tr>
                    <td width="100px">Last Name:</td>
                    <td width="200px"><input type="text" name="last_name"/></td>
                </tr>
                <tr>
                    <td width="100px">UserId:</td>
                    <td width="200px"><input type="text" name="id" /></td>
                </tr>
                <tr>
                    <td width="100px">Password:</td>
                    <td width="200px"><input type="password" name="password"/></td>
                </tr>
                <input type="submit" value="Submit"/>
            </table>
        </form>
      </div>
    );
  }
}

export default App;
