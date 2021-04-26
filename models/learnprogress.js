'use strict';

module.exports = (sequelize, DataTypes) => {
  const LearnProgress = sequelize.define('learnProgress', {
    enrollmentId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    courseChapterContentId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    beginTimeStamp: {
      type: DataTypes.DATE,
      allowNull: false
    },
    completionTimeStamp: {
      type: DataTypes.DATE,
      allowNull: false
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
  }, {
    paranoid: true
  });

  LearnProgress.associate = (models) => {
    LearnProgress.belongsTo(models.Enrollment, {
      foreignKey: {
        name: 'enrollmentId',
        allowNull: false
      },
      as: 'learnProgress'
    });
    LearnProgress.belongsTo(models.Course, {
      foreignKey: {
        name: 'courseChapterContentId',
        allowNull: false
      },
      as: 'learnProgress'
    });
  };

  return LearnProgress;
};