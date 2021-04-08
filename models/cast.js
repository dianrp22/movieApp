'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cast extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Cast.belongsToMany(models.Movie, {through: models.MovieCast})
      Cast.hasMany(models.MovieCast)
    }
  };
  Cast.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    birth_year: DataTypes.INTEGER,
    gender: DataTypes.STRING,
    fullName:DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Cast',
    hooks:{
      beforeCreate: (data)=>{
        if(!data.last_name){
          data.fullName=`${data.first_name} ${data.first_name}`
        }else{
          data.fullName=`${data.first_name} ${data.last_name}`
        }
      }
    }
  });
  return Cast;
};