/*
  common/store/index.js
  Note that you'll only have a single store in a Redux application !
*/

import { createStore } from 'redux'
import rootReducer from '../reducers'
import { displayAll, addItem, delItem, changeAuthor } from '../actions'

/** 
  When you create a store, 
  make sure to go with a reducer as a parameter.
  Besides, the second parameter is optional,
  which is used to initialize the status of "state",
  this is very useful for isomorphic construction,
  which means it's useful for hydrating the state of the client to match the state of a Redux application running on the server.
**/

let store = createStore( rootReducer )

/* Note that subscribe() returns a function for unregistering the listener */
let unsubscribe = store.subscribe(() => {
  console.log( 'Subscribe store !', store.getState() );  
})
// store.subscribe()

/* After creating the store, it is time to dispatch actions: */
/*
store.dispatch(addItem({
  id: 1048,
  content: 'A brand new content here, Friday today!',
  date: 1480039458951,
  sta: 1
}))
store.dispatch(delItem('1002'))
store.dispatch(changeAuthor('Wangshaojing'))
store.dispatch(displayAll())
*/
/* Everytime you dispatch an action, the reducer will be called ! */

/* If you stop listening to state updates: */
// unsubscribe()

export default store
