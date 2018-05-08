import React from 'react'


class HopContainer extends React.Component{

  componentDidMount(){
    const canvas = this.refs.canvas
    const ctx = canvas.getContext("2d")
    const img = this.refs.image

    img.onload = () => {
      ctx.drawImage(img, 0, 0)
      ctx.font = "40px Courier"
      ctx.fillText("test", 210, 75)
    }
  }

  render(){
    return (
      <div>
        <canvas ref="canvas" width={800} height={600}></canvas>
        <img ref="image" src="https://vignette.wikia.nocookie.net/mlp/images/0/04/Frame_of_empty_Ponyville_street_S1E20.png/revision/latest?cb=20130711202024" className="hidden"/>
        <button onClick={this.props.handleHop}>Back to your pet!</button>
      </div>
    )
  }
}

export default HopContainer
