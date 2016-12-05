/*
  common/components/App.js
*/

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import store from '../store'
import Container from './Container'

let initList = [];

/**
  Two flows of data:
  1: database -> server -> renderToString -> reduxData -> window;
  2: reducer's initState -> store.getState().
**/

if( window.STATE_FROM_SERVER.length ) {
  initList = window.STATE_FROM_SERVER; /* One flow of data */
} else {
  initList = store.getState(); /* The other flow of data */
}

let mapStateToProps = (state) => {
  return {
    btnText: 'Save the Idea',
    placeholderText: 'I got one excellent idea here !',
    list: initList
  }
}

const App = connect(mapStateToProps)(Container)

export default App
