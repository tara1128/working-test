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
export const DISPLAY_ALL = 'DISPLAY_ALL'
export const ADD_ITEM = 'ADD_ITEM'
export const DEL_ITEM = 'DEL_ITEM'
export const CHANGE_AUTHOR = 'CHANGE_AUTHOR'

/* Action creators: */
export function displayAll( updatedList ) {
  return {
    type: DISPLAY_ALL,
    updatedList
  }
}

export function addItem( newData ) {
  return {
    type: ADD_ITEM,
    newData
  }
}

export function delItem( id ) {
  return {
    type: DEL_ITEM,
    id
  }
}
/* To delete an item is to make it "sta=0", with id to find the target item */


export function changeAuthor( newAuthor ) {
  return {
    type: CHANGE_AUTHOR,
    newAuthor
  }
}

/**
  When and where to invoke the action creators?
  In somewhere like components where you do "dispatch(addItem(newdata))"
**/
