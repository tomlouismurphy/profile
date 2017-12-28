import React, { Component } from 'react';
import './App.css';
import './Nav.css';

class Nav extends Component {
	constructor(props){
		super(props);
		this.state = {
			test: 'test'
		}
	}
	render(){
		return(
			<nav className="container">
	            <div className="items">
	              <span className="mainNav" onClick={this.props.selectAboutMe} >About</span>
	              <span className="mainNav" onClick={this.props.selectProjects}>Projects</span>
	              <span className="mainNav" onClick={this.props.selectSkills} >Skills</span>
	              <span className="mainNav" onClick={this.props.selectTheater}>Theater Work</span>
	              <span className="mainNav" onClick={this.props.selectContact}>Contact</span>
	            </div>
        	</nav>
		)
	}
}

export default Nav;