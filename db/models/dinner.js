const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class dinner extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  dinner.init(
    {
      condition: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'dinner',
    }
  );
  return dinner;
};
