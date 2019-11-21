'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('item', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      description: {
        allowNull: false,
        type: Sequelize.STRING
      },
      isSell: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      sellPrice: {
        type: Sequelize.DECIMAL(10, 2)
      },
      isLend: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      lendPrice: {
        type: Sequelize.DECIMAL(10, 2)
      },
      condition: {
        allowNull: false,
        type: Sequelize.STRING
      },
      location: {
        allowNull: false,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('item');
  }
};