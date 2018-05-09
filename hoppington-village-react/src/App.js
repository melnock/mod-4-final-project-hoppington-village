import React, { Component } from 'react';
import './App.css';
import GameContainer from "./containers/GameContainer"
// import Login from './containers/Login'
import LogoutButton from './components/LogoutButton'
import WelcomeContainer from './containers/WelcomeContainer'

class App extends Component {
  state={
    auth: null,
    currentUser: null
  }

  componentDidMount() {
    if (localStorage.auth) {
      const auth = JSON.parse(localStorage.auth)
      this.setState({ auth, currentUser:auth.username })
    }
  }

  authFetched = (auth, username) => {
    console.log(auth)
    localStorage.auth = JSON.stringify(auth);
    this.setState({ auth, currentUser:auth.username });
  }

  logout = () => {
    localStorage.removeItem("auth")
    this.setState({ auth: null })
  }

  render() {
    console.log("ohi", this.state)
    return (
      <div className="App">
        <header className="App-header">
          {this.state.currentUser ?
          <LogoutButton logout={this.logout}/> : null }
          <img src="https://i.imgur.com/sv2rOVQ.png" alt="logo"  />
        </header>
          { this.state.auth && this.state.auth.status !== 404 ?
          <GameContainer auth={this.state.auth} currentUser={this.state.currentUser}/> :
          <div>
            <WelcomeContainer authFetched={this.authFetched} />
          </div>
        }
      </div>
    );
  }
}

export default App;
