import React, { Component } from 'react';
import ComponentHeader from './js/header';
import ComponentBodyContent from './js/bodycontent';
import ComponentFooter from './js/footer';
import './js/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ComponentHeader />
        <ComponentBodyContent />
        <ComponentFooter />
      </div>
    );
  }
}

export default App;
