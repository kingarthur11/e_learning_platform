'use strict';

module.exports = (sequelize, DataTypes) => {
  const Enrollment = sequelize.define('enrollment', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    courseId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    isPaidSubscription: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
  }, {
    paranoid: true
  });

  Enrollment.associate = (models) => {
    Enrollment.belongsTo(models.User, {
      foreignKey: {
        name: 'userId',
        allowNull: false
      },
      as: 'enrollment'
    });
    Enrollment.belongsTo(models.Course, {
      foreignKey: {
        name: 'courseId',
        allowNull: false
      },
      as: 'enrollment'
    }); 
    Enrollment.hasMany(models.Feedback, {
      foreignKey: {
        name: 'enrollmentId',
        allowNull: false
      },
      as: 'feedback'
    });   
    Enrollment.hasMany(models.LearnProgress, {
      foreignKey: {
        name: 'enrollmentId',
        allowNull: false
      },
      as: 'learnProgress'
    });     
  };

  return Enrollment;
};