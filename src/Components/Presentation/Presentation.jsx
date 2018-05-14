import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/es/Modal';
import Button from 'react-bootstrap/es/Button';
import './Presentation.css';
import fullet from './fulletTortuga.gif'

export class Presentation extends Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
  }

  handleClick = () => this.setState({ visible: !this.state.visible });

  showModal(){
    return (
      <Modal show={this.state.visible} onHide={this.handleClick} >
        <Modal.Header closeButton>
          <Modal.Title>Le vulve</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <img src={fullet} alt="fullet" />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.handleClick}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  render() {
    console.log(this.state.visible);
    return (
      <div className="presentation">
        <h1>I'm Xavier.</h1>
        <h2>I'm a full-stack developer.</h2>
        <h2>In back-end I have worked on .NET & .NET Core.</h2>
        <h2>In front-end I have worked on ReactJS.</h2>
        <div className="info" onClick={this.handleClick}>
          more...
        </div>
        {this.showModal()}
      </div>
    );
  }
}

Presentation.propTypes = {

};

export default Presentation;
