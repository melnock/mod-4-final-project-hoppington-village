import React from 'react'

const Pet = (props) => {

  return (
    <div className="pet-image">
    {props.animal ?
       <img onMouseEnter={props.handleMouseEnter} onMouseLeave={props.handleMouseLeave} src={props.animal.sprites.main} /> :
       null }
    </div>
  )
}

export default Pet
