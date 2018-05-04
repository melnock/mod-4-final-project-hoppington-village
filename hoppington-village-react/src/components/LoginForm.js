import React from 'react'

class LoginForm extends React.Component{

  state={
    username: '',
    password: ''
  }

  change = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  login = (event) => {
    event.preventDefault()
    let username = this.state.username
    let password = this.state.password
    this.props.handleLogin({username: username, password: password})
  }

  render(){
    return (
      <div>
        <form onSubmit={this.login}>
          Username:
          <input
          name="username"
          onChange={this.change}
          value={this.state.username}/><br/>
          Password:
          <input
          onChange={this.change}
          name="password"
          type="password"
          value={this.state.password}/><br/>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default LoginForm
