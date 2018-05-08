import React from 'react'
import AuthForm from './AuthForm'

class LoginForm extends React.Component{
  render(){
    return (
      <div>
      Login Form:
        <AuthForm { ...this.props } authFetched={this.authFetched}/>
      </div>
    )
  }
}

export default LoginForm
