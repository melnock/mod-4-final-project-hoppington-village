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
    class: null,
    width: 0,
    height: 0,
    scroll: null
  }

  componentDidMount(){
    const token= `Token token=${ this.props.auth.token }`
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
    fetch("http://localhost:3000/api/v1/animals",{
      headers: {
        "Content-Type":"application/json",
        "Accept":"application/javascript",
        "Authorization": token
      }})
      .then(r=>r.json())
      .then(json=> this.setState({
        animals: json
      }))
    fetch("http://localhost:3000/api/v1/items",{
      headers: {
        "Content-Type":"application/json",
        "Accept":"application/javascript",
        "Authorization": token
      }})
      .then(r => r.json())
      .then(json=> this.setState({
        items: json
      }))
  }

  updateScroll = () => {
    this.setState({ scroll: window.scrollY })
  }

  updateWindowDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  handleDragStart=(e)=>{
    let img = new Image()
    e.dataTransfer.setDragImage(img, 0, 0)
    this.updateScroll()
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
    if (this.state.class){
      this.setState({
        class: null
      })
    }
    if (e.target.id==="brush") {
      this.setState({
        class: 'cursor',
        beingDragged: 'brush'
      })
    }else if (e.target.id==="bed") {
      this.setState({
        beingDragged: 'bed'
      })
    }
  }

  render(){
    console.log("scroll", this.state.scroll)
    return (
      <div className={this.state.class}>
        <div className="pet-display">
          <ItemList scroll={this.state.scroll} handleClick={this.handleClick} handleDragEnd= {this.handleDragEnd} dragX={this.state.dragX} dragY={this.state.dragY} beingDragged={this.state.beingDragged} handleDragStart={this.handleDragStart} items={this.state.items}/>
          <PetContainer scroll={this.state.scroll} beingDragged={this.state.beingDragged} endOfDrag={this.state.endOfDrag} animals={this.state.animals} auth={this.props.auth}/>
        </div>
      </div>
    )
  }
}

export default GameContainer
