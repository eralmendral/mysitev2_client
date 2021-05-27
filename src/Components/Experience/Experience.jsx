import React , { useEffect }from 'react'
import { connect } from 'react-redux';
import Timeline from '@Components/Effects/Timeline';
import SectionContainer from '@Containers/SectionContainer/SectionContainer';
import { selectExperienceList, selectExperienceLoading } from '@Redux/experience/selectors'


const Experience = ({ experience }) => {
  useEffect(() => {
    {Object.keys(experience).map((key, i) => {
     console.log('debug title:', experience[key]['title']);
    })}
}, [])

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