/*
  common/reducers/index.js
*/

import { combineReducers } from 'redux'
import { ADD_ITEM, DEL_ITEM } from '../actions'

const initState = {list: []};

const rootReducer = function( state, action ) {
  if (typeof state === 'undefined') {
    return initState;
  }
  switch (action.type) {
    case ADD_ITEM:
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
