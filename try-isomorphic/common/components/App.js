/*
  common/components/App.js
*/

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { displayAll, addItem, delItem, changeAuthor } from '../actions'

import Container from './Container'
import store from '../store'

const btntext = 'Save Idea';
const placeholderTxt = 'I got one excellent idea here !';

const App = () => {
  <Container btnText={btntext} placeholderText={placeholderTxt} list={store.getState().displayList} />
}

const mapStateToProps = (state) => {
  return {
    btnText:
    placeholderText:
    list:
  }
}

const App = connect(mapStateToProps)(Container)

export default App
