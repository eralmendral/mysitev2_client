import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import GitHubIcon from '@material-ui/icons/GitHub';
import StarIcon from '@material-ui/icons/Star';
import SchoolIcon from '@material-ui/icons/School';
import moment from 'moment';
import './Timeline.scss'

function Timeline({ experiences }) {


  const renderIcon = (type) => {
    if (type === "education") {
      return <SchoolIcon />
    }
    return <GitHubIcon />
  }

  const renderContentStyle = (key) => {
    let contentStyle = { background: '#735a3c', color: '#fff' };
    if ((key % 2) === 0) {
      contentStyle = { background: '#e63c69', color: '#fff' };
    }
    return contentStyle;
  }

  const arrowStyle = (key) => {
    let arrowStyle = { borderRight: '7px solid #735a3c' };
    if ((key % 2) === 0) {
      arrowStyle = { borderRight: '7px solid #e63c69' };
    }
    return arrowStyle;
  }

  const renderIconStyle = (type) => {
    let iconStyle = { background: '#8f7842', color: '#fff' }

    if (type === "education") {
      iconStyle = { background: '#b50e3b', color: '#fff' }
    }
    return iconStyle;
  }


  const renderExperienceTasks = (tasks) => {
    if (tasks && tasks.length > 0) {
      return (
        tasks.map((task, i) => (
          <p key={i}>- {task}</p>
        ))
      )
    }
  }

  return (
    <div>
      <VerticalTimeline>
        {Object.keys(experiences).map((key, i) => {
          const dateFrom = moment(experiences[key]['date_from'].toDateString()).format('MMM-YYYY');
          const dateTo = experiences[key]['date_to'] === 'Present' ? 'Present' : moment(experiences[key]['date_to'].toDateString()).format('MMM-YYYY');
          return <VerticalTimelineElement
            key={i}
            className="vertical-timeline-element--work timeline-card"
            contentStyle={renderContentStyle(i + 1)}
            contentArrowStyle={arrowStyle(i + 1)}
            date={`${dateFrom} - ${dateTo}`}
            iconStyle={renderIconStyle(experiences[key]['type'])}
            icon={renderIcon(experiences[key]['type'])}     >
            <h3 className="vertical-timeline-element-title">{experiences[key]['title']}</h3>
            <h5 className="vertical-timeline-element-subtitle">{experiences[key]['company']}</h5>
            <div className="tasks">
              {renderExperienceTasks(experiences[key]['tasks'])}
            </div>

          </VerticalTimelineElement>
        })}

        <VerticalTimelineElement
          iconStyle={{ background: '#8f7842', color: '#fff' }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </div>
  )
}

export default Timeline
