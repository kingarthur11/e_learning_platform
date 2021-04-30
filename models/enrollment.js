'use strict';

module.exports = (sequelize, DataTypes) => {
  const Enrollment = sequelize.define('Enrollment', {
    userId: {
      type: DataTypes.INTEGER,
    },
    courseId: {
      type: DataTypes.INTEGER,
    },
    isPaidSubscription: {
      type: DataTypes.BOOLEAN,
    },
  });

  Enrollment.associate = (models) => {
    Enrollment.belongsTo(models.User, {
      foreignKey: 'userId',
    });
    Enrollment.belongsTo(models.Course, {
      foreignKey: 'courseId',
    }); 
    Enrollment.hasMany(models.Feedback, {
      foreignKey: 'enrollmentId',
    });   
    Enrollment.hasMany(models.LearnProgress, {
      foreignKey: 'enrollmentId',
    });     
  };

  return Enrollment;
};