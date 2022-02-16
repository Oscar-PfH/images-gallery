const express = require('express');
const usersController = require('../controllers/usersController');

const usersRoutes = {
    router: express.Router(),
    config: function () {
        this.router.get('/', async (req, res) => {
            const users = await usersController.getUsers();
            res.json(users);
        });
        this.router.get('/:id', async (req, res) => {
            const user = await usersController.getUser(req.params.id);
            res.json(user);
        });
        this.router.post('/', async (req, res) => {
            const response = await usersController.addUser(req.body);
            res.send(response);
        });
        this.router.put('/:id', async (req, res) => {
            const response = await usersController.updateUser(req.params.id, req.body);
            res.send(response);
        });
        this.router.delete('/:id', async (req, res) => {
            const response = await usersController.deleteUser(req.params.id);
            res.send(response);
        });
        this.router.get('/useremail/:email', async (req, res) => {
            const user = await usersController.getUserByEmail(req.params.email);
            res.json(user);
        })
    }
}

usersRoutes.config();
module.exports = usersRoutes.router;