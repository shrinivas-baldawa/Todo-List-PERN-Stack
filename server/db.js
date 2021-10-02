const Pool = require('pg').Pool;

const pool = new Pool({
    user:'postgres',
    password:'Shrinivas1@',
    hostname:'localhost',
    port:5432,
    database:'perntodo'
});

module.exports = pool;