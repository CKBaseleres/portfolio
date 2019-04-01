import React, {Component} from 'react';

class Header extends Component {
	render() {
		let resumeData = this.props.resumeData;
		return (
			<header id="home">
				<nav id="nav-wrap" style="display: block;" className="opaque">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className=""><a className="smoothscroll" href="#home">Home</a></li>
            <li className=""><a className="smoothscroll" href="#about">About</a></li>
	         <li className="current"><a className="smoothscroll" href="#resume">Resume</a></li>
            <li className=""><a className="smoothscroll" href="#portfolio">Works</a></li>
            <li className=""><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
            <li className=""><a className="smoothscroll" href="#contact">Contact</a></li>
         </ul>

      </nav>
				<div className="row banner">
					<div className="banner-text">
						<h1 className="responsive-headline">Hi! I'm {resumeData.name}.</h1>
						<h3>I am a {resumeData.role}.<br/>
						{resumeData.roleDescription}
						</h3>
						<hr/>
						<ul className="social">
							<li>
								<a href="https://www.linkedin.com/in/carl-keneth-baseleres-782642131">
									<i className="fa fa-linkedin"></i>
								</a>
							</li>
							<li>
								<a href="https://github.com/CKBaseleres">
									<i className="fa fa-github"></i>
								</a>
							</li>
							<li>
								<a href="https://www.facebook.com/">
									<i className="fa fa-facebook"></i>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</header>
		)
	}
}

export default Header;