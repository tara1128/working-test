/*
  common/reducers/index.js
*/

import { combineReducers } from 'redux'
import { DISPLAY_ALL, ADD_ITEM, DEL_ITEM, CHANGE_AUTHOR } from '../actions'

let initialState = {
  author: 'alex',
  dataArray: [
    {
      id: 1,
      content: 'Well! Hello Redux! This is the first item.',
      date: 1480323247641,
      sta: 1
    }
  ]
};

function dataList( state = initialState.dataArray, action ) {
  switch (action.type) {
    case DISPLAY_ALL:
      return action.updatedList
    default:
      return state;
  }
}

function modifiedList( state = initialState.dataArray, action ) {
  switch (action.type) {
    case ADD_ITEM:
      // return state.concat( action.newData )
      return [
        action.newData,
        ...state // don't mutate the initial state
      ]
    case DEL_ITEM:
      return state.map((item, index) => {
        if( item.id === action.id ) { /* When finding the target item, make its sta=0 */
          return Object.assign({}, item, {sta: 0})
        }
        return item;
      })
    default:
      return state;
  }
}

function newAuthor( state = initialState.author, action ) {
  switch (action.type) {
    case CHANGE_AUTHOR:
      return action.newAuthor
    default:
      return state;
  }
}

/* Last but not least, combine seperate reducers as one: */
const rootReducer = combineReducers({
  dataList,
  modifiedList,
  newAuthor
})

export default rootReducer
