"use strict";

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable("Users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      email: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING,
      },
      username: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING,
      },
      password_hash: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
      stateId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'States', // Name of the referenced model
          key: 'id', // Primary key of the referenced model
        },
        onUpdate: 'CASCADE', // If the referenced record is updated, update this foreign key
        onDelete: 'CASCADE', // If the referenced record is deleted, delete this foreign key
      },

    }),

  down: (queryInterface) => queryInterface.dropTable("Users"),
};
