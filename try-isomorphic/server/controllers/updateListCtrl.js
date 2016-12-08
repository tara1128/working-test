/*
  server/controllers/updateListCtrl.js
*/

import React from 'react'
import { RouterContext } from 'react-router'
import { renderToString } from 'react-dom/server'
import { _List } from '../db'
import config from '../../common/config'
import Container from '../../common/components/Container'

export default async (ctx, next) => {
  let _url = ctx.path;
  let _req = ctx.request;
  let _item = _req.body;
  _List.create(_item).then(function(data){
    console.log('Insert an item into List! ', data.dataValues);
    _List.findAll().then(function(datas){
      for ( let p in datas ) {
        console.log('After inserting an item! ', datas[p].dataValues );
      }
    }).catch(function(err){
      console.log('Error after inserting an item');  
    })
  }).catch(function(err){
    console.log('Failed in db operation! ', err);
  });
}
