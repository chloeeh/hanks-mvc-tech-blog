// // Import the Sequelize constructor from the library
// const Sequelize = require('sequelize');

// require('dotenv').config();

// // Create connection to our database, pass in your MySQL information for username and password
// let sequelize;

// if (process.env.JAWSDB_URL) {
//   sequelize = new Sequelize(process.env.JAWSDB_URL);
// } else {
//   sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
//     host: 'localhost',
//     dialect: 'mysql',
//     port: 3306
//   });
// }

// module.exports = sequelize;

// require a .env file to conceal personal credentials
require('dotenv').config();

// include the sequelize module
const Sequelize = require('sequelize');
// calls the credentials from the .env file
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;