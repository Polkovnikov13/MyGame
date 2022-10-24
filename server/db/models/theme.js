const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Theme extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Quest, {
        foreignKey: 'theme_id',
      });
    }
  }
  Theme.init({
    name: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Theme',
  });
  return Theme;
};

quest: DataTypes.STRING,
answer: DataTypes.STRING,
price: DataTypes.STRING,
theme_id: DataTypes.INTEGER,