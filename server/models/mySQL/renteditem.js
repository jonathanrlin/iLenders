'use strict';
module.exports = (sequelize, DataTypes) => {
  const RentedItem = sequelize.define('RentedItem', {
     startDate: {
      type: DataTypes.DATE,
     },
    returnDate: {
      type: DataTypes.DATE,
     },
    
  }, { sequelize, tableName: 'rentedItems' });
    RentedItem.associate = function(models) {
    RentedItem.belongsTo(models.User, {
      foreignKey: 'userId'
    });
  };
  return RentedItem;
};