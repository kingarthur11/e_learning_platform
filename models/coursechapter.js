'use strict';

module.exports = (sequelize, DataTypes) => {
  const CourseChapter = sequelize.define('CourseChapter', {
    chapterTitle: {
      type: DataTypes.STRING,
    },
    numberOfReviews: {
      type: DataTypes.INTEGER,
    },
    numberOfVideos: {
      type: DataTypes.INTEGER,
    },
    numberOfAssignments: {
      type: DataTypes.INTEGER,
    },
    courseId: {
      type: DataTypes.INTEGER,
    },
  });

  CourseChapter.associate = (models) => {
    CourseChapter.belongsTo(models.Course, {
      foreignKey: 'courseId',
    });
    CourseChapter.hasMany(models.CourseChapterContent, {
      foreignKey: 'courseChapterId',
    });
  };

  return CourseChapter;
};