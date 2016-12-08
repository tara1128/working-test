/*
  common/components/DBInit.js
*/

import React, { Component, PropTypes } from 'react'

class DBInit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  handleClick() {
    console.log('Init db!');
  }

  render() {
    return (
      <a onClick={this.handleClick.bind(this)}>Initialize Database</a>
    )
  }

}

DBInit.propTypes = {
}

export default DBInit
