import React, { Component } from 'react';
import './App.css';
import './Project.css';

class Project extends Component {
	render(){
		return(
			<div id="projects">
					<div>
						<h3 className="project-header">Casey at Bat</h3>
							<img className="img-responsive" src="casey.png" />
							<br/>
							<p>This full stack application consists of a baseball simulation of famous bottom of the ninth inning scenarios in baseball history, which allows users to see shifts in win probabilities based off of at-bat results and based off of substitutions of players and pitchers. It uses a responsive front-end built in AngularJS and is coded on the server side with the Python framework Django.</p>
							<br/>
							<p>Developed using: AngularJS, PostgreSQL, Python, Django, HTML, CSS</p>
							<a href="https://github.com/tomlouismurphy/casey_frontend"><p>On GitHub: Front-End</p></a>
							<a href="https://github.com/tomlouismurphy/casey_backend"><p>On GitHub: Back-End</p></a>
					</div>
					<div>
						<a href="https://disneyvault.herokuapp.com/"><h3 className="project-header">DVDb</h3>
							<img className="img-responsive" src="MagickedScreenshot.png" /></a>
							<br/>
							<p>This full stack web app allows users to create personal accounts to track and share their interest in a variety of popular international fandoms. It aspires toward the comprehensive information of a wiki database, the friendly community of a message board, and the neatly categorized and interlocked facts of a library.</p>
							<br/>
							<p>Developed using: Node.js, MongoDB, Express, Gulp, EJS</p>
							<a href="https://github.com/tomlouismurphy/mediafranchiseapp"><p>On GitHub</p></a>
					</div>
					<div>
						<a href="https://tomlouismurphy.github.io/guillotine/"><h3 className="project-header">Guillotine</h3>
							<img className="img-responsive" src="/guillotinescreenshot.png" /></a>
							<br/>
							<p>Inspired by a popular 1990s card game, this two-player in-browser game pits two players against each other to see which of them can collect the most nobles in a cartoonish, slapstick, French Revolution-inspired setting. A deck of over forty unique action cards that is dealt out to each player packs the game full of twists and turns, with the fortune of each player ready to be upended at any moment.</p>
							<br/>
							<p>Developed using: JavaScript ES6, jQuery, HTML, CSS</p>
							<p><a href="https://github.com/tomlouismurphy/guillotine">On GitHub</a></p>
					</div>
			</div>
		)
	}
}

export default Project;