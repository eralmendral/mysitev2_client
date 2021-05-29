import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import SectionContainer from '@Containers/SectionContainer/SectionContainer'
import './Skills.scss';
import { selectSkillListFrontend, selectSkillListBackend, selectSkillListDevops, selectSkillListUiux } from '@Redux/skills/selectors'


function Skills({ frontend, backend, devops, uiux }) {
  return (
    <div id="skills">
      <SectionContainer title="Skills">
        <div className="skills-div-container">

          <div className="skills-div" id="div1">
            <h3>Frontend</h3>
            <div className="skill-list">
              {frontend.map((skill, i) => {
                return <p key={i}>- {skill.title}</p>
              })}
            </div>

          </div>
          <div className="skills-div" id="div2">
            <h3>Backend</h3>
            <div className="skill-list">
              {backend.map((skill, i) => {
                return <p key={i}>- {skill.title}</p>
              })}
            </div>
          </div>
          <div className="skills-div" id="div3">
            <h3>Devops</h3>
            <div className="skill-list">
              {devops.map((skill, i) => {
                return <p key={i}>- {skill.title}</p>
              })}
            </div>
          </div>
          <div className="skills-div" id="div4">
            <h3>UI/UX</h3>
            <div className="skill-list">
              {uiux.map((skill, i) => {
                return <p key={i}>- {skill.title}</p>
              })}
            </div>
          </div>
        </div>


      </SectionContainer>
    </div>
  )
}


const mapStateToProps = state => ({
  frontend: selectSkillListFrontend(state),
  backend: selectSkillListBackend(state),
  devops: selectSkillListDevops(state),
  uiux: selectSkillListUiux(state)
})


export default connect(mapStateToProps, null)(Skills)
