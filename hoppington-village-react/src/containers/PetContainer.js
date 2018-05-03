import React, { Component } from 'react';
import Pet from '../components/Pet'
import PetGauges from "../components/PetGauges"


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
      <div className="pet-container">
        <PetGauges pet={this.state.pet} />
        {this.state.pet ?
          <Pet
          animal={this.props.animals.find(animal=>animal.id===this.state.pet.animal_id)}
          pet={this.state.pet}/> : "no pet yet"}

      </div>
    )
  }
}

export default PetContainer
