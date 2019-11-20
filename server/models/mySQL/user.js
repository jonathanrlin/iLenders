const Sequelize = require("sequelize");
class UserModel extends Sequelize.Model {
  static init(sequelize, DataTypes) {
    return super.init({
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
      {
        tableName: "user",
        sequelize
      }
    );
  }
}

module.exports = UserModel;