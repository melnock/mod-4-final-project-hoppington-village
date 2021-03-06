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
    this.handleLoginFetch(auth, username)
  }

  handleLoginFetch(auth, username) {
    let url;
    if (this.props.url) {url=this.props.url} else {url="http://localhost:3000/sessions"}
    fetch(url, {
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
          this.props.authFetched(json, username)
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
      <div className="form-stuff">
      {this.state.errors.length > 0 ? this.errors() : null}
        <form name="user" onSubmit={this.login}>
          <div className="text-field-component">
            <input
            name="username"
            onChange={this.change}
            value={this.state.username}
            placeholder="Username"/><br/>
          </div>
          <div className="text-field-component">
            <input
            onChange={this.change}
            name="password"
            type="password"
            placeholder="Password"
            value={this.state.password}/><br/>
          </div>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default AuthForm
