import React from 'react'

const Item = (props) => {
  // console.log("props", props)
  let { item } = props

  return (
    <div>
    <img
      id={item.name}
      onClick={props.handleClick}
      onDrag={props.handleDragStart}
      onDragEnd={props.handleDragEnd}
      src={item.sprite}
      alt={item.id}
      style={
        (item === props.beingDragged) ? { position:"absolute",
          left: props.dragX - 35,
          top: props.dragY+(props.scroll-60),
          width: 100,
          height: "auto"} : {width: 100, height: "auto"}
      }
      draggable="true"
    />
    </div>
  )
}

export default Item
