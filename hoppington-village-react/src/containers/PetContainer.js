import React, { Component } from 'react';


class PetContainer extends Component{

  state={
    pet: null
  }

  componentDidMount(){
    fetch("http://localhost:3000/api/v1/pets/1")
      .then(r=>r.json())
      .then(json=> this.setState({pet: json}))
  }

  render(){
    return(
      <div>
        {this.state.pet ? this.state.pet.name : "no pet yet"}
      </div>
    )
  }
}

export default PetContainer
