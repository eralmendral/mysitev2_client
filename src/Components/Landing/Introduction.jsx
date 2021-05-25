import React, { Component } from 'react'
import './Introduction.scss';
import TypingEffect from '../Effects/TypingEffect';
import resume from '@Assets/resume.pdf';

export default class Introduction extends Component {
  render() {
    return (
      <div className="landingText">
        <TypingEffect />
        <div className="landingUrls">
          <ul>
            <li><a href="https://github.com/eralmendral" rel="noopener noreferrer" target="_blank">Github</a></li>
            <li><a href="https://www.linkedin.com/in/eric-almendral-6a13371aa/" rel="noopener noreferrer" target="_blank">Linkedin</a></li>
            <li><a href={resume} rel="noopener noreferrer" target="_blank">Resume</a></li>
          </ul>
        </div>
      </div>
    )
  }
}
