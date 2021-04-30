'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Instructors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstname: {
        type: Sequelize.STRING
      },
      lastname: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      qualification: {
        type: Sequelize.STRING
      },
      introductionBrief: {
        type: Sequelize.STRING
      },
      numberOfPublishedCourses: {
        type: Sequelize.INTEGER
      },
      numberOfEnrolledStudents: {
        type: Sequelize.INTEGER
      },
      averageReviewRatings: {
        type: Sequelize.INTEGER
      },
      numberOfReviews: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('Instructors');
  }
};