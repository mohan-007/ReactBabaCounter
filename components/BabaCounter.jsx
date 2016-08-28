import React from 'react'

var BabaCounter = React.createClass({
	render(){
		return(
				<div className="Counter" >
					<label className="counterName"> Baba Counter</label>
					<div className="number"> {this.props.counts}</div>
					<input type="button" className="startButton" value="Start" onClick={this.props.startCountings}/>
				</div>
			)
	}
})

export default BabaCounter