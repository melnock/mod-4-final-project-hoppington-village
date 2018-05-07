import React from 'react'

const PetGauges = (props) => {
  const stuffToRender=()=>{
    return(
      <div>
        <h1>ENERGY LEVEL!!!! {props.energy_level}</h1>
        <h1>CLEAN LEVEL!!!! {props.cleanliness}</h1>
        <h1>HANGRY LEVEL!!!! {props.hangry}</h1>
      </div>
  )
  }
  return (
    <div>
    {props.pet ?
          stuffToRender():
       null }
    </div>
  )
}

export default PetGauges
