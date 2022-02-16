const express = require('express');
const indexController = require('../controllers/indexController');

const indexRoutes = {
    router: express.Router(),
    config: function () {
        this.router.get('/', async (req, res) => {
            const images = await indexController.getImages();
            res.json(images);
        });
        this.router.get('/:id', async (req, res) => {
            const image = await indexController.getImage(req.params.id);
            res.json(image);
        });
        this.router.post('/', async (req, res) => {
            const response = await indexController.addImage(req.body);
            res.send(response);
        });
        this.router.put('/:id', async (req, res) => {
            const response = await indexController.updateImage(req.params.id, req.body);
            res.send(response);
        });
        this.router.delete('/:id', async (req, res) => {
            const response = await indexController.deleteImage(req.params.id);
            res.send(response);
        });
        this.router.get('/imagename/:name', async (req, res) => {
            const images = await indexController.getImagesByName(req.params.name);
            res.json(images);
        })
    }
}

indexRoutes.config();
module.exports = indexRoutes.router;