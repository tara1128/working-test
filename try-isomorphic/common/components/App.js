/*
  common/components/App.js
*/

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { displayAll, addItem, delItem, changeAuthor } from '../actions'

import Container from './Container'
import store from '../store'

const buttonText = 'Save Idea';
const plhText = 'I got one excellent idea here !';

let mapStateToProps = (state) => {
  return {
    btnText: buttonText,
    placeholderText: plhText,
    list: store.getState().modifiedList
  }
}

const App = connect(mapStateToProps)(Container)

export default App
