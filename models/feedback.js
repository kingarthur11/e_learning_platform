'use strict';

module.exports = (sequelize, DataTypes) => {
  const Feedback = sequelize.define('feedback', {
    enrollmentId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ratingScore: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    feedbackText: {
      type: DataTypes.STRING,
      allowNull: false
    },
    submitionDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
  }, {
    paranoid: true
  });

  Feedback.associate = (models) => {
    Feedback.belongsTo(models.Enrollment, {
      foreignKey: {
        name: 'enrollmentId',
        allowNull: false
      },
      as: 'feedback'
    });
  };

  return Feedback;
};