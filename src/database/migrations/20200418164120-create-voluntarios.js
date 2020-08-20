module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Voluntarios', {
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
      cpf: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      telefone: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      endereco: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      numero: {
        allowNull: false,
        type: Sequelize.INTEGER,
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
      return queryInterface.dropTable('Voluntarios');
  }
};
