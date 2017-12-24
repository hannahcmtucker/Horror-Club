const pgp = require('pg-promise')();

const localDB = {
    host: 'localhost',
    port: 5432,
    database: 'horrorclublocal',
    user: 'Hannah',
    password: 'oranges'
};

const db = pgp(localDB);
module.exports = db;