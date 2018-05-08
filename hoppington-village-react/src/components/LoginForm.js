import React from 'react'
import AuthForm from './AuthForm'

class LoginForm extends React.Component{
  state = {
    url: "http://localhost:3000/sessions"
  }

  render(){
    return (
      <div>
      Login Form:
        <AuthForm { ...this.props } authFetched={this.authFetched} url={this.state.url}/>
      </div>
    )
  }
}

export default LoginForm
