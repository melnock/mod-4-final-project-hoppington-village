import React from 'react'

class AuthForm extends React.Component {

  DEFAULT_STATE = {
    username: "",
    password: "",
    errors: []
  }

  state = this.DEFAULT_STATE

  login = (event) => {
    console.log(this.props)
    event.preventDefault()
    const username = this.state.username
    const password = this.state.password
    const auth = {username, password}
    this.handleLoginFetch(auth)
  }

  handleLoginFetch(auth) {
    console.log("heeelp!!")
    fetch("http://localhost:3000/sessions", {
      method: "POST",
      headers: {
        "Content-Type":"application/json",
        "Accept":"application/javascript",
      },
      body: JSON.stringify(auth)
    }).then(res=>res.json())
      .then(json=>{
        if (json.errors) {
          this.setState({errors: json.errors})
        } else {
          this.setState({...this.DEFAULT_STATE})
          this.props.authFetched(json)
          // this.props.history.push("/")
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
    console.log(this.state.errors)
    return (
      <div>
      {this.state.errors.length > 0 ? this.errors() : null}
        <form name="user" onSubmit={this.login}>
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
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default AuthForm
