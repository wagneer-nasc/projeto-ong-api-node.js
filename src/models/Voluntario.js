const {Model , DataTypes } = require ('sequelize');

class Voluntario extends Model {
    static init(sequelize) {
        super.init({
            
            telefone: DataTypes.STRING,
            endereco: DataTypes.STRING,
            numero: DataTypes.INTEGER,
            nome: DataTypes.STRING,
            email: DataTypes.STRING,
            cpf: DataTypes.STRING,
          
        },{
            sequelize
        })
    }
    static associate(models){
        this.belongsTo(models.Ong, {foreignKey: 'ong_id', as: 'ong'});
    }
}
module.exports = Voluntario ;