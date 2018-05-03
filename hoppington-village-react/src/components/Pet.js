import React from 'react'

const Pet = (props) => {

  return (
    <div className="pet-image">
    {props.animal ?
       <img src={props.animal.sprites.main} /> :
       null }
    </div>
  )
}

export default Pet

// {
//
// }
