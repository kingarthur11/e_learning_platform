'use strict';

module.exports = (sequelize, DataTypes) => {
  const Feedback = sequelize.define('Feedback', {
    enrollmentId: {
      type: DataTypes.INTEGER,
    },
    ratingScore: {
      type: DataTypes.INTEGER,
    },
    feedbackText: {
      type: DataTypes.STRING,
    },
    submitionDate: {
      type: DataTypes.DATE,
    },
  });

  Feedback.associate = (models) => {
    Feedback.belongsTo(models.Enrollment, {
      foreignKey: 'enrollmentId',
    });
  };

  return Feedback;
};