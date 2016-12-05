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
import { Users, List } from '../db'

export default async (ctx) => {

  let initList = [];

  List.find({where: {id: config.firstItemID}}).then(function( data ){
    if ( data ) {
      initList.push( data.dataValues );
      console.log('DB has data for server controllers to render !', data.dataValues, initList );
    } else {
      console.log('No data from List in DB!');
      initList = store.getState().dataList;
    }
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
