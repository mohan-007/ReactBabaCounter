import React from 'react';
import BabaCounter from './components/BabaCounter.jsx'

var App = React.createClass ({
	getInitialState : function(){
		return {
			counts : 1
		}
	},
	componentDidMount: function() {
		FB.getLoginStatus(function(res){connected = res});
		this.setState({counts : this.state.counts , connected : connected.status})
	},
	startCountings : function(){

			setInterval(
				()=>{
					if(this.state.counts<10){
						this.setState({counts : this.state.counts+1});
					}else{
						alert("Fight Fight Fight");}
					}
				,1000)

	},
	connectedFB : function(){
		FB.getLoginStatus(function(res){connected = res});
		this.setState({counts : this.state.counts , connected : connected.status})
	},
   render() {
      return (
         <div>

         {this.state.connected == "success"}   <BabaCounter counts={this.state.counts} startCountings={this.startCountings} connectedFB = {this.connectedFB}></BabaCounter>
         </div>
      );
   }
})

export default App;
