const {Model , DataTypes } = require ('sequelize');

class Ong extends Model {
    static init(sequelize) {
        super.init({
            
            telefone: DataTypes.STRING,
            endereco: DataTypes.STRING,
            numero: DataTypes.INTEGER,
            nome: DataTypes.STRING,
            descricao: DataTypes.STRING,
            cnpj: DataTypes.STRING,
            email: DataTypes.STRING,
            senha: DataTypes.STRING,
        },{
            sequelize
        })
    }
}
module.exports = Ong ;