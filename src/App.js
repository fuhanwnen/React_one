import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import ComponentHeader from './js/header';
import ComponentBodyContent from './js/bodycontent';
import ComponentFooter from './js/footer';
import './js/App.css';

export default class App extends Component {
  constructor() {
      super();
      this.state = {
        userid:11,
        username:'kapa'
      }
  }

  render() {
    return (
      <div className="App">
        <ComponentHeader />
        <ComponentBodyContent  userid={this.state.userid} username={this.state.username}/>
        <ComponentFooter />
      </div>
    );
  }
}
