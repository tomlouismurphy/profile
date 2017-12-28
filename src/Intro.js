import React, { Component } from 'react';
import './App.css';
import './Intro.css';

class Intro extends Component {
	render(){
		return(
			<div className="intro">
				<p>My name is <span id="name">Tom Murphy</span>. I work as a web developer, actor, teacher, researcher, and editor in the City of Chicago.</p>
				<br/>
				<p>Please click any of the links above for more information on me and my work.</p>
			</div>
		)
	}
}

export default Intro;