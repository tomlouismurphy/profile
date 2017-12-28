import React, { Component } from 'react';
import './App.css';
import './About.css';

class About extends Component {
	render(){
		return(
			<div className="description">
				<h3>About Me</h3>
				<img src="/MurphyPicture.jpg" alt="MyPicture"/>
				<p>I've created content as a writer for platforms 
				from social media to the Chicago stage, and I've 
				managed research projects for clients from the 
				construction industry to the educational sector. 
				As a trained full stack web developer, I synthesize 
				all these experiences into a thorough, empathetic, 
				and detail-oriented mindset for solving problems 
				of all shapes and sizes.</p>
				<br/>
				<p>I'm experienced in front-end, back-end, and data-heavy
				coding. More information on my completed work and my
				experience can be found in the Projects and Skills sections.</p>
			</div>
		)
	}
}

export default About;