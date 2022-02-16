const conn = require('../database');

getUsers = () => {
    return new Promise((resolve, reject) => {
        conn.query('SELECT * FROM users', (error, users) => {
            if (error) return reject(error);
            if (users.length === 0) return resolve('No hay usuarios registrados');
            return resolve(users);
        })
    })
}

getUser = (id) => {
    return new Promise((resolve, reject) => {
        conn.query('SELECT * FROM users WHERE id = ?', [id], (error, user) => {
            if (error) return reject(error);
            if (user.length === 0) return resolve('No se ha encontrado al usuario');
            return resolve(user[0]);
        })
    })
}

addUser = (user) => {
    return new Promise((resolve, reject) => {
        conn.query('INSERT INTO users SET ?', [user], (error, response) => {
            if (error) return reject(error);
            return resolve('ID: ' + response.insertId);
        })
    })
}

updateUser = (id, user) => {
    return new Promise((resolve, reject) => {
        conn.query('UPDATE users SET ? WHERE id = ?', [user, id], (error, response) => {
            if (error) return reject(error);
            return resolve('updated ID: ' + id);
        })
    })
}

deleteUser = (id) => {
    return new Promise((resolve, reject) => {
        conn.query('DELETE FROM users WHERE id = ?', [id], (error, response) => {
            if (error) return reject(error);
            return resolve('deleted ID: ' + id);
        })
    })
}

getUserByEmail = (email) => {
    return new Promise((resolve, reject) => {
        conn.query('SELECT * FROM users WHERE email = ?', [email], (error, response) => {
            if (error) return reject(error);
            if (response.length === 0) return resolve('No se ha encontrado al usuario');
            return resolve(response[0]);
        })
    })
}

module.exports = {
    getUsers,
    getUser,
    addUser,
    updateUser,
    deleteUser,
    getUserByEmail
}