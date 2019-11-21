'use strict';

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User',
    {
      name: {
        type: DataTypes.STRING,
        validate: { len: [4,] }
      },
      email: {
        type: DataTypes.STRING,
        validate: { isEmail: true }
      },
      password: {
        type: DataTypes.STRING,
        validate: { len: [4,] }
      }
    },
    { sequelize, tableName: 'user' }
  );
  User.associate = function(models){
    User.hasMany(models.RentedItem);
  }
  return User;
}