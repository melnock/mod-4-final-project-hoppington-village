import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PetContainer from "./containers/PetContainer"

class App extends Component {
  

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="https://i.imgur.com/JtH23o7.png" className="App-logo" alt="logo" />
          <h1 className="App-title">Hoppington Village</h1>
        </header>
        <p className="App-intro">
          <PetContainer />
        </p>
      </div>
    );
  }
}

export default App;
