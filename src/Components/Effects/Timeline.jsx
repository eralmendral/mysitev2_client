import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import GitHubIcon from '@material-ui/icons/GitHub';
import StarIcon from '@material-ui/icons/Star';
import moment from 'moment';

function Timeline({ experiences }) {

  const EXPERIENCE_TYPES = {
    "EDUCATION": "education",
    "WORK": "work",
    "FREELANCE": "freelance"
  }

  return (
    <div>
      <VerticalTimeline>

        {Object.keys(experiences).map((key, i) => {
          return <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date={`${moment(experiences[key]['date_from'].toDateString()).format('MM-YYYY')} - ${moment(experiences[key]['date_to'].toDateString()).format('MM-YYYY')}`}
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<GitHubIcon />}
          >
            <h3 className="vertical-timeline-element-title">{experiences[key]['title']}</h3>
            <h5 className="vertical-timeline-element-subtitle">{experiences[key]['company']}</h5>
            <div className="tasks">
              {experiences[key]['tasks'].map(task => (
                <p>{task}</p>
              ))}
            </div>

          </VerticalTimelineElement>
        })}

        {/* foreach experience pass data */}
        {/* if type === education then icon = educ else work icon */}

        <VerticalTimelineElement
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </div>
  )
}

export default Timeline
