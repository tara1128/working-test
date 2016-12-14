/*
  server/controllers/homeCtrl.js
*/

import React from 'react'
import { RouterContext } from 'react-router'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import config from '../../common/config'
import Container from '../../common/components/Container'
import store from '../../common/store'
import { displayAll, addItem, delItem, changeAuthor } from '../../common/actions'
import { _Users, _List } from '../db'

export default async (ctx) => {

  let cookies = ctx.cookies;
  let session = ctx.session;

  console.log( 'COOKIES ========>>> ', cookies.get(config.sessionID) );
  console.log( 'SESSION ========>>> ', typeof session, session );

  let initList = [];

  _List.findAll().then(function( datas ){ /* return an instance of Array */
      for ( let p in datas ) {
        console.log('_List.findAll(): initList is unshifting items: ', datas[p].dataValues.content );
        initList.unshift( datas[p].dataValues );
      }
    }).catch(function(err){
      console.log('No datas from List in DB!', err);
      initList = store.getState().list;
    });

  return ctx.render('index', {
    title: config.title,
    desc: config.description,
    app: renderToString(
      <Container btnText={config.btntext} placeholderText={config.placeholderTxt} list={initList} />
    ),
    reduxData: initList 
  })
}
