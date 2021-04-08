'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductionHouse extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ProductionHouse.hasMany(models.Movie,{foreignKey: "ProduceHouseId"})
    }
  };
  ProductionHouse.init({
    name: DataTypes.STRING,
    headquarters: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ProductionHouse',
  });
  return ProductionHouse;
};