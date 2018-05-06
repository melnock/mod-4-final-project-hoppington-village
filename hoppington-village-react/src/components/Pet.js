import React from 'react'

const Pet = (props) => {
  console.log(document.getElementById("angel"))

  if (document.getElementById("angel")){
  var rect = document.getElementById("angel").getBoundingClientRect();
  console.log(rect.top, rect.right, rect.bottom, rect.left);}

  return (
    <div className="pet-image">
    {props.animal ?
       <img id={props.pet.name} onMouseEnter={props.handleMouseEnter} onMouseLeave={props.handleMouseLeave} src={props.animal.sprites.main} /> :
       null }
    </div>
  )
}

export default Pet
