const Ong = require('../models/Ong');
const { Op } = require("sequelize");

module.exports = {

    async create(req, res) {
        try {
            const { email, senha, cnpj, nome,
                descricao, telefone, endereco, numero } = req.body;
                if(!email || !senha || !cnpj || !nome || !descricao || !telefone || !endereco || !numero) 
                throw new Error('parametros invalidos')    

            const dados = await Ong.findOne({
                where: {
                    [Op.or]: [
                      { cnpj: cnpj },
                      { email: email }
                    ]
                  }
            });
            if (!dados) {
               const ong =  await Ong.create({
                    email,
                    senha,
                    cnpj,
                    nome,
                    descricao,
                    telefone,
                    endereco,
                    numero,
                });
                res.status(200).json(ong);
            }
            res.status(400).json({ error: 'Está ong já tem um cadastro na plataforma .' })
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },
    async listar(req, res) {
        try {
            const ong = await Ong.findAll();
            res.status(200).json(ong);

        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },
    async detalhe(req, res) {
        try {
            if(!req.params.id){
                throw new Error('Id ong - Parametro invalido')
            }
            const ong = await Ong.findByPk(req.params.id);
            if(!ong)
            throw new Error('dados não encontrado')

            res.status(200).json(ong);

        } catch (error) {
            return res.status(500).json({ error: error.message });
        }

    },
    async update(req, res) {
        
        try {
            const ong_encontrada = await Ong.findOne({
                where: { id: req.params.id },
            });

             if (!ong_encontrada)
                 throw new Error('Ong não cadastrada ou id invalido');

            const { email, senha, cnpj, nome,
                descricao, telefone, endereco, numero } = req.body;

             if(!email || !senha || !cnpj || !nome || !descricao || !telefone || !endereco || !numero) 
                 throw new Error('parametros invalidos')    

             await Ong.update(req.body, {
                where: {
                    id: req.params.id
                }
            });
            res.status(200).json({ ok: 'Update feito com sucesso!' }); 
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },
    async auth(req,res) {
        try{
            const {email, senha} = req.body;
            if(!email || !senha)
                 throw new Error('parametros invalido - Email ou Senha')

            const dados_login = await Ong.findOne ({
                where: {email: email,
                       senha: senha},
            });
           
            if(!dados_login){
                 throw new Error('email ou senha incorretos ou não existe')
            } 
            res.status(200).json(dados_login);
        }catch(error){
           return res.status(500).json({ error: error.message });
        }
      
     },

}