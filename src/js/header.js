import React from 'react';
/*import ReactDOM from 'react-dom';*/
import './App.css';

export default class ComponentHeader extends React.Component{
  render() {
    return(
      <header className="App-header">
        <img src='https://gw.alicdn.com/tfs/TB1MgGBnvDH8KJjy1XcXXcpdXXa-16-16.ico' className="App-logo" alt="logo" />
        <h1 className="App-title">My name is fuhanwen</h1>
        <h2 className="App-title">This is my resume.</h2>
      </header>
    )
  }
}
