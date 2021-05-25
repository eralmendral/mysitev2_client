import React, { Component } from 'react'
import ParticleEffect from '../Effects/ParticleEffect';
import Introduction from './Introduction';

export default class Landing extends Component {
  render() {
    return (
      <div className="fh gradient">
        <ParticleEffect />
        <Introduction />
      </div>
    )
  }
}
