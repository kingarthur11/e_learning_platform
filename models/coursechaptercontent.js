'use strict';

module.exports = (sequelize, DataTypes) => {
  const CourseChapterContent = sequelize.define('courseChapterContent', {
    courseChapterId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    contentTypeId: {
      type: DataTypes.INTEGER,
    },
    isMandatory: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    timeRequiredInSeconds: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    isOpenForFree: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
  }, {
    paranoid: true
  });

  CourseChapterContent.associate = (models) => {
    CourseChapterContent.belongsTo(models.CourseChapter, {
      foreignKey: {
        name: 'courseChapterId',
        allowNull: false
      },
      as: 'courseChapterContent'
    });
    CourseChapterContent.hasMany(models.CourseChapter, {
      foreignKey: {
        name: 'courseChapterContentId',
        allowNull: false
      },
      as: 'learnProgress'
    });
  };

  return CourseChapterContent;
};