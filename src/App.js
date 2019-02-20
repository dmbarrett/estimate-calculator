import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Estimate from './components/Estimate'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Estimate />
      </div>
    );
  }
}

export default App;
