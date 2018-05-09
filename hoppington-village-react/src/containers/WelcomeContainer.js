import React from 'react'
import LoginForm from '../components/AuthForm'
import RegisterForm from '../components/RegisterForm'


class WelcomeContainer extends React.Component{
  state={
    register: false,
    login: false
  }

  handleLogin = () => {
    this.setState({
      register: false,
      login: true
    })
  }

  handleRegister = () => {
    this.setState({
      register: true,
      login: false
    })
  }


  render(){
    return (
      <div className="welcome">

        {this.state.register ?
          <div><RegisterForm authFetched={this.props.authFetched}/> <p> Already Signed Up? ---></p></div>: <button onClick={this.handleRegister}>Register</button>

        }
        {this.state.login ?
          <div><LoginForm authFetched={this.props.authFetched}/><p> {"<-----"} Not Signed Up? </p></div> : <button onClick={this.handleLogin}>Login</button>

        }

      </div>
    )
  }
}

export default WelcomeContainer
