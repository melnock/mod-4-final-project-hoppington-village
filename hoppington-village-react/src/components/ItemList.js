import React from 'react'
import Item from './Item'

const ItemList = (props) => {
  // console.log(props.items[0])
  let renderedItems = props.items.map(item=>{
    return (
      <div>
        <Item key={item.id} item={item} handleDragEnd={props.handleDragEnd} dragX={props.dragX} dragY={props.dragY} beingDragged={props.beingDragged} handleDragStart={props.handleDragStart}/>
      </div>
    )
  })

  return (
    <div className="items">
    { props.items ? renderedItems : null }
    </div>
  )
}

export default ItemList
