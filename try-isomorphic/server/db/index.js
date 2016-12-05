/*
  server/db/index.js
*/

import Sequelize from 'sequelize'
import config from '../../common/config'

const DB = config.db
const ID = config.firstItemID

const database = new Sequelize(DB.database, DB.username, DB.password, {
  dialect: DB.dialect, // which database is being used
  storage: DB.storage,
  logging: false
});

/* Test database connection: */
database.authenticate().then(function(){
  // console.log('Database has connected successfully !');
}).catch(function(error){
  console.log('Unable to connect to the database: ', error);
});

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
  console.log('In Promise, DATABASE worked ! Now we create one item.');
  List.create({
    id: ID,
    content: 'The first idea built in the database !',
    date: new Date().getTime(),
    sta: 1
  }).then(function(data){
    console.log('An item of data has been built in database !', data.dataValues );
  }).catch(function(err){
    console.log('Initialize data in database failed! Please check it out! ', err);  
  });
});

