'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Lunch_program extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Lunch_program.init({
    lunch_id: DataTypes.INTEGER,
    program_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Lunch_program',
  });
  return Lunch_program;
};