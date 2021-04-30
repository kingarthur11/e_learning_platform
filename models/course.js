'use strict';

module.exports = (sequelize, DataTypes) => {
  const Course = sequelize.define('Course', {
    courseTitle: {
      type: DataTypes.STRING,
    },
    courseBrief: {
      type: DataTypes.STRING,
    },
    instructorId: {
      type: DataTypes.INTEGER,
    },
    languageId: {
      type: DataTypes.INTEGER,
    },
    categoryId: {
      type: DataTypes.INTEGER,
    },
    numberOfChapters: {
      type: DataTypes.INTEGER,
    },
    courseFee: {
      type: DataTypes.INTEGER,
    },
  });

  Course.associate = (models) => {
    Course.belongsTo(models.Instructor, {
      foreignKey: 'instructorId',
    });
    Course.belongsTo(models.LanguageName, {
      foreignKey: 'languageId',
    });
    Course.belongsTo(models.Categories, {
      foreignKey: 'categoryId'
    });
    Course.hasMany(models.CourseChapter, {
      foreignKey:  'courseId',
    });
    Course.hasMany(models.Enrollment, {
      foreignKey:'courseId',
    });
  };

  return Course;
};