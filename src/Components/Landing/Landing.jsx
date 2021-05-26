import React, { Component } from 'react'
import ParticleEffect from '../Effects/ParticleEffect';
import Introduction from './Introduction';
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
export default class Landing extends Component {
  render() {
    return (
      <div className="fh gradient">
        <Link to="/login" className="dashboardLink">
          <Tooltip title="Login">
            <IconButton color="secondary" aria-label="Login" size="large">
              <AccountCircleIcon fontSize="medium" />
            </IconButton>
          </Tooltip>
        </Link>
        <ParticleEffect />
        <Introduction />
      </div>
    )
  }
}
