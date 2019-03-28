import React, { Component } from 'react';
import Style from './style.css';

class Resume extends Component{
	render() {
		return(
			<section id="resume">
				<div className="row education">
					<div className="three columns header-col">
						<h1><span>Education</span></h1>
					</div>
					<div className="nine columns main-col">
						<div className="row item">
							<div className="twelve columns">
								<h3>Polytechnic University of the Philippines - San Juan</h3>
								<p className="info">
									Bachelor of Science in Information Technology
									<span>•</span>
									<em className="date"> April 2019 </em>
								</p>
								<p></p>
							</div>
						</div>
						<div className="row item">
							<div className="twelve columns">
								<h3>Redeemed In Christ School</h3>
								<p className="info">
									Secondary Education
									<span>•</span>
									<em className="date"> March 2014 </em>
								</p>
								<p>Class Valedictorian</p>
							</div>
						</div>
					</div>
				</div>
				<div className="row work">
					<div className="three columns header-col">
						<h1><span>Work Experience</span></h1>
					</div>
					<div className="nine columns main-col">
						<div className="row item">
							<div className="twelve columns">
								<h3>Achieve Without Borders Inc.</h3>
								<p className="info">
									Solutions Engineer Intern
									<span>•</span>
									<em className="date"> April 2019 </em>
								</p>
								{/*Deets*/}
								<p></p>
							</div>
						</div>
					</div>
				</div>
				<div className="row skill">
					<div className="three columns header-col">
						<h1><span>Skills</span></h1>
					</div>
					<div className="nine columns main-col">
						<div className="bars">
						<ul>
							<li>
								<span className="bar-expand html5"></span>
								<em>HTML5</em>
							</li>
							<li>
								<span className="bar-expand css"></span>
								<em>CSS</em>
							</li>
							<li>
								<span className="bar-expand html5"></span>
								<em>JavaScript</em>
							</li>
							<li>
								<span className="bar-expand react"></span>
								<em>React.js</em>
							</li>
							<li>
								<span className="bar-expand express"></span>
								<em>Express.js</em>
							</li>
							<li>
								<span className="bar-expand flask"></span>
								<em>Flask(Python Web Microframework)</em>
							</li>
						</ul>
					</div>
					</div>
				</div>
			</section>
		)
	}
}

export default Resume;