import React, { Component } from 'react';
import Header from './components/Header/header';
import About from './components/About/about';
import Resume from './components/Resume/resume';
import Portfolio from './components/Portfolio/portfolio';
// import Testimonials from  './components/testimonials/testimonials';
// import ContactUs from './components/contactus/contactus';
import Footer from './components/Footer/footer';
import resumeData from './resumeData';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header resumeData={resumeData} />
        <About />
        <Resume />
        <Portfolio />
        {/*<Testimonials />
        <ContactUs />*/}
        <Footer />
      </div>
    );
  }
}

export default App;
