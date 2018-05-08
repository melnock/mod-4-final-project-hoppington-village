import React from 'react'
import AuthForm from './AuthForm'

class RegisterForm extends React.Component{
  state = {
    url: "http://localhost:3000/api/v1/users"
  }

  render(){
    return (
      <div>
      Register Form:
        <AuthForm { ...this.props } authFetched={this.props.authFetched} url={this.state.url}/>
      </div>
    )
  }
}

export default RegisterForm
