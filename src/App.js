import React, { Component } from 'react';
import Intro from './Intro.js';
import Nav from './Nav.js';
import Homeimage from './Homeimage.js';
import About from './About.js';
import Project from './Project.js';
import Skills from './Skills.js';
import Theater from './Theater.js';
import Contact from './Contact.js';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      home: true,
      aboutMe: false,
      projects: false,
      skills: false,
      theater: false,
      contact: false
    }
  }
  selectAboutMe = () => {
    const state = this.state;
    state.home = false;
    state.aboutMe = true;
    state.projects = false;
    state.skills = false;
    state.theater = false;
    state.contact = false;
    this.setState(state);
  }
  selectProjects = () => {
    const state = this.state;
    state.home = false;
    state.aboutMe = false;
    state.projects = true;
    state.skills = false;
    state.theater = false;
    state.contact = false;
    this.setState(state);
  }
  selectSkills = () => {
    const state = this.state;
    state.home = false;
    state.aboutMe = false;
    state.projects = false;
    state.skills = true;
    state.theater = false;
    state.contact = false;
    this.setState(state);
  }
  selectTheater = () => {
    const state = this.state;
    state.home = false;
    state.aboutMe = false;
    state.projects = false;
    state.skills = false;
    state.theater = true;
    state.contact = false;
    this.setState(state);
  }
  selectContact = () => {
    const state = this.state;
    state.home = false;
    state.aboutMe = false;
    state.projects = false;
    state.skills = false;
    state.theater = false;
    state.contact = true;
    this.setState(state);
  }
  render() {
    return (
      <div className="App">
        <div className="Header">
          <Nav selectAboutMe={this.selectAboutMe} selectSkills={this.selectSkills} selectProjects={this.selectProjects} selectTheater={this.selectTheater} selectContact={this.selectContact}/>
        </div>
        <div>
          <Intro />
          {this.state.home ? <Homeimage /> : ''}
          {this.state.aboutMe ? <About /> : ''}
          {this.state.projects ? <Project /> : ''}
          {this.state.skills ? <Skills /> : ''}
          {this.state.theater ? <Theater /> : ''}
          {this.state.contact ? <Contact /> : ''}
        </div>
      </div>
    );
  }
}

export default App;
