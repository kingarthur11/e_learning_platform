'use strict';

module.exports = (sequelize, DataTypes) => {
  const CourseChapter = sequelize.define('courseChapter', {
    chapterTitle: {
      type: DataTypes.STRING,
      allowNull: false
    },
    numberOfReviews: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    numberOfVideos: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    numberOfAssignments: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    courseId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {
    paranoid: true
  });

  CourseChapter.associate = (models) => {
    CourseChapter.belongsTo(models.Course, {
      foreignKey: {
        name: 'courseId',
        allowNull: false
      },
      as: 'courseChapter'
    });
    CourseChapter.hasMany(models.CourseChapterContent, {
      foreignKey: {
        name: 'courseChapterId',
        allowNull: false
      },
      as: 'courseChapterContent'
    });
  };

  return CourseChapter;
};