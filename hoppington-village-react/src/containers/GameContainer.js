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
    endOfDrag: null,
    class: null
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
    const foundItem = this.state.items.find((item)=>(item.name === e.target.id))
    // console.log("x", e.clientX, "y", e.clientY)
    this.setState({
      endOfDrag: null,
      dragX: e.clientX,
      dragY: e.clientY,
      beingDragged: foundItem,
    })
  }

  handleDragEnd=(e)=>{
    this.setState({
      endOfDrag:{x: e.clientX, y: e.clientY},
      dragX: null,
      dragY: null,
      beingDragged: null,
    })
  }

  handleClick=(e)=>{
    console.log(e.target.id)
    if (this.state.cursor){
      this.setState({
        class: null
      })
    }
    if (e.target.id==="brush") {
      this.setState({
        class: 'cursor',
        beingDragged: 'brush'
      })
    }
  }

  render(){
    // console.log("class", this.state.class)
    return (
      <div className={this.state.class}>
        <div className="pet-display">
          <ItemList handleClick={this.handleClick} handleDragEnd= {this.handleDragEnd} dragX={this.state.dragX} dragY={this.state.dragY} beingDragged={this.state.beingDragged} handleDragStart={this.handleDragStart} items={this.state.items}/>
          <PetContainer beingDragged={this.state.beingDragged} endOfDrag={this.state.endOfDrag} animals={this.state.animals}/>
        </div>
      </div>
    )
  }
}

export default GameContainer
