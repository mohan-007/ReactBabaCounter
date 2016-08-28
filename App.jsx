import React from 'react';
import BabaCounter from './components/BabaCounter.jsx'

var App = React.createClass ({
	getInitialState : function(){
		return {
			counts : 1
		}
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
   render() {
      return (
         <div>
            <BabaCounter counts={this.state.counts} startCountings={this.startCountings}></BabaCounter>
         </div>
      );
   }
})

export default App;