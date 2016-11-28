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

const btntext = 'Add An Idea';
const placeholderTxt = 'Please Enter Something Here ... ';

export default async (ctx) => {
  return ctx.render('index', {
    title: config.title,
    desc: config.description,
    app: renderToString(
      <Container btnText={btntext} placeholderText={placeholderTxt} list={store.getState().displayList} />
    ),
    reduxData: store.getState().displayList
  })
}
