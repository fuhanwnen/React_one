import React from 'react';
import './App.css';

export default class ComponentBodyChild extends React.Component{
  constructor(props) {
      super(props);
      this.state = {
        name : 'bodychild'
      }
  }
  render() {
    return(
      <div className='bodychild'>
        <p>这个是主体body的子组件</p>
        <p>来自爷爷组件的参数: id: {this.props.userid} , name: {this.props.username}</p>
        <p>通过自组件修改父组件的age：<input type='text' onChange = {this.props.handleBodyChildChenge}/></p>
      </div>
    )
  }
}
