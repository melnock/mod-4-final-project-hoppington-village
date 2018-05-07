import React from 'react'

const PetGauges = (props) => {
  const stuffToRender=()=>{
    return(
      <div className="pet-status-meters">
        <p>Energy:</p>
        <div className="energy-meter" style={{  borderLeft: (10-props.energy)*10 + "px solid red",   borderRight: (props.energy)*10 + "px solid green" }}></div>
        <br/><p>Cleanliness:</p>
        <div className="energy-meter" style={{  borderLeft: (10-props.cleanliness)*10 + "px solid red",   borderRight: (props.cleanliness)*10 + "px solid green" }}></div>
        <br/><p>Hangry:</p>
        <div className="energy-meter" style={{  borderLeft: (10-props.hangry)*10 + "px solid red",   borderRight: (props.hangry)*10 + "px solid green" }}></div>
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
