import React, { Component } from 'react';
import Particles from 'react-particles-js';

class Portfolio extends Component {

	const params = {{
		number: {
			value: 150,
			density.enable: true,
			density.value_area: 800
		}
	}}

	render() {
		return (
			<section>
				<Particles
					params=params
				/>
			</section>
		)
	}
}