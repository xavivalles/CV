import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './RightLayout.css';
import Content from '../Content/Content.jsx';
import Footer from '../Footer/Footer.jsx';

export class RightLayout extends Component {
  render() {
    return (
      <div className="rightLayout">
        <Content />
        <Footer />
      </div>
    );
  }
}

RightLayout.propTypes = {

};

export default RightLayout;
