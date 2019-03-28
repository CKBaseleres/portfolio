import React, { Component } from 'react';

class Footer extends Component {
	render(){
		return(
			<footer>
				<div className="row">
					<div className='twelve columns'>
						<ul className='social-links'>
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
						<ul className='copyright'>
							© Copyright 2019 Carl Keneth Baseleres
						</ul>
					</div>
				</div>
				<div id="go-top">
					<a className="smoothscroll" title="Back to Top" href="#home">
						<i className='icon-up-open'></i>
					</a>
				</div>
			</footer>
		)
	}
}

export default Footer;