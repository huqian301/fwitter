const mysql = require('mysql2');

const util = require('util');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'me',
  password: 'secret',
  database: 'my_db',
});
