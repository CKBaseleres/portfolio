import React, {Component} from 'react';
import profilepic from './IMAGE1.jpg'

class About extends Component {
	render() {
		return(
			<section id="about">
				<div className="row">
					<div className="three columns">
						<img className="profile-pic" src={ profilepic } alt="" />
					</div>
					<div className="nine columns main-col">
						<h2>About Me</h2>
						<p>I have finished my Information Technology degree in Polytechnic University of the Philippines - San Juan Campus and ready to start my professional career as a Web Developer.</p>
						<h2>Contact Details</h2>
						<p>Carl Keneth Baseleres
							<br/>Pasay City, Philippines
							<br/>+63 915 863 6726
						</p>
						<p></p>

					</div>
				</div>
			</section>
		)
	}
}

export default About;