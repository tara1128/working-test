/*
  client/index.js
*/

console.log('client/index.js runs ... ... ');

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import '../common/styles/main.less'
import BigButton from '../common/components/bigButton'

const btntext = 'Add a Post';
ReactDOM.render(
  <BigButton btnText={btntext}/>
  ,document.querySelector('.react-container')
)
