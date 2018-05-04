import React from 'react'

const Item = (props) => {
  // console.log("props", props)
  let { item } = props

  return (
    <div>
    <img
      id={item.id}
      onDrag={props.handleDragStart}
      onDragEnd={props.handleDragEnd}
      src={item.sprite}
      alt={item.id}
      style={(item === props.beingDragged) ? { position:"absolute", left: props.dragX-40, top: props.dragY-70 } : {}}
    />
    </div>
  )
}

export default Item
