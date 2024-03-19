'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dinner_program extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Dinner_program.init({
    dinner_id: DataTypes.INTEGER,
    program_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Dinner_program',
  });
  return Dinner_program;
};