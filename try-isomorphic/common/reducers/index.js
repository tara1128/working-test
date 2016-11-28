/*
  common/reducers/index.js
*/

import { combineReducers } from 'redux'
import { DISPLAY_ALL, ADD_ITEM, DEL_ITEM, CHANGE_AUTHOR } from '../actions'

/**
  Redux will call our reducer with an undefined state for the first time,
  this is our chance to return the initial state of our app!
  So we need to make an initial state with a good shape of it for the app.
**/

const initialState = {
  author: 'alex',
  dataArray: [
    {
      id: 1,
      content: 'Hello Redux! This is the first item.',
      date: 1479963620866,
      sta: 1
    }
  ]
};

/* Split reducer just like:
function reducer(state = {}, action) {
  return {
    a: doSomethingWithA(state.a, action), /* state is also seperated from the global state !
    b: processB(state.b, action),
    c: c(state.c, action)
  }
}
*/

/**
    The first property of action is "type",
    whereas the second property of action is the parameter you need to deliver to the reducer!
    Take del-item as an instance, you need an id to get the target item to delete,
    so in action creator the second property is "id",
    also case of "DEL_ITEM" in reducer, we get it with "action.id". Like below:
**/

function displayList( state = initialState.dataArray, action ) {
  switch (action.type) {
    case DISPLAY_ALL:
      return action.updatedList
    default:
      return state;
  }
}

function modifyDataArray( state = initialState.dataArray, action ) {
  switch (action.type) {
    case ADD_ITEM:
      return [
        action.newData,
        ...state
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

function changeAuthor( state = initialState.author, action ) {
  switch (action.type) {
    case CHANGE_AUTHOR:
      return action.newAuthor
    default:
      return state;
  }
}

/* Last but not least, combine seperate reducers as one: */
const rootReducer = combineReducers({
  displayList,
  modifyDataArray,
  changeAuthor
})

export default rootReducer
