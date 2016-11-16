/*
  common/components/bigButton.jsx
*/

import React, { Component, PropTypes } from 'react'
import { Menu, Icon } from 'antd'
import { Link } from 'react-router'
import '../styles/btn.less'

const BigButton = ({btnText}) => (
  <div className='btn-wrapper'>
    <button className='big-btn'>{btnText}</button>
  </div>
)

BigButton.propTypes = {
  btnText: PropTypes.string.isRequired  
}

export default BigButton
