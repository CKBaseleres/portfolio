import React, { Component } from 'react';
import Particles from 'react-particles-js';

	const particleOptions = {
		particles:{
			number: {
				value: 150,
				density: {
					enable: true,
					value_area: 800
				}
			}
		}
	}

class Portfolio extends Component {


	render() {
		return (
			<section>
				<Particles
					className="particles" params={particleOptions}
				/>
			</section>
		)
	}
}