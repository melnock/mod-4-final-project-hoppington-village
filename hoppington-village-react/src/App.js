import React, { Component } from 'react';
import './App.css';
import GameContainer from "./containers/GameContainer"
import Login from './containers/Login'

class App extends Component {
  state={
    currentUser: null
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="https://i.imgur.com/sv2rOVQ.png" alt="logo" />
        </header>
          { this.state.currentUser ?
          <Login /> :
          <GameContainer currentUser={this.state.currentUser}/>
        }
      </div>
    );
  }
}

export default App;
