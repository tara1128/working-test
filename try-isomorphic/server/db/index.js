/*
  server/db/index.js
*/

import Sequelize from 'sequelize'
import config from '../../common/config'

const DB = config.db
const database = new Sequelize(DB.database, DB.username, DB.password, {
  dialect: DB.dialect,
  storage: DB.storage,
  logging: false
});

/* Test database connection: */
database.authenticate().then(function(){
  // console.log('Database has connected successfully !');
}).catch(function(error){
  console.log('Unable to connect to the database: ', error);
});

/* Create tables in db: */
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
Promise.all( [Users.sync({ force: true }), List.sync({ force: true })] ).then(() => {
  console.log('In Promise, DATABASE worked ! ');
  List.create({
    id: 1001,
    content: 'The first content built by database !',
    date: new Date().getTime(),
    sta: 1
  }).then(function(data){
    console.log('An item of data has been built in database !', data.dataValues );
  });
});

