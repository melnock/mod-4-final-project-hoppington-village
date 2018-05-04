import React, { Component } from 'react';
import Pet from '../components/Pet'
import PetGauges from "../components/PetGauges"


class PetContainer extends Component{

  state={
    pet: null,
    hangry: 10,
    energy: 10,
    cleanliness: 10,
    animalPosition: {}
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

  handleFeedBunny=(drop)=>{
    if (drop.x >= 430 && drop.x <= 460 && drop.y >=590 && drop.y <= 615) {
      this.setState({
        hangry: this.state.hangry - 1,
      })
    }
  }

  handleBunnyHat=(drop)=>{
    //way to change attribute to have its position lock on where its dropped?
    //render a different sprite that has the hat included if dropped in right place?
    //leaving to be brainstormed for now
  }

  componentWillReceiveProps(newProps) {
    console.log(this.props.beingDragged)
    if (newProps.endOfDrag) {
      if (this.props.beingDragged.name==="carrot") {
        this.handleFeedBunny(newProps.endOfDrag)
      } else if (this.props.beingDragged.name==="party-hat"){
        this.handleBunnyHat(newProps.endOfDrag)
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
