'use strict';

module.exports = {
  up:(queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return queryInterface.addColumn(
      "Movies",
      "ProduceHouseId",
      {
        type: Sequelize.INTEGER,
        references:{
          model:{
            tableName:"Movies"
          },
          key : "id"
        },
        onUpdate:"CASCADE",
        onDelete:"CASCADE"
      }
    )

  },

  down:(queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return queryInterface.removeColumn("Movies","ProduceHouseId",{});
  }
};
