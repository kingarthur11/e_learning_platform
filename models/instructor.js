'use strict';

module.exports = (sequelize, DataTypes) => {
  const Instructor = sequelize.define('Instructor', {
    firstname: {
      type: DataTypes.STRING,
    },
    lastname: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    qualification: {
      type: DataTypes.STRING,
    },
    introductionBrief: {
      type: DataTypes.STRING,
    },
    numberOfPublishedCourses: {
      type: DataTypes.INTEGER,
    },
    numberOfEnrolledStudents: {
      type: DataTypes.INTEGER,
    },
    averageReviewRatings: {
      type: DataTypes.INTEGER,
    },
    numberOfReviews: {
      type: DataTypes.INTEGER,
    },
  });

  Instructor.associate = (models) => {
    Instructor.hasMany(models.Course, {
      foreignKey: 'instructorId',
    });
  };

  return Instructor;
};