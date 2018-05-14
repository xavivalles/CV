import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ButtonToolbar from 'react-bootstrap/es/ButtonToolbar';
import Button from 'react-bootstrap/es/Button';
import './Footer.css'

export class Footer extends Component {

  render() {
    return (
      <div className="footer">
        <div className="footerContainer">
          <ButtonToolbar bsClass="buttonContainer">
            <Button bsStyle="primary" bsSize="large" bsStyle="buttonStyle" active>
              <a href="mailto:xvv1988@gmail.com">xvv1988@gmail.com</a>
            </Button>
            <Button bsStyle="primary" bsSize="large" bsStyle="buttonStyle" active>
              <a href="https://www.linkedin.com/in/xavier-vall%C3%A8s-vicedo-658a0b83/" target="_blank">Linkedin</a>
            </Button>
            <Button bsStyle="primary" bsSize="large" bsStyle="buttonStyle" disabled>
              GitHub
          </Button>
          </ButtonToolbar>
        </div>
      </div>
    );
  }
}

Footer.propTypes = {

};

export default Footer;
