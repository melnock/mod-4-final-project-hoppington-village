import React from 'react'
import LoginForm from '../components/LoginForm'

class Login extends React.Component{

  handleLogin = (userObj) => {
    console.log(userObj.username, userObj.password)
    fetch("http://localhost:3000/api/v1/users", {
      headers: {'Content-Type':'application/json'},
      method: 'POST',
      body: JSON.stringify({username: userObj.username, password: userObj.password})
    }).then(res=>res.json()).then(json=>console.log(json))
  }
  //this is being rolled back

  //for auth, have a function that posts to sessions?
  //it's a request that returns a token

  render(){
    return (
      <div>
        <LoginForm handleLogin={this.handleLogin}/>
      </div>
    )
  }
}

export default Login
