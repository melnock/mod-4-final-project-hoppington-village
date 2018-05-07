import React from 'react'

const Pet = (props) => {
  return (
    <div className="pet-image">
    {props.animal ?
       <img id={props.pet.name} onMouseEnter={props.handleMouseEnter} onMouseLeave={props.handleMouseLeave} src={props.animal.sprites.main} /> :
       null }
    {props.outfit.hat ?
      <img className="pet-hat"
        id={props.outfit.hat.id}
        src={props.outfit.hat.sprite}
        alt="dapper-hat"
        style={{position:"absolute",
          width:props.outfit.hat.coordinates.width,
          height: "auto",
          left:props.animalPosition.left + props.outfit.hat.coordinates.left,
          top: props.animalPosition.top + props.outfit.hat.coordinates.top,
          zIndex: 1}}/> :
      null
      }
    </div>
  )
}

export default Pet
