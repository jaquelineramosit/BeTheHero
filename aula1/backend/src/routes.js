const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const connection = require('./database/connection');

const routes = express.Router();

/**ONGS */
routes.post('/ongs', OngController.create);
routes.get('/ongs', OngController.index);

/**INCIDENSTS */
routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.index);
routes.delete('/incidents/:id', IncidentController.delete);

/** PROFILE*/
routes.get('/profile', ProfileController.index);

/**SESSION */
routes.get('/sessions', SessionController.create);

module.exports = routes;