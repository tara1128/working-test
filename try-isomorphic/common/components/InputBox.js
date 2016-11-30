/*
  common/components/InputBox.js
*/

import React, { Component, PropTypes } from 'react'
import { displayAll, addItem, delItem, changeAuthor } from '../actions'
import store from '../store'

class InputBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''  
    }
  }

  handleChange(e) {
    this.setState({
      value: e.target.value  
    })
  }

  handleClick() {
    let text = this.state.value;
    let time = new Date().getTime();
    console.log('Clicking: ', text, time);
    let newItem = {
      id: 2,
      content: text,
      date: time,
      sta: 1
    };
    store.dispatch(addItem( newItem ))
    store.dispatch(displayAll( store.getState().modifiedList ))
    window.localStorage.setItem('ideasAnytime_LocalList', store.getState().modifiedList );
  }

  render() {
    return (
      <div className="operation-area">
        <div className="input-box">
          <input className="inp" type="text" onChange={this.handleChange.bind(this)} placeholder={this.props.placeholderText} />
        </div>
        <div className="btn-wrap">
          <a className="big-btn" onClick={this.handleClick.bind(this)}>{this.props.btnText}</a>
          <s className="warning-txt"></s>
        </div>
      </div>
    )
  }
}

InputBox.propTypes = {
  placeholderText: PropTypes.string,
  btnText: PropTypes.string.isRequired
}

export default InputBox
