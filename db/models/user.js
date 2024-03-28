const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Program, Recipe, Food }) {
      this.belongsToMany(Program, {
        through: 'User_program',
        foreignKey: 'program_id',
      });
      this.belongsToMany(Recipe, {
        through: 'User_recipe',
        foreignKey: 'recipe_id',
      });
      this.belongsToMany(Food, {
        through: 'User_food',
        foreignKey: 'food_id',
      });
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
      password: {
        type: DataTypes.STRING,
        len: [5, 20],
      },
      role: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: 'User',
    }
  );
  return User;
};
