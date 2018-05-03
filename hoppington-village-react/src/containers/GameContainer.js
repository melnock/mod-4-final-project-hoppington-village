import React from 'react'
import PetContainer from './PetContainer'
import ItemList from '../components/ItemList'

class GameContainer extends React.Component{
  state = {
    animals: [],
    items: [],
    beingDragged: null,
    dragX: null,
    dragY: null,
  }

  componentDidMount(){
    fetch("http://localhost:3000/api/v1/animals")
      .then(r=>r.json())
      .then(json=> this.setState({
        animals: json
      }))
    fetch("http://localhost:3000/api/v1/items")
      .then(r=>r.json())
      .then(json=> this.setState({
        items: json
      }))
  }

  handleDragStart=(e)=>{
    console.log(e.target.id)
    const foundItem = this.state.items.find((item)=>(item.id == e.target.id))
    console.log("x", e.clientX, "y", e.clientY)
    this.setState({
      dragX: e.clientX,
      dragY: e.clientY,
      beingDragged: foundItem,
    })
  }

  handleDragEnd=(e)=>{
    this.setState({
      dragX: null,
      dragY: null,
      beingDragged: null,
    })
  }

  render(){
    console.log(this.state.beingDragged)
    return (
      <div>
        <ItemList handleDragEnd= {this.handleDragEnd} dragX={this.state.dragX} dragY={this.state.dragY} beingDragged={this.state.beingDragged} handleDragStart={this.handleDragStart} items={this.state.items}/>
        <PetContainer animals={this.state.animals}/>
      </div>
    )
  }
}

export default GameContainer
