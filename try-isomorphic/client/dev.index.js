/*
  client/dev.index.js

console.log('client/index.js is working, module.hot ===> ', module.hot );

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Container from '../common/components/Container'

if( module.hot ) { 
  module.hot.accept();
  const btntext = 'Save This Idea';
  const placeholderTxt = 'I got one idea here ... ';
  ReactDOM.render(
    <Container btnText={btntext} placeholderText={placeholderTxt} />
    ,document.querySelector('.react-container')
  );
}
*/
