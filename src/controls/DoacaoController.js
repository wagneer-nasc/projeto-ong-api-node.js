const Doacao = require('../models/Doacao');
const Ong = require('../models/Ong');

module.exports = {

    async doar(req, res) {

        const {ong_id} = req.params;
        const {valor_doacao , cpf , nome , email } = req.body;
           
        try{
         
           if(!ong_id)
               throw new Error('id ong - invalido/null/vazio');

            const ong_encontrada = await Ong.findOne({
                where: { id: ong_id },
            });
            if(!ong_encontrada)
               throw new Error('Ong não cadastrada ou ID Invalido')

           if(!valor_doacao || !cpf || !nome || !email)
                throw new Error('parametros invalidos');
           
            const valor_porcentagem = valor_doacao * 0.1 ;
                await Doacao.create({
                    cpf,
                    nome,
                    email,
                    valor_doacao_sistema: valor_porcentagem,
                    valor_doacao: valor_doacao -  valor_porcentagem,
                    ong_id,
                });
                res.status(200).json({ok: 'Doação feita com muita alegria.'})
        }catch(error){
            return res.status(500).json({ error: error.message });
        }
    },
    async listar(req, res) {
        const { id } = req.params;
        try{
            if(!id)
                throw new Error('id ong - invalido/null/vazio')
            const doacao = await Doacao.findAll({
                where: {ong_id: id},
            });
            res.status(200).json(doacao);
        }catch(error){
            return res.status(500).json({ error: error.message });
        }
    }
}