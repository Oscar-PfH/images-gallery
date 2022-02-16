const mysql = require('mysql');

const pool = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'imagesviewer',
    port: 3306
});

pool.connect(err => {
    if (err) throw err;
    console.log('Connection succesful');
})

module.exports = pool;