const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Program extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, breakfast, lunch, dinner }) {
      // define association her
      this.belongsTo(User, { foreignKey: 'user_id' });
      this.belongsTo(breakfast, { foreignKey: 'breakfast_id' });
      this.belongsTo(lunch, { foreignKey: 'lunch_id' });
      this.belongsTo(dinner, { foreignKey: 'dinner_id' });
    }
  }
  Program.init(
    {
      name: DataTypes.STRING,
      user_id: DataTypes.INTEGER,
      description: DataTypes.STRING,
      breakfast_id: DataTypes.INTEGER,
      lunch_id: DataTypes.INTEGER,
      dinner_id: DataTypes.INTEGER,
      kcal: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Program',
    }
  );
  return Program;
};
