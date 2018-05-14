import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Label from 'react-bootstrap/es/Label';
import './Weapons.css';

export class Weapons extends Component {
  render() {
    return (
      <div className="weapons">
        <p>My weapons</p>
        <div className="weaponsList">
          <h3><Label bsStyle="primary">.NET</Label></h3>
          <h3><Label bsStyle="primary">.NET CORE</Label></h3>
          <h3><Label bsStyle="primary">JAVA</Label></h3>          
          <h3><Label bsStyle="warning">JAVASCRIPT</Label></h3>
          <h3><Label bsStyle="warning">HTML5</Label></h3>
          <h3><Label bsStyle="warning">CSS3</Label></h3>
          <h3><Label bsStyle="warning">ES6+</Label></h3>
          <h3><Label bsStyle="warning">REACTJS</Label></h3>
          <h3><Label bsStyle="success">SQL</Label></h3>          
        </div>
      </div>
    );
  }
}

Weapons.propTypes = {

};

export default Weapons;
