import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Style from './style.css';

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
			<section id="portfolio">
				<div className="bg">
					<Particles
						className="particles" params={particleOptions}
					/>
					<h3>Things I have created</h3>
				</div>
			</section>
		)
	}
}

export default Portfolio;