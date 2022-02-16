const express = require('express');
const cors = require('cors');
const indexRoutes = require('./routes/indexRoutes');
const usersRoutes = require('./routes/usersRoutes')

const server = {
    app: express(),
    config: function () {
        this.app.set('port', process.env.PORT || 9000);
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false}));
    },
    routes: function () {
        this.app.get('/', (req, res) => {
            res.send('Nothing here, go to /api/');
        })
        this.app.get('/api', (req, res) => {
            res.send('Welcome to my images viewer app API, go to -> api/images/ route to see');
        })
        this.app.use('/api/images', indexRoutes);
        this.app.use('/api/users', usersRoutes);
    },
    start: function () {
        this.config();
        this.routes();
        this.app.listen(this.app.get('port'), () => {
          console.log('Server on port ' + this.app.get('port'));
        })
    }
}

server.start();
