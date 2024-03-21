const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Program extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {}
  }
  Program.init(
    {
      name: DataTypes.STRING,
      breakfast: DataTypes.STRING,
      lunch: DataTypes.STRING,
      dinner: DataTypes.STRING,
      description: DataTypes.STRING,
      kcal: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Program',
    }
  );
  return Program;
};
