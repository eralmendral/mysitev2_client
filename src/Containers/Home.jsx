import React, { Component } from 'react'

import Landing from '../Components/Landing/Landing';
import ProjectList from '../Components/Projects/ProjectList';
import Experience from '../Components/Experience';
import Skills from '../Components/Skills';
import Certifications from '../Components/Certifications';
import Contact from '../Components/Contact';


export default class Home extends Component {
  render() {
    return (
      <div className="fl w-100" >
        <Landing />
        <ProjectList />
        <Experience />

        {/* Skills */}
        <Contact />
      </div>
    )
  }
}
