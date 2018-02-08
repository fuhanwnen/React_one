import React from 'react';
/*import ReactDOM from 'react-dom';*/
import './App.css';

export default class ComponentHeader extends React.Component{
  constructor(props) {
      super(props);
      this.state = {
        logo: 'https://gw.alicdn.com/tfs/TB1MgGBnvDH8KJjy1XcXXcpdXXa-16-16.ico'
      }
  }

  render() {
    return(
      <header className="App-header">
        <img src={this.state.logo} className="App-logo" alt="logo" />
        <h1 className="App-title">My name is fuhanwen</h1>
        {/*<h2 className="App-title">This is my resume.</h2>*/}
        <h2 className="App-title">This is my first practice</h2>
      </header>
    )
  }
}
