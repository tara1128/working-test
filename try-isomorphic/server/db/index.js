/*
  server/db/index.js
*/

import { database } from './initDB'
import { Users, List } from './initDB'

/* Test database connection: */
database.authenticate().then(function(){
  console.log('Database has connected successfully !');
}).catch(function(error){
  console.log('Unable to connect to the database: ', error);
});

export const _Users = Users
export const _List = List
