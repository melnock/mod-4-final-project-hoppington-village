import React, { Component } from 'react';
import Pet from '../components/Pet'
import PetGauges from "../components/PetGauges"


class PetContainer extends Component{

  state={
    pet: null,
    hangry: 10,
    energy: 10,
    cleanliness: 10,
  }

  componentDidMount(){
    fetch("http://localhost:3000/api/v1/pets/1")
      .then(r=>r.json())
      .then(json=> this.setState({
        pet: json,
        hangry: json.hunger_level,
        energy: json.energy_level,
        cleanliness: json.cleanliness,
      }))
  }

  handleFeedBunny=()=>{
    this.setState({
      hangry: this.state.hangry - 1,
    })
  }

  componentWillReceiveProps(newProps) {
    if (newProps.endOfDrag) {
      let drop = newProps.endOfDrag
      if (drop.x >= 430 && drop.x <= 460 && drop.y >=590 && drop.y <= 615) {
        this.state.hangry > 0 ? this.handleFeedBunny() : null
      }
    }
  }

  render(){
    return(
      <div className="pet-container">
        <PetGauges pet={this.state.pet}
          hangry= {this.state.hangry}
        />
        {this.state.pet ?
          <Pet
          animal={this.props.animals.find(animal=>animal.id===this.state.pet.animal_id)}
          pet={this.state.pet}
          /> : "no pet yet"}

      </div>
    )
  }
}

export default PetContainer
