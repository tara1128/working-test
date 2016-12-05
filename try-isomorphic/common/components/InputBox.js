/*
  common/components/InputBox.js
*/

import React, { Component, PropTypes } from 'react'
import { addItem, delItem } from '../actions'
import store from '../store'
import generateID from '../../server/controllers/generateID'

class InputBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      warning: ''
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
    if ( !text ) {
      this.popWarning( 'Please enter something !' );
      return;
    } else {
      let newItem = {
        id: generateID(3),
        content: text,
        date: time,
        sta: 1
      };
      this.props.updateList(newItem);
      this.setState({
        value: ''
      })
      // store.dispatch(addItem( newItem ))
    }
  }

  popWarning( info ) {
    this.setState({
      warning: info
    });
  }

  handleFocus() {
    this.setState({
      warning: ''
    });
  }

  render() {
    return (
      <div className="operation-area">
        <div className="input-box">
          <input className="inp" type="text" onChange={this.handleChange.bind(this)} onFocus={this.handleFocus.bind(this)} placeholder={this.props.placeholderText} value={this.state.value} />
        </div>
        <div className="btn-wrap">
          <a className="big-btn" onClick={this.handleClick.bind(this)}>{this.props.btnText}</a>
          <s className="warning-txt">{this.state.warning}</s>
        </div>
      </div>
    )
  }
}

InputBox.propTypes = {
  updateList: PropTypes.func.isRequired,
  placeholderText: PropTypes.string,
  btnText: PropTypes.string.isRequired
}

export default InputBox
