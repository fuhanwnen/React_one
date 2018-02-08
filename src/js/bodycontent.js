import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import ComponentBodyChild from './componentbodychild';
import './App.css';

export default class ComponentBodyContent extends React.Component{
  constructor(props) {
     super(props);
     this.state = {
       date: new Date(),
       age: 20,
       course: 'javaScript'
     };
     this.handleBodyChildChenge = this.handleBodyChildChenge.bind(this)
     this.handleOnclickCourse = this.handleOnclickCourse.bind(this)
   }

   componentWillMount() {//将要加载要做的事情 其在render()之前被调用  //很少有用
      console.log('componentWillMount')
      this.timer = setInterval(() => {
        this.setState({
          date: new Date()
        })
      }, 1000)
   }

   componentDidMount() { //记载完要做的事情 可以做dom操作
       console.log('componentDidMount')
     this.refs.userid.style.color = 'red'
   }

   componentWillUnmount() {//组件即将被移除要做的事情
     console.log('componentWillUnmount')
  }

 handleBodyChildChenge(event) {
   this.setState({age: event.target.value})
 }

 handleOnclickCourse() {
   this.setState({course: 'html+css+js'})

 }

  render() {
    return(
      <div className="App-intro">
        <h2>It is {this.state.date.toLocaleString()}</h2>
        <p ref="userid">来自父组件的数据：用户ID: {this.props.userid} 用户名字: {this.props.username}</p>
        <p>来自本地数据：age: {this.state.age} , course: {this.state.course}</p>
        <input type='button' value='点击后修改课程' onClick = {this.handleOnclickCourse}/>
        <ComponentBodyChild {...this.props} handleBodyChildChenge = {this.handleBodyChildChenge}/>
      </div>
    )
  }
}
//默认的Props 如果父组件没有传参 就使用默认的name
ComponentBodyContent.defaultProps = {
 username: 'Stranger'
};
//http://www.css88.com/react/docs/typechecking-with-proptypes.html 查看更多的propTypes
//监听父组件的传参 必须是数字类型 不是数字类型提醒输出 isRequired:必须传参字段
ComponentBodyContent.propTypes = {
  userid: PropTypes.number.isRequired
};
