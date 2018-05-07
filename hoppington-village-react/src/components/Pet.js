import React from 'react'

const Pet = (props) => {
  console.log(props)

  return (
      <div className="pet-image">
      {props.animal ?
         <img id={props.pet.name}
         onMouseEnter={props.handleMouseEnter}
         onMouseLeave={props.handleMouseLeave}
         src={props.animal.sprites.main} /> :
         null }
      {props.beingCleaned ?
        <div>
          <div id="bubbles">
            <div className="bubble x1"></div>
            <div className="bubble x2"></div>
            <div className="bubble x3"></div>
            <div className="bubble x4"></div>
            <div className="bubble x5"></div>
          </div>
        </div>
        : null
      }
      </div>
  )
}

export default Pet
