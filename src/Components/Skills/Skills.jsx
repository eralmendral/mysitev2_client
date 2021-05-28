import React from 'react'
import SectionContainer from '@Containers/SectionContainer/SectionContainer';
import './Skills.scss';

function Skills() {
  return (
    <div id="skills">
      <SectionContainer title="Skills">
        <div className="skills-div-container">
          <div className="skills-div" id="div1">
            <h3>Frontend</h3>

          </div>
          <div className="skills-div" id="div2">
            <h3>Backend</h3>
          </div>
          <div className="skills-div" id="div3">
            <h3>Devops</h3>
          </div>
          <div className="skills-div" id="div4">
            <h3>UI/UX</h3>
          </div>
        </div>


      </SectionContainer>
    </div>
  )
}

export default Skills
