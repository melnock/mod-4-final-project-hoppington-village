import React, { Component } from 'react';
import './App.css';
import GameContainer from "./containers/GameContainer"
// import Login from './containers/Login'
import LoginForm from './components/AuthForm'
import RegisterForm from './components/RegisterForm'

class App extends Component {
  state={
    auth: null
  }

  componentDidMount() {
    if (localStorage.auth) {
      const auth = JSON.parse(localStorage.auth)
      this.setState({ auth })
    }
  }

  authFetched = (auth) => {
    localStorage.auth = JSON.stringify(auth);
    this.setState({ auth });
  }

  logout = () => {
    localStorage.removeItem("auth")
    this.setState({ auth: null })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="https://i.imgur.com/sv2rOVQ.png" alt="logo" />
        </header>
          { this.state.auth ?
          <GameContainer /> :
          <div>
            <LoginForm />
            <RegisterForm />
          </div>
        }
      </div>
    );
  }
}

export default App;
