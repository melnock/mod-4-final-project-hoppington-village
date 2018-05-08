import React from 'react'

const GoForHop = (props) => {
  const handleClick = (e) => {
    props.handleHop()
  }

  return (
    <button className="hopButton" onClick={handleClick}>Go for a hop!</button>
  )
}

export default GoForHop
