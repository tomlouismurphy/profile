import React, { Component } from 'react';
import './App.css';
import './Homeimage.css';

class Homeimage extends Component {
	render(){
		return(
			<div className="image-carrier">
				<img src="/worldmap.jpg" alt="Map" />
			</div>
		)
	}
}

export default Homeimage;