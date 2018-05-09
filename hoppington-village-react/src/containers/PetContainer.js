import React, { Component } from 'react';
import Pet from '../components/Pet'
import PetSetUp from '../components/PetSetUp'
import PetGauges from "../components/PetGauges"
import GoForHop from '../components/GoForHop'
import HopContainer from './HopContainer'

class PetContainer extends Component{

  state={
    pet: null,
    hangry: 10,
    energy: 10,
    cleanliness: 10,
    animalPosition: {},
    moused: false,
    dragItem: null,
    outfit: {
      hat: null,
      shirt: null,
      pants: null,
      shoes: null
    },
    beingCleaned: false,
    gettingRest: false,
    hopping: false

  }

  componentDidMount(){
    const token= `Token token=${ this.props.auth.token }`
    this.fetchPets(token)
  }

  fetchPets=(token)=>{
    fetch("http://localhost:3000/api/v1/pets",{
      headers: {
        "Content-Type":"application/json",
        "Accept":"application/javascript",
        "Authorization": token
      }})
      .then(r=>r.json())
      .then(json=>{
        const findpet = json.find((pet) => (pet.user_id === this.props.auth.user_id))
        if (findpet){
          this.setState({
            pet: findpet,
            hangry: findpet.hunger_level,
            energy: findpet.energy_level,
            cleanliness: findpet.cleanliness,
          })
          this.hangry= setInterval(()=>{ this.state.hangry < 10 ?  this.setState({hangry: this.state.hangry + 1}) : null}, 30000)
          this.cleanry = setInterval(()=>{ this.state.cleanliness < 10 ?  this.setState({cleanliness: this.state.cleanliness + 1}) : null}, 15000)
          this.energyry = setInterval(()=>{ this.state.energy < 10 ?  this.setState({energy: this.state.energy + 1}) : null}, 20000)
        }
      })
  }

  handleFeedBunny=()=>{
      this.setState({
        hangry: this.state.hangry - 1,
        dragItem: null
      })
  }
  handleRestBunny=()=>{
      this.setState({
        energy: this.state.energy - 1,
        dragItem: null,
        gettingRest: true
      })
    setTimeout(function () {
        this.setState({gettingRest: false});
      }.bind(this), 5000)
  }

  handleCleanBunny=()=>{
    this.state.cleanliness > 0 ?
    this.setState({
      cleanliness: this.state.cleanliness - 1,
    }) : null
  }

  handleMouseEnter=(e)=>{
    if (this.state.beingCleaned===false && this.props.beingDragged==="brush"){
      this.setState({
        beingCleaned: true
      })
    }
    setTimeout(function () {
        this.setState({beingCleaned: false});
      }.bind(this), 3000)
  }

  handleMouseLeave=(e)=>{
    if(this.state.beingCleaned===true){
      this.handleCleanBunny()
    }
  }

  handleBunnyHat=(drop)=>{
    const setter = this.state.dragItem.name === "party-hat" || this.state.dragItem.name==="bow-tie" ? `hat` : `shoes`

    this.setState({
      outfit:{
        ...this.state.outfit,
        [setter]: this.state.dragItem
      }
    })
  }

  handleBunnyCreation =(e, petname)=>{
    e.preventDefault()
    const newPet={
      user_id: this.props.auth.id,
      animal_id: 1,
      name: petname,
      energy_level: this.state.energy,
      cleanliness: this.state.cleanliness,
      hunger_level: this.state.hangry
    }
    console.log(this.props.auth, newPet)
    const token= `Token token=${ this.props.auth.token }`

    fetch("http://localhost:3000/api/v1/pets", {
      method: "POST",
      headers: {
        "content-type":"application/json",
        "accept":"application/javascript",
        "authorization": token
      },
      body: JSON.stringify(newPet)
    })
    .then(r=>r.json())
    .then(json=>{
      this.setState({
        pet: json
      })
    })
  }

  componentWillReceiveProps(newProps) {
    this.handleAnimalPlacement()
      if(this.props.beingDragged && this.props.beingDragged!=="brush"){
        this.setState({
          dragItem: this.props.beingDragged
        })
      }
      if (newProps.endOfDrag && this.state.dragItem){
        console.log(newProps.endOfDrag.x < this.state.animalPosition.right && newProps.endOfDrag.x > this.state.animalPosition.left)
        if (newProps.endOfDrag.x < this.state.animalPosition.right && newProps.endOfDrag.x > this.state.animalPosition.left){
          if (newProps.endOfDrag.y < this.state.animalPosition.bottom && newProps.endOfDrag.y > this.state.animalPosition.top){
            if (this.state.dragItem.type_of_item==="food") {
              this.handleFeedBunny()
            } else if (this.state.dragItem.type_of_item==="clothing"){
              this.handleBunnyHat()
            }else if (this.state.dragItem.type_of_item==="energy"){
              this.handleRestBunny()
            }
          }
        }

    }
  }

  handleHop = () => {
    this.setState({
      hopping: !this.state.hopping
    })
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

  componentWillUnmount(){
    const update={
      energy_level: this.state.energy,
      cleanliness: this.state.cleanliness,
      hunger_level: this.state.hangry
    }
    if (this.state.pet){
    fetch(`http://localhost:3000/api/v1/pets/${this.state.pet.id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        "authorization": "Token token:" + this.props.auth.token,
        "accept":"application/json"
      },
      body: JSON.stringify(update)
    }).then(r=> console.log(r))}
    clearInterval(this.hangry)
    clearInterval(this.cleanry)
    clearInterval(this.energyry)
  }

  render(){
    return(

      <div className="pet-container">
      {this.state.hopping ?
        <div className="hop-game">
          <HopContainer handleHop={this.handleHop}/>
        </div>
        :
        <div>
        <div className="pet-header">
          <div className="pet-owner">
          <h1> {this.state.pet ? this.props.currentUser+"'s pet: " : "Welcome to Hoppington Village!"}</h1>
          </div>
          <div className="pet-name">
            {this.state.pet ? <h1>{this.state.pet.name}</h1> : <img src="https://i.imgur.com/JtH23o7.png" alt="dancing" />}
          </div>
        </div>
        <PetGauges pet={this.state.pet}
          hangry= {this.state.hangry}
          cleanliness= {this.state.cleanliness}
          energy= {this.state.energy}
        />

        {(this.state.pet && this.props.animals) ?
          <div><Pet
            scroll={this.props.scroll}
            beingCleaned={this.state.beingCleaned}
            gettingRest={this.state.gettingRest}
            cleanliness={this.state.cleanliness}
            animal={this.props.animals.find(animal=>animal.id===this.state.pet.animal_id)}
            pet={this.state.pet}
            outfit={this.state.outfit}
            animalPosition={this.state.animalPosition}
            handleAnimalPlacement={this.handleAnimalPlacement}
            handleMouseEnter={this.handleMouseEnter}
            handleMouseLeave={this.handleMouseLeave}
          />
          <GoForHop handleHop={this.handleHop}/></div>
           : <PetSetUp
            auth = {this.props.auth}
            scroll={this.props.scroll}
            animal={this.props.animals}
            handleAnimalPlacement={this.handleAnimalPlacement}
            handleBunnyCreation={this.handleBunnyCreation}
          />
        }
        </div>
      }

      </div>
    )
  }
}

export default PetContainer
