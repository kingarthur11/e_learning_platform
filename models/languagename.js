'use strict';

module.exports = (sequelize, DataTypes) => {
  const LanguageName = sequelize.define('LanguageName', {
    name: {
      type: DataTypes.STRING,
    },
  });

  LanguageName.associate = (models) => {
    LanguageName.hasMany(models.Course, {
      foreignKey: 'languageId',
    });
  };

  return LanguageName;
};
