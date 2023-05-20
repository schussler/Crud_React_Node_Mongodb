const express = require('express');
const routes = express.Router();

const usuarioController = require('../controllers/UsuarioController');
const UsuarioController = require('../controllers/UsuarioController');

//=> Rota de inserção de dados
routes.post('/usuarios', usuarioController.insert);

//=> Rota de requisição de dados
routes.get('/usuarios', UsuarioController.index);

//=> Rota de requisição de dado UNICO POR ID
routes.get('/usuarios/:id', UsuarioController.datails);

//=> Rota de atualização
routes.put('/usuarios/:id', usuarioController.update);

//=> Rota de atualização
routes.delete('/usuarios/:id', usuarioController.delete);



module.exports = routes
