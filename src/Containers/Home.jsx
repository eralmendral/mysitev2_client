import React, { Component } from 'react'

import Landing from '../Components/Landing/Landing';
import ProjectList from '../Components/Projects/ProjectList';
import Experience from '../Components/Experience/Experience';
import Skills from '../Components/Skills/Skills';
import Contact from '../Components/Contact/Contact';


export default class Home extends Component {
  render() {
    return (
      <div className="homepage">
        <Landing />
        <ProjectList />
        <Experience />
        <Skills />
        <Contact />
      </div>
    )
  }
}
