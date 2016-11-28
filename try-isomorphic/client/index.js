/*
  client/index.js
*/

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
// import Container from '../common/components/Container'
import App from '../common/components/App'
import store from '../common/store'
/*
const btntext = 'Save This Idea';
const placeholderTxt = 'I got one idea here ... ';
*/
ReactDOM.render(
  // <Container btnText={btntext} placeholderText={placeholderTxt} list={store.getState().displayList} />
  // ,document.querySelector('.react-container')
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('RootElement')
);

