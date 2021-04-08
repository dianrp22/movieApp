'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('MovieCasts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      MovieId: {
        type: Sequelize.INTEGER,
        references:{
          model:{
            tableName:"Movies"
          },
          key:"id"
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      CastId: {
        type: Sequelize.INTEGER,
        references:{
          model:{
            tableName:"Casts"
          },
          key:"id"
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      role: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('MovieCasts');
  }
};