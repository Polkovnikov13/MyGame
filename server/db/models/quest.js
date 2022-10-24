const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Quest extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Quest, {
        foreignKey: 'theme_id',
      });
    }
  }
  Quest.init({
    quest: DataTypes.STRING,
    answer: DataTypes.STRING,
    price: DataTypes.STRING,
    theme_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Quest',
  });
  return Quest;
};
