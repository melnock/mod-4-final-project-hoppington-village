import React from 'react'

const Pet = (props) => {

  return (
    <div className="pet-image">
    {props.animal ?
       <img id={props.pet.name} onMouseEnter={props.handleMouseEnter} onMouseLeave={props.handleMouseLeave} src={props.animal.sprites.main} /> :
       null }
    </div>
  )
}

export default Pet
