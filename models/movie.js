'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Movie.belongsTo(models.ProductionHouse,{foreignKey : "ProduceHouseId"})
      Movie.belongsToMany(models.Cast, {through: models.MovieCast})
      Movie.hasMany(models.MovieCast)
    }
  };
  Movie.init({
    name: DataTypes.STRING,
    released_year: DataTypes.INTEGER,
    genre: DataTypes.STRING,
    ProduceHouseId:DataTypes.INTEGER,
    rating:DataTypes.INTEGER
  }, {
    validate:{
      kabisat(){
        if(+this.released_year % 400 === 0){
          throw new Error('tahun tidak baik untuk release film')
        }
      }
    },
    sequelize,
    modelName: 'Movie',
  });
  return Movie;
};