'use strict';

module.exports = (sequelize, DataTypes) => {
  const LearnProgress = sequelize.define('LearnProgress', {
    enrollmentId: {
      type: DataTypes.INTEGER,
    },
    courseChapterContentId: {
      type: DataTypes.INTEGER,
    },
    beginTimeStamp: {
      type: DataTypes.DATE,
    },
    completionTimeStamp: {
      type: DataTypes.DATE,
    },
    status: {
      type: DataTypes.BOOLEAN,
    },
  });

  LearnProgress.associate = (models) => {
    LearnProgress.belongsTo(models.Enrollment, {
      foreignKey: 'enrollmentId',
    });
    LearnProgress.belongsTo(models.Course, {
      foreignKey: 'courseChapterContentId',
    });
  };

  return LearnProgress;
};