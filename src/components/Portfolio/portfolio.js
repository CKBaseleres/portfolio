import React, { Component } from 'react';
import Particles from 'react-particles-js';
import './style.css';
import FaceDet from './face-detect.jpg';

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
								{/* <Particles
									className="particles" params={particleOptions}
								>	 */}
								<div className="columns portfolio-item">
									<a href="https://face-detect.netlify.com/">
										<img alt="test" src={FaceDet} /> 
											<div className="overlay">
												<div className="portfolio-item-meta">
													<h4>Face Detect</h4>
													<p>React.js, Express.js, Postgresql, Clarifai API</p> 
												</div>
											</div>
										{/* </img> */}
									</a>
								</div>	
								{/* </Particles> */}
							</div>
						</div>
					</div>
				</section>
		)
	}
}

export default Portfolio;