import React from 'react'


class HopContainer extends React.Component{


  render(){
    return (
      <div className="go-on-a-hop">
        <img ref="image" src="https://gph.to/2KKw47w" alt=""/>
        <button onClick={this.props.handleHop}>Back to your pet!</button>
      </div>
    )
  }
}

export default HopContainer
