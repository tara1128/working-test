/*
  server/db/initDB.js
  Initialize database, executed once only,
  unless by clicking to be executed manually!
*/

import Sequelize from 'sequelize'
import config from '../../common/config'

const DB = config.db
const ID = config.firstItemID

export const database = new Sequelize(DB.database, DB.username, DB.password, {
  dialect: DB.dialect, // which database is being used
  storage: DB.storage,
  logging: true
});

console.log('Init DB !!!!!!!!!!!!!!!!!!!!!!!!!!!');

/* Define a model named 'users': */
export const Users = database.define('users', {
  id: {
    type: Sequelize.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true
  },
  username: Sequelize.STRING,
  password: Sequelize.STRING
}, {
  tableName: 'user_table',
  timestamps: false
});

export const List = database.define('list', {
  id: {
    type: Sequelize.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true
  },
  content: Sequelize.STRING,
  date: Sequelize.STRING,
  sta: Sequelize.STRING 
}, {
  tableName: 'list_table',
  timestamps: false
});

const initItems = [{
  id: ID,
  content: 'The first idea built in the database !',
  date: new Date().getTime(),
  sta: 1
}, {
  id: ID+1,
  content: 'Second idea initialized!',
  date: new Date().getTime(),
  sta: 1
}];

/* Synchronizing the schema */
/* Everytime you created or edited a table, call .sync() to update database! */
Promise.all( [Users.sync({ force: true }), List.sync({ force: true })] ).then(() => {
  List.bulkCreate( initItems ).then(function(data){
    for ( let p in data ) {
      console.log('An array of datas has been built in database ! ', p, ' ====> ', data[p].dataValues );
    }
  }).catch(function(err){
    console.log('Initialize datas in database failed! Please check it out! ', err);  
  });
});

