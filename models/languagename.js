'use strict';

module.exports = (sequelize, DataTypes) => {
  const LanguageName = sequelize.define('languageName', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    paranoid: true
  });

  LanguageName.associate = (models) => {
    LanguageName.hasMany(models.Course, {
      foreignKey: {
        name: 'languageId',
        allowNull: false
      },
      as: 'course'
    });
  };

  return LanguageName;
};
