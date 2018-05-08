import React, { Component } from 'react';
import './App.css';
import GameContainer from "./containers/GameContainer"
// import Login from './containers/Login'
import LoginForm from './components/AuthForm'
import RegisterForm from './components/RegisterForm'

class App extends Component {
  state={
    auth: null,
    currentUser: null
  }

  componentDidMount() {
    if (localStorage.auth) {
      const auth = JSON.parse(localStorage.auth)
      this.setState({ auth })
    }
  }

  authFetched = (auth, username) => {
    console.log(username)
    localStorage.auth = JSON.stringify(auth);
    this.setState({ auth, currentUser:username });
  }

  logout = () => {
    localStorage.removeItem("auth")
    this.setState({ auth: null })
  }

  render() {
    console.log("hi", this.state.auth)
    return (
      <div className="App">
        <header className="App-header">
          <img src="https://i.imgur.com/sv2rOVQ.png" alt="logo"  />
        </header>
          { this.state.auth && this.state.auth.status !== 404 ?
          <GameContainer logout={this.logout} auth={this.state.auth} currentUser={this.state.currentUser}/> :
          <div>
            <LoginForm authFetched={this.authFetched}/>
            <RegisterForm authFetched={this.authFetched}/>
          </div>
        }
      </div>
    );
  }
}

export default App;
