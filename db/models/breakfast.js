const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class breakfast extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Program }) {
      this.hasMany(Program, { foreignKey: 'breakfast_id' });
      // define association here
    }
  }
  breakfast.init(
    {
      condition: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'breakfast',
    }
  );
  return breakfast;
};
