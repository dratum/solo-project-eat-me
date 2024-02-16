'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Program }) {
      this.hasMany(Program, { foreignKey: 'user_id' });
      // define association here
    }
  }
  User.init(
    {
      username: {
        type: DataTypes.STRING,
        len: [4, 20],
        is: /^[A-Z]\w+$/i,
      },
      email: {
        type: DataTypes.STRING,
        len: [3, 30],
        is: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      },
      password: { type: DataTypes.STRING, len: [5, 20] },
    },
    {
      sequelize,
      modelName: 'User',
    }
  );
  return User;
};
