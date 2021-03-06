import React from 'react';
import Particles from 'react-particles-js';

const ParticleEffect = () => (
	<Particles
		style={{ position: 'absolute' }}
		params={{
			"particles": {
				"number": {
					"value": 220,
					"density": {
						"enable": false
					}
				},
				"color": {
					"value": "#d11b43"
				},
				"size": {
					"value": 2,
					"random": true,
					"anim": {
						"speed": 4,
						"size_min": 2
					}
				},
				"line_linked": {
					"enable": false
				},
				"move": {
					"random": true,
					"speed": 1,
					"direction": "top",
					"out_mode": "out"
				}
			},
			"interactivity": {
				"events": {
					"onhover": {
						"enable": true,
						"mode": "bubble"
					},
					"onclick": {
						"enable": true,
						"mode": "repulse"
					}
				},
				"modes": {
					"bubble": {
						"distance": 250,
						"duration": 2,
						"size": 0,
						"opacity": 0
					},
					"repulse": {
						"distance": 400,
						"duration": 4
					}
				}
			}
		}} />
)

export default ParticleEffect;