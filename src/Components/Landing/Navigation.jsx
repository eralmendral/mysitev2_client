import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll';

import './Navigation.scss';


function Navigation() {
  return (
    <div className="navigation-container">
      <div className="navigation">
        <div className="dot-container">
          <div className="vertical-line"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>

        <div className="navigation-links">
        <h2>
          <AnchorLink className="nav-link" href='#projects'>Projects</AnchorLink>
        </h2>
        <h2>
          <AnchorLink className="nav-link" href='#experience'>Experience</AnchorLink>
        </h2>
        <h2>  <AnchorLink className="nav-link" href='#skills'>Skills</AnchorLink></h2>
      </div>
      </div>
    </div>
  )
}

export default Navigation
