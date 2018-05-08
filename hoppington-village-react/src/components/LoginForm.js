import React from 'react'
import AuthForm from './AuthForm'

class LoginForm extends React.Component{
  render(){
    return (
      <div>
      Login Form:
        <AuthForm { ...this.props } url="http://localhost:3000/sessions"/>
      </div>
    )
  }
}

export default LoginForm
