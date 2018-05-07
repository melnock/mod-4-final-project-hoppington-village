import React, { Component } from 'react';
import Pet from '../components/Pet'
import PetGauges from "../components/PetGauges"


class PetContainer extends Component{

  state={
    pet: null,
    hangry: 10,
    energy: 10,
    cleanliness: 10,
    animalPosition: {},
    moused: false
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
    console.log("hey")
      this.setState({
        hangry: this.state.hangry - 1,
      })
  }

  handleMouseEnter=(e)=>{
    console.log("feeed meee!")
    this.setState({
      moused: true
    })
  }

  handleMouseLeave=(e)=>{
    console.log("nevermind")
      this.setState({
        moused: false
      })
    }

  handleBunnyHat=(drop)=>{
    //way to change attribute to have its position lock on where its dropped?
    //render a different sprite that has the hat included if dropped in right place?
    //leaving to be brainstormed for now
    //Melissa-note: My thought was to render the hat on top of the original sprite in
    // order to dynaimcally render the extra items without needing to recreate a new sprite
    //for potentially hundreds of options, but we can discuss. :)
  }

  componentWillReceiveProps(newProps) {
    this.handleAnimalPlacement()
      if(this.props.beingDragged){
      let dragItem = this.props.beingDragged.name
      if (this.props.endOfDrag){
        console.log(dragItem==="carrot", this.props.endOfDrag)
        console.log(this.props.endOfDrag.x < this.state.rect.right && this.props.endOfDrag.x > this.state.rect.left)
        if (this.props.endOfDrag.x < this.state.rect.right && this.props.endOfDrag.x > this.state.rect.left){
          if (this.props.endOfDrag.y < this.state.rect.bottom && this.props.endOfDrag.y > this.state.rect.top){
            if (dragItem==="carrot") {
              this.handleFeedBunny()
            } else if (dragItem==="party-hat"){
              this.handleBunnyHat()
            }
          }
        }
      }
    }
  }

  handleAnimalPlacement=()=>{
    if(this.state.pet){
      if (document.getElementById(this.state.pet.name)){
        var rect = document.getElementById(this.state.pet.name).getBoundingClientRect();
        this.setState({
          animalPosition: {top: rect.top, bottom:rect.bottom, left: rect.left, right: rect.right}
        })
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
          handleAnimalPlacement={this.handleAnimalPlacement}
          handleMouseEnter={this.handleMouseEnter}
          handleMouseLeave={this.handleMouseLeave}
          /> : "no pet yet"}

      </div>
    )
  }
}

export default PetContainer
