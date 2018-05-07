import React from 'react'

const Pet = (props) => {
  return (
    <div className="pet-image">
    {props.animal ?
       <img id={props.pet.name} onMouseEnter={props.handleMouseEnter} onMouseLeave={props.handleMouseLeave} src={props.animal.sprites.main} /> :
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
      {props.outfit.shoes ?
        <img className="pet-shoes"
          id={props.outfit.shoes.id}
          src={props.outfit.shoes.sprite}
          alt="dapper-shoes"
          style={{position:"absolute",
            width:props.outfit.shoes.coordinates.width,
            height: "auto",
            left:props.animalPosition.left + props.outfit.shoes.coordinates.left,
            top: props.animalPosition.top + props.outfit.shoes.coordinates.top,
            zIndex: 1}}/> :
        null
        }

    </div>
  )
}

export default Pet
