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
  2: reducer's initState -> store.getState().list
  There is 50-50 chance for each flow of data.
  To make sure they display the same, try read data from DB in reducer file.
**/

if( window.STATE_FROM_SERVER.length ) { /* Data flow 1 */
  console.log('Has window.STATE_FROM_SERVER.length !!!', window.STATE_FROM_SERVER.length);
  initList = window.STATE_FROM_SERVER;
} else { /* Data flow 2 */
  initList = store.getState().list; 
  console.log('NO window.STATE_FROM_SERVER.length ! initList ===> ', initList );
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
