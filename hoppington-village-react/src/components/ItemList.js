import React from 'react'

const ItemList = (props) => {

  return (
    <div className="items">
    {props.items[0] ?
       <div>
         <img
           id={props.items[0].id}
           onDrag = {props.handleDragStart}
           onDragEnd = {props.handleDragEnd}
           src={props.items[0].sprite}
           alt={props.items[0].id}
           style = {(props.items[0] === props.beingDragged) ? { position:"absolute", left: props.dragX, top: props.dragY } : {}}
         />
       </div>:
       null }
    </div>
  )
}

export default ItemList
