import React from 'react'
import { connect } from 'react-redux';
import Timeline from '@Components/Effects/Timeline';
import SectionContainer from '@Containers/SectionContainer/SectionContainer';
import { selectExperienceList, selectExperienceLoading } from '@Redux/experience/selectors'


const Experience = ({ experience }) => {
  return (
    <div id="experience">
      <SectionContainer title="Experience" theme="dark">
        <Timeline experiences={experience} />
      </SectionContainer>
    </div>
  )
}


const mapStateToProps = (state) => ({
  experience: selectExperienceList(state),
  experienceIsFetching: selectExperienceLoading(state)
})


export default connect(mapStateToProps, null)(Experience);