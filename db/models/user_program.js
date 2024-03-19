'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User_program extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User_program.init({
    user_id: DataTypes.INTEGER,
    program_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User_program',
  });
  return User_program;
};