import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/es/Image';
import './LeftLayout.css';
import image from './Xavi.jpg';

export class LeftLayout extends Component {
  render() {
    return (
      <div className="leftLayout">
        <div className="imageStyle" >
          <Image src={image} responsive />
        </div >
      </div >
    );
  }
}

LeftLayout.propTypes = {

};

export default LeftLayout;
