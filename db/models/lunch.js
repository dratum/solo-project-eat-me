const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class lunch extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  lunch.init(
    {
      condition: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'lunch',
    }
  );
  return lunch;
};
