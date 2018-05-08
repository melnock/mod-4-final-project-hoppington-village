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
      console.log("woo")
    localStorage.auth = JSON.stringify(auth);
    this.setState({ auth });
  }

  logout = () => {
    localStorage.removeItem("auth")
    this.setState({ auth: null })
  }

  render() {
    console.log(this.state.auth)
    return (
      <div className="App">
        <header className="App-header">
          <img src="https://i.imgur.com/sv2rOVQ.png" alt="logo"  />
        </header>
          { this.state.auth && this.state.auth.status !== 404 ?
          <GameContainer auth={this.state.auth}/> :
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
