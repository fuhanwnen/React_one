import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

export default class ComponentBodyContent extends React.Component{
  constructor(props) {
     super(props);
     this.state = {date: new Date()};
   }

   componentwillMount() {//将要加载要做的事情
     // this.timerID = setInterval(
     //   () => this.tick(),
     //   1000
     // );
   }

   componentDidMount() { //记载完要做的事情
     this.timerID = setInterval(
       () => this.tick(),
       1000
     );
   }

   componentWillUnmount() {//组件即将被移除要做的事情
    clearInterval(this.timerID);
  }

  tick() {
   this.setState({
     date: new Date() //修改数据 在获取数据 实现时钟的走动
   });
 }

  render() {
    return(
      <div className="App-intro">
        <h2>It is {this.state.date.toLocaleString()}.</h2>
      </div>
    )
  }
}
