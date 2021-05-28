import React, { Component } from 'react'
import './Introduction.scss';
import TypingEffect from '../Effects/TypingEffect';
import resume from '@Assets/resume.pdf';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import DescriptionIcon from '@material-ui/icons/Description';
import Tooltip from '@material-ui/core/Tooltip';
export default class Introduction extends Component {
  render() {

    return (
      <div className="landingText">
        <TypingEffect />
        <div className="landingUrls">
          <ul>
            <li>
              <a href="https://github.com/eralmendral" target="_blank" >
                <Tooltip title="Github">
                  <IconButton color="secondary" aria-label="Github">
                    <GitHubIcon  style={{ fontSize: '34px' }}/>
                  </IconButton>
                </Tooltip>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/eric-almendral-6a13371aa/" rel="noopener noreferrer" target="_blank">
                <Tooltip title="LinkedIn">
                  <IconButton color="secondary" aria-label="LinkedIn">
                    <LinkedInIcon style={{ fontSize: '42px' }} />
                  </IconButton>
                </Tooltip>
              </a>
            </li>
            <li>
              <a href={resume} rel="noopener noreferrer" target="_blank">
                <Tooltip title="Resume">
                  <IconButton color="secondary" aria-label="Resume">
                    <DescriptionIcon  style={{ fontSize: '38px' }}/>
                  </IconButton>
                </Tooltip>
              </a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
