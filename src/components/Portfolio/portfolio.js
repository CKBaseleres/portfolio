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
				<section className="bg" id="portfolio">
				<div className="row">
					<div className="twelve columns collapsed">
						<h3>Things I have worked on</h3>
							<div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
								<Particles
									className="particles" params={particleOptions}
								/>	
							</div>
						</div>
					</div>
				</section>
		)
	}
}

export default Portfolio;