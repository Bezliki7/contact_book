'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('contacts', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      number: {
        type: Sequelize.DataTypes.STRING,
        unique: true,
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false,
      }
    });

    await queryInterface.changeColumn('contacts', 'name',  {
      type: Sequelize.DataTypes.STRING,
      allowNull: false
    });
  },

 async down(queryInterface) {
    await queryInterface.changeColumn('contacts', 'name', {
      type: Sequelize.DataTypes.STRING,
      allowNull: true
    });

    await queryInterface.dropTable('contacts');
  }
}
