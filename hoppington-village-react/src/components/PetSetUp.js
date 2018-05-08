import React from 'react'

class PetSetUp extends React.Component {
  state={
    name:"",
  }

  handleChange=(e)=>{
    this.setState({
      name: e.target.value
    })
  }

  handleBunnyCreation =(e)=>{
    e.preventDefault()

  }

  render(){
    return (
      <div>
        <h1 className="pet-owner">Welcome to Hoppington Village, {this.props.auth.username}! </h1>
        <h2> It is time to choose your pet!</h2>
        <h2> What do you want to name your pet? </h2>
        <form onSubmit={this.handleBunnyCreation} >
          <input name="name" value={this.state.name} onChange={this.handleChange}/>
        </form>
      </div>
    )
  }

}

export default PetSetUp