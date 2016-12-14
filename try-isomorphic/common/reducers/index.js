/*
  common/reducers/index.js
*/

import { combineReducers } from 'redux'
import { ADD_ITEM, DEL_ITEM } from '../actions'
import config from '../config'

const initState = {list: config.initDatas};

const rootReducer = function( state, action ) {
  if (typeof state === 'undefined') {
    console.log('reducer state undef');
    return initState;
  }
  switch (action.type) {
    case ADD_ITEM:
      console.log('reducer add item');
      return Object.assign({}, state, {list: action.list})
    case DEL_ITEM:
      return Object.assign({}, state, {list: action.list})
    default:
      return state
  }
}

/* If having multiple reducers, combine them as one:
const rootReducer = combineReducers({})
*/

export default rootReducer
