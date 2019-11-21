'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Duration',
      'itemId',
      {
        type: Sequelize.INTEGER(11),
        references: {
          model: 'Item',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Duration',
      'ItemId'
    );

  }
};
