module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Doacaos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      ong_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'ongs', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      valor_doacao: {
        allowNull: false,
        type: Sequelize.DOUBLE,
      },
      valor_doacao_sistema: {
        allowNull: false,
        type: Sequelize.DOUBLE,
      },
      cpf: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      nome: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('Doacaos');
  }
};
