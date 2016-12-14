/*
  server/db/index.js
  Initialize database, executed once only,
  unless by clicking to be executed manually!
*/

import Sequelize from 'sequelize'
import config from '../../common/config'

const DB = config.db

export const database = new Sequelize(DB.database, DB.username, DB.password, {
  dialect: DB.dialect, 
  storage: DB.storage,
  logging: false
});

console.log(' =============== INITIALIZING DATABASE ============== ');

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

/* Synchronizing the schema */
/* Everytime you created or edited a table, call .sync() to update database! */
Promise.all( [Users.sync({ force: true }), List.sync({ force: true })] ).then(() => {
  List.bulkCreate( config.initDatas ).then(function(data){
    for ( let p in data ) {
      console.log('DATABASE BulkCreate List: ', p, ' ====> ', data[p].dataValues );
    }
  }).catch(function(err){
    console.log('Initialize datas in database failed! Please check it out! ', err);  
  });
});

/* Test database connection: */
database.authenticate().then(function(){
  console.log('Database has connected successfully !');
}).catch(function(error){
  console.log('Unable to connect to the database: ', error);
});

export const _Users = Users
export const _List = List
