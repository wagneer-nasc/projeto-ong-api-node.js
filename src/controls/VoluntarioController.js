const Voluntario = require('../models/Voluntario');
const Ong = require('../models/Ong');

module.exports = {

    async serVolutanrio(req , res){
        const {ong_id} = req.params;
        try {
            if(!ong_id)
                throw new Error('id ong - invalido/null/vazio');
           
            const ong_encontrada = await Ong.findOne({
                    where: { id: ong_id },
            });
            if(!ong_encontrada)
                throw new Error('Ong não cadastrada ou ID Invalido')

           const {email,telefone,endereco,nome,numero,cpf} =  req.body;
           if(!email || !telefone || !endereco || !nome || !numero || !cpf)
                throw new Error('parametros invalidos');
           const dados_voluntario = await Voluntario.findOne({
               where: {cpf: cpf,
                       ong_id: ong_id }, 
           });
          if(!dados_voluntario){
            await Voluntario.create({
                cpf,
                email,
                telefone,
                endereco,
                numero,
                nome,               
                ong_id,
            });
            res.status(200).json({ok: 'você fez uma solicitação para ser vonluntario , aguarde que entraremos em contato.'});
          }
            res.status(400).json({error: 'já existe uma solicitação para você ser vonluntario desta Ong , aguarde que entraremos em contato.'});

        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },
    async detalhe(req, res) {
        const { ong_id } = req.params;
        try{
            if(!ong_id)
                throw new Error('id ong - invalido/null/vazio');
       
            const voluntario = await Voluntario.findAll({
                where:{ong_id: ong_id}
            });
            res.status(200).json(voluntario);
        }catch(err){
            return res.status(500).json({ error: error.message });
        }
    },
}