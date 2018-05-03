import React, { Component } from 'react';
import './App.css';
import GameContainer from "./containers/GameContainer"

class App extends Component {


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="https://i.imgur.com/JtH23o7.png" className="App-logo" alt="logo" />
          <h1 className="App-title">Hoppington Village</h1>
        </header>
          <GameContainer />
      </div>
    );
  }
}

export default App;
