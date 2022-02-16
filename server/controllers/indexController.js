const conn = require('../database');

getImages = () => {
    return new Promise((resolve, reject) => {
        conn.query('SELECT * FROM images', (error, images) => {
            if (error) return reject(error);
            if (images.length === 0) return resolve('No hay imágenes disponibles');
            return resolve(images);
        })
    })
}

getImage = (id) => {
    return new Promise((resolve, reject) => {
        conn.query('SELECT * FROM images WHERE id = ?', [id], (error, image) => {
            if (error) return reject(error);
            if (image.length === 0) return resolve('No se encontró la imagen');
            return resolve(image[0]);
        })
    })
}

addImage = (image) => {
    return new Promise((resolve, reject) => {
        conn.query('INSERT INTO images SET ?', [image], (error, response) => {
            if (error) return reject(error);
            return resolve('ID: ' + response.insertId);
        })
    })
}

updateImage = (id, image) => {
    return new Promise((resolve, reject) => {
        conn.query('UPDATE images SET ? WHERE id = ?', [image, id], (error, response) => {
            if (error) return reject(error);
            return resolve('updated ID: ' + id);
        })
    })
}

deleteImage = (id) => {
    return new Promise((resolve, reject) => {
        conn.query('DELETE FROM images WHERE id = ?', [id], (error, response) => {
            if (error) return reject(error);
            return resolve('deleted ID: ' + id);
        })
    })
}

getImagesByName = (name) => {
    return new Promise((resolve, reject) => {
        conn.query("SELECT * FROM images WHERE image_name LIKE CONCAT('%', ?, '%')", [name], (error, response) => {
            if (error) return reject(error);
            //if (response.length === 0) return resolve('No se encontraron resultados');
            return resolve(response);
        })
    })
}

module.exports = {
    getImages,
    getImage,
    addImage,
    updateImage,
    deleteImage,
    getImagesByName
}