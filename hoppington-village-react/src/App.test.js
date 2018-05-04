import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


// <div>
//   <img
//     id={props.items[0].id}
//     onDrag = {props.handleDragStart}
//     onDragEnd = {props.handleDragEnd}
//     src={props.items[0].sprite}
//     alt={props.items[0].id}
//     style = {(props.items[0] === props.beingDragged) ? { position:"absolute", left: props.dragX, top: props.dragY } : {}}
//   />
// </div>
