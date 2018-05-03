import React from 'react'

const Pet = (props) => {

  return (
    <div>
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
