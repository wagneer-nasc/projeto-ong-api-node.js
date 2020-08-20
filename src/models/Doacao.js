const {Model , DataTypes } = require ('sequelize');

class Doacao extends Model {
    static init(sequelize) {
        super.init({
            
            valor_doacao: DataTypes.DOUBLE,
            valor_doacao_sistema: DataTypes.DOUBLE,
            cpf: DataTypes.STRING,
            email: DataTypes.STRING,
            nome: DataTypes.STRING,
           
        },{
            sequelize
        })
    }
    static associate(models){
        this.belongsTo(models.Ong, {foreignKey: 'ong_id', as: 'ong'});
    }
    
    
}
module.exports = Doacao ;