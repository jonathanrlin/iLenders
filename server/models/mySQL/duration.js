'use strict';

module.exports = (sequelize, DataTypes) => {
  const Duration = sequelize.define('Duration',
    {
      start: {
        type: DataTypes.DATE
      },
      end: {
        type: DataTypes.DATE
      },
    },
    { sequelize, tableName: 'duration' }
  );
  Duration.associate = function (models) {
    Duration.belongsTo(models.Item, {
      foreignKey: 'itemId'
    });
  };
  return Duration;
};