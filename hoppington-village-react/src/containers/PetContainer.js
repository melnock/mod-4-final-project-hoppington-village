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
    moused: false,
    dragItem: null,
    beingCleaned: false
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
        dragItem: null
      })
  }

  handleCleanBunny=()=>{
    this.state.cleanliness > 0 ?
    this.setState({
      cleanliness: this.state.cleanliness - 1
    }) : null
  }

  handleMouseEnter=(e)=>{
    if (this.state.beingCleaned===false && this.props.beingDragged==="brush"){
      this.setState({
        beingCleaned: true
      })
    }
    // setTimeout(function () {
    //     this.setState({beingCleaned: false});
    //   }.bind(this), 10000)
  }

  handleMouseLeave=(e)=>{
    console.log("hi!")
    this.handleCleanBunny()
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
    console.log(this.props)
      if(this.props.beingDragged){
        this.setState({
          dragItem: this.props.beingDragged.name
        })
      }
      if (newProps.endOfDrag){
        console.log(newProps.endOfDrag.x < this.state.animalPosition.right && newProps.endOfDrag.x > this.state.animalPosition.left)
        if (newProps.endOfDrag.x < this.state.animalPosition.right && newProps.endOfDrag.x > this.state.animalPosition.left){
          if (newProps.endOfDrag.y < this.state.animalPosition.bottom && newProps.endOfDrag.y > this.state.animalPosition.top){
            if (this.state.dragItem==="carrot") {
              this.handleFeedBunny()
            } else if (this.state.dragItem==="party-hat"){
              this.handleBunnyHat()
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
          cleanliness= {this.state.cleanliness}
          energy= {this.state.energy}
        />
        {this.state.pet ?
          <Pet
          beingCleaned={this.state.beingCleaned}
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
