import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Experiences.css';

export class Experiences extends Component {
  render() {
    return (
      <div className="experiences">
        <p>My Experience</p>
        <div className="experienceRow">
          <div className="experienceTime" > 2017 - Actually </div>
          <div className="experienceDescription">
            <div className="description" > <b>TRAVELPORT</b> - I was developing microservices to Rail Project and I am developing the Marketplace Web.</div>
            <div className="technologies">.NET - .NET CORE - JAVASCRIPT - CSS - ES6+ - REACTJS - SQL</div>
          </div>
        </div>
        <div className="experienceRow">
          <div className="experienceTime" > 2015 - 2017 </div>
          <div className="experienceDescription">
            <div className="description" > <b>VUELING</b> - I was developing front-end and back-end projects.</div>
            <div className="technologies">.NET - JAVASCRIPT - SQL</div>
          </div>
        </div>
        <div className="experienceRow">
          <div className="experienceTime" > 2014 - 2015 </div>
          <div className="experienceDescription">
            <div className="description" > <b>ACCENTURE</b> - I was working with Microsoft Projects.</div>
            <div className="technologies">JAVASCRIPT - HTML5 - CSS3 - SQL</div>
          </div>
        </div>
      </div >
    );
  }
}

Experiences.propTypes = {

};

export default Experiences;
