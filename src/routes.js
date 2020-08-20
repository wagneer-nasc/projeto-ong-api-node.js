const express = require('express');
const routes = express.Router();
const OngController = require('./controls/OngController');
const VoluntarioController = require('./controls/VoluntarioController');
const DoacaoController = require('./controls/DoacaoController');
//routes Ong
routes.post('/ongs', OngController.create);
routes.get('/ongs', OngController.listar); 
routes.get('/ongs/:id', OngController.detalhe); 
routes.put('/ongs/:id', OngController.update);
routes.post('/ongs/auth', OngController.auth);
//routes Doação
routes.post('/doacao/:ong_id', DoacaoController.doar); 
routes.get('/doacao/:id', DoacaoController.listar); 
//routes Voluntario
routes.post('/ongs/:ong_id/voluntario', VoluntarioController.serVolutanrio);
routes.get('/ongs/:ong_id/voluntario', VoluntarioController.detalhe); 

module.exports = routes;