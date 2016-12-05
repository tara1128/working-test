/*
  server/controllers/updateListController.js
*/

import React from 'react'
import { RouterContext } from 'react-router'
import { renderToString } from 'react-dom/server'
import { List } from '../db'
import config from '../../common/config'
import Container from '../../common/components/Container'

export default async (ctx, next) => {
  let _url = ctx.path;
  let _req = ctx.req;
  let initList = [1,2,3];
  console.log('In updateListController.js', ctx );
  // return 10101148; // What returns here, is what client get in 'http.responseText'.
  return ctx.render('res', {
    test: 'Hi are you ok?'
  })
  /*
  List.create({
  }).then(function(data){
  }).catch(function(err){
  });
  */
}
