'use strict';

module.exports = (sequelize, DataTypes) => {
  const Instructor = sequelize.define('instructor', {
    firstname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    qualification: {
      type: DataTypes.STRING,
      allowNull: false
    },
    introductionBrief: {
      type: DataTypes.STRING,
      allowNull: false
    },
    numberOfPublishedCourses: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    numberOfEnrolledStudents: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    averageReviewRatings: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    numberOfReviews: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {
    paranoid: true
  });

  Instructor.associate = (models) => {
    Instructor.hasMany(models.Course, {
      foreignKey: {
        name: 'instructorId',
        allowNull: false
      },
      as: 'course'
    });
  };

  return Instructor;
};