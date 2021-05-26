import React, { Component } from 'react'
import ParticleEffect from '../Effects/ParticleEffect';
import Introduction from './Introduction';
import DashboardLink from './DashboardLink';
import Navigation from './Navigation';

export default class Landing extends Component {
  render() {
    return (
      <div className="fh gradient">
        <Navigation />
        <DashboardLink />
        <ParticleEffect />
        <Introduction />
      </div>
    )
  }
}
