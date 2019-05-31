var knex = require('knex');

var knexOptions = null;

if (process.env.NODE_ENV === 'production') {
  knexOptions = {
    client: 'mysql',
    connection: process.env.CLEARDB_DATABASE_URL
  };
} else {
  knexOptions = {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './mydb.sqlite'
    }
  };
}

var client = knex(knexOptions);

function getKnex() {
  return client;
}

module.exports = {
  getKnex
};
