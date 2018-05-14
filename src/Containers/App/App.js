import React, { Component } from 'react';
// import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
// import { showContent, hideContent } from '../../Redux/coreReducer';
// import logo from './logo.svg';
import './App.css'
import LeftLayout from '../LeftLayout/LeftLayout.jsx';
import RightLayout from '../RightLayout/RightLayout.jsx';

export class App extends Component {

  // _renderContent = () => {
  //   const { isVisible } = this.props;

  //   if (isVisible) {
  //     return (
  //       <p>
  //         BURILLOT
  //       </p>
  //     );
  //   }
  //   return null;
  // }

  render() {
    // const { showContent, hideContent } = this.props;

    return (
      <div className="app">
        <LeftLayout />
        <RightLayout />
      </div>
    );
  }
}

App.propTypes = {
  // isVisible: PropTypes.bool,
  // showContent: PropTypes.func,
  // hideContent: PropTypes.func,
};

// const mapStateToProps = (state, ownProps) => ({
//   isVisible: state.coreReducer.isVisible,
// });

// const mapDispatchToProps = {
//   showContent,
//   hideContent,
// };

// const AppContainer = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(App);

// export default AppContainer;
export default App;
