import React from 'react'
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function DashboardLink() {
  return (
    <Link to="/login" className="dashboardLink">
    <Tooltip title="Login">
      <IconButton color="secondary" aria-label="Login" size="medium">
        <AccountCircleIcon size="medium" />
      </IconButton>
    </Tooltip>
    </Link>
  )
}

export default DashboardLink
