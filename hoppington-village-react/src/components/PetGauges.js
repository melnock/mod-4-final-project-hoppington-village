import React from 'react'

const PetGauges = (props) => {
  const stuffToRender=()=>{
    return(
      <div className="pet-status-meters">
        <p>Energy:</p>
        <div className="energy-meter" style={{  borderLeft: (10-props.energy)*10 + "px solid #42f4a1",   borderRight: (props.energy)*10 + "px solid #f75f45" }}></div>
        <br/><p>Cleanliness:</p>
        <div className="energy-meter" style={{  borderLeft: (10-props.cleanliness)*10 + "px solid #42f4a1",   borderRight: (props.cleanliness)*10 + "px solid #f75f45" }}></div>
        <br/><p>Hangry:</p>
        <div className="energy-meter" style={{  borderLeft: (10-props.hangry)*10 + "px solid #42f4a1",   borderRight: (props.hangry)*10 + "px solid #f75f45" }}></div>
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
