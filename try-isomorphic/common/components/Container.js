/*
  common/components/Container.js
*/

import React, { Component, PropTypes } from 'react'
import '../styles/reset.css'
import '../styles/main.less'
import Input from './InputBox'
import List from './List'

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className="container">
        <h3>Input your ideas right now, make life better!</h3>
        <Input placeholderText={this.props.placeholderText} btnText={this.props.btnText} />
        <List dataList={this.props.list} />
      </div>
    )
  }
}

Container.propTypes = {
  btnText: PropTypes.string.isRequired,
  placeholderText: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired
}

export default Container
