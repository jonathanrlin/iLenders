'use strict';
module.exports = (sequelize, DataTypes) => {
  const SoldItem = sequelize.define('SoldItem', {
    purchaseDate: {
      type: DataTypes.DATE,
     },
  }, { sequelize, tableName: 'soldItems'});
  SoldItem.associate = function(models) {
    SoldItem.belongsTo(models.User, {
      foreignKey: 'userId'
    });
  };
  return SoldItem;
};