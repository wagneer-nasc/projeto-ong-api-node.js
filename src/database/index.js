const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Ong = require('../models/Ong');
const Voluntario = require('../models/Voluntario');
const Doacao = require('../models/Doacao');
 
const conexao = new Sequelize(dbConfig);

Ong.init(conexao);
Voluntario.init(conexao);
Doacao.init(conexao);  

Doacao.associate(conexao.models);
Voluntario.associate(conexao.models);
 

module.exports = conexao ;