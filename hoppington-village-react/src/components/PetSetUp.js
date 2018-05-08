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



  render(){
    return (
      <div className="form-stuff">
        <h1 className="pet-owner">Welcome to Hoppington Village, {this.props.auth.username}! </h1>
        <h2> It is time to choose your pet!</h2>
        <h2> What do you want to name your pet? </h2>
        <form onSubmit={(e)=>{this.props.handleBunnyCreation(e, this.state.name)}} >
          <div className="text-field-component">
            <input name="name" value={this.state.name} onChange={this.handleChange} placeholder="Name Your Pet"/>
          </div>
          <br/><input type="submit"/>
        </form>
      </div>
    )
  }

}

export default PetSetUp
