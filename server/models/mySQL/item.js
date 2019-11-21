'use strict';

module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define('Item',
    {
      name: {
        type: DataTypes.STRING,
        validate: { len: [4,] }
      },
      description: {
        type: DataTypes.STRING,
      },
      isSell: {
        type: DataTypes.BOOLEAN
      },
      sellPrice: {
        type: DataTypes.DECIMAL(10, 2)
      },
      isLend: {
        type: DataTypes.BOOLEAN
      },
      lendPrice: {
        type: DataTypes.DECIMAL(10, 2)
      },
      condition: {
        type: DataTypes.STRING
      },
      location: {
        type: DataTypes.STRING
      },
    },
    { sequelize, tableName: 'item' }
  );
  Item.associate = function(models){
    Item.hasMany(models.Duration);
  }
  return Item;
}