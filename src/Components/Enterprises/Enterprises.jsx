import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Enterprises.css';
import accenture from './Accenture.png';
import vueling from './Vueling.png';
import travelport from './Travelport.png';

export class Enterprises extends Component {
  render() {
    return (
      <div className="enterprises">
        <img src={accenture} className={`logo accenture`} alt="logo" />
        <img src={vueling} className={`logo vueling`} alt="logo" />
        <img src={travelport} className={`logo travelport`} alt="logo" />
      </div>
    );
  }
}

Enterprises.propTypes = {

};

export default Enterprises;
