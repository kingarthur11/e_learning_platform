'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('courseChapterContents', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      courseChapterId: {
        type: Sequelize.INTEGER
      },
      contentTypeId: {
        type: Sequelize.INTEGER
      },
      isMandatory: {
        type: Sequelize.BOOLEAN
      },
      timeRequiredInSeconds: {
        type: Sequelize.INTEGER
      },
      isOpenForFree: {
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('courseChapterContents');
  }
};