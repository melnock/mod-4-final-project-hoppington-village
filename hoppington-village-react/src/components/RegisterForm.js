import React from 'react'
import AuthForm from './AuthForm'

class RegisterForm extends React.Component{
  render(){
    return (
      <div>
      Register Form:
        <AuthForm { ...this.props } authFetched={this.authFetched}/>
      </div>
    )
  }
}

export default RegisterForm
