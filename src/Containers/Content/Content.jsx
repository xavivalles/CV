import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Content.css';
import Presentation from '../../Components/Presentation/Presentation.jsx';
import Weapons from '../../Components/Weapons/Weapons.jsx';
import Experiences from '../../Components/Experiences/Experiences.jsx';
import Enterprises from '../../Components/Enterprises/Enterprises.jsx';

export class Content extends Component {
  render() {
    return (
      <div className="content">
        <Presentation />
        <Weapons />
        <Experiences />
        <Enterprises />
      </div>
    );
  }
}

Content.propTypes = {

};

export default Content;
