import React, { Component } from 'react';

class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <header id='home'>
        <div className='row banner'>
          <div className='banner-text'>
            <h1 className='responsive-headline'>Hi! I'm {resumeData.name}.</h1>
            <h3>
              I am a {resumeData.role}.<br />
              {resumeData.roleDescription}
            </h3>
            <hr />
            <ul className='social'>
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
                <a href='https://www.facebook.com/' >
                  <i className='fa fa-facebook' />
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
