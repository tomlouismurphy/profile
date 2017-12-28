import React, { Component } from 'react';
import './App.css';
import './Skills.css';

class Skills extends Component {
	render(){
		return(
			<div id="skill-list">
				<h3>Skills</h3>
				<h5>Languages</h5>
				<p>HTML5, CSS3, JavaScript, Ruby, Python</p>
				<h5>Front-End Frameworks/Libraries</h5>
				<p>React.js, AngularJS, Bootstrap, Materialize, jQuery, Socket.io</p>
				<h5>Back-End Technologies</h5>
				<p>Rails, Sinatra, Django, pandas, Node.js, Express</p>
				<h5>Databases</h5>
				<p>PostgreSQL, MongoDB</p>
				<h5>Testing Frameworks</h5>
				<p>Mocha, Chai, Jest</p>
				<h5>Misc.</h5>
				<p>Git/GitHub, Gulp, Heroku</p>
			</div>
		)
	}
}

export default Skills;