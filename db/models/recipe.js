'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Recipe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
      this.belongsToMany(User, {
        through: 'User_recipe',
        foreignKey: 'user_id',
      });
      // define association here
    }
  }
  Recipe.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      image: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Recipe',
    }
  );
  return Recipe;
};
