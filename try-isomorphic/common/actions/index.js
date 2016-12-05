/*
  common/actions/index.js
*/

import fetch from 'isomorphic-fetch'

/**
  Actions are the only source of information for the store.
  Send actions to the store using "store.dispatch(action)".
  Actions are all plain Javascript objects, and must have a "type" property.
  Actions can be named with a verb and a noun, like "ADD_TODO", "SET_VISIBILITY_FILTER".
**/

/* Action types: */
export const ADD_ITEM = 'ADD_ITEM'
export const DEL_ITEM = 'DEL_ITEM'

/* Action creators: */
/* The second parameter is the new whole list after adding or deleting items */
export function addItem( list ) {
  return {
    type: ADD_ITEM,
    list
  }
}

export function delItem( list ) {
  return {
    type: DEL_ITEM,
    list
  }
}

/**
  When and where to invoke the action creators?
  In somewhere like components where you do "dispatch(addItem(newdata))"
**/
