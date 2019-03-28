import React, {Component} from 'react';

class Header extends Component {
	render() {
		let resumeData = this.props.resumeData;
		return (
			<header id="home">
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
								<a href="https://www.github.com/">
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