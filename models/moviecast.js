'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MovieCast extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      MovieCast.belongsTo(models.Movie)
      MovieCast.belongsTo(models.Cast)
    }
  };
  MovieCast.init({
    MovieId: DataTypes.INTEGER,
    CastId: DataTypes.INTEGER,
    role: {
      type:DataTypes.STRING,
      validate:{
        notEmpty:{
        args:true,
        msg:"role must be require"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'MovieCast',
  });
  return MovieCast;
};