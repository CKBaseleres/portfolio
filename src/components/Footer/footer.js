import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className='row'>
          <div className='twelve columns'>
            <ul className='social-links'>
              <li>
                <a
                  href='https://www.linkedin.com/in/carl-keneth-baseleres-782642131'
                  target='blank'>
                  <i className='fa fa-linkedin' />
                </a>
              </li>
              <li>
                <a href='https://github.com/CKBaseleres' target='blank'>
                  <i className='fa fa-github' />
                </a>
              </li>
              {/* <li>
								<a href="https://www.facebook.com/">
									<i className="fa fa-facebook"></i>
								</a>
							</li> */}
            </ul>
            <ul className='copyright'>
              © Copyright 2019 Carl Keneth Baseleres
            </ul>
          </div>
        </div>
        <div id='go-top'>
          <a className='smoothscroll' title='Back to Top' href='#home'>
            <i className='icon-up-open' />
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;
