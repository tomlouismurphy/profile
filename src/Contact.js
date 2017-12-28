import React, { Component } from 'react';
import './App.css';
import './Contact.css';

class Contact extends Component {
	render(){
		return(
			<div id="contact-info">
				<h1>Tom Murphy</h1>
				<h4>tom.louis.murphy@gmail.com</h4>
				<a href="https://github.com/tomlouismurphy"><img className="image-icon" src="/github-512.png" /></a>
				<a href="https://www.linkedin.com/in/tom-louis-murphy/"><img className="image-icon" src="linkedin-3-512.png" /></a>
			</div>
		)
	}
}

export default Contact;