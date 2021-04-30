'use strict';

module.exports = (sequelize, DataTypes) => {
  const CourseChapterContent = sequelize.define('CourseChapterContent', {
    courseChapterId: {
      type: DataTypes.INTEGER,
    },
    contentTypeId: {
      type: DataTypes.INTEGER,
    },
    isMandatory: {
      type: DataTypes.BOOLEAN,
    },
    timeRequiredInSeconds: {
      type: DataTypes.INTEGER,
    },
    isOpenForFree: {
      type: DataTypes.BOOLEAN,
    },
  });

  CourseChapterContent.associate = (models) => {
    CourseChapterContent.belongsTo(models.CourseChapter, {
      foreignKey: 'courseChapterId',
    });
    CourseChapterContent.hasMany(models.LearnProgress, {
      foreignKey: 'courseChapterContentId',
    });
  };

  return CourseChapterContent;
};