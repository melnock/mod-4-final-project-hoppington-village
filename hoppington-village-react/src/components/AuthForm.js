import React from 'react'

class AuthForm extends React.Component {

  DEFAULT_STATE = {
    username: "",
    password: "",
    errors: []
  }

  state = this.DEFAULT_STATE

  login = (event) => {
    event.preventDefault()
    const username = this.state.username
    const password = this.state.password
    const auth = {username, password}

  }

  handleLoginFetch(auth) {
    fetch(this.props.url, {
      method: "POST",
      headers: {
        "Content-Type":"application/json",
        "Accept":"application/javascript"
      },
      body: JSON.stringify(auth)
    }).then(res=>res.json())
      .then(json=>{
        if (json.errors) {
          this.setState({errors: json.errors})
        } else {
          this.setState({...this.DEFAULT_STATE})
          this.props.authSet(json)
          this.props.history.push("/")
        }
      })
  }

  change = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  errors() {
    return (
      <ul>
        {this.state.errors.map(error => <li>{error}</li>)}
      </ul>
    )
  }

  render(){
    return (
      <div>
        <form onSubmit={this.login}>
          Username:
          <input
          name="username"
          onChange={this.change}
          value={this.state.username}
          id="username"/><br/>
          Password:
          <input
          onChange={this.change}
          name="password"
          type="password"
          id="password"
          value={this.state.password}/><br/>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default AuthForm
