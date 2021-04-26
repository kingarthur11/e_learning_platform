'use strict';

module.exports = (sequelize, DataTypes) => {
  const Categories = sequelize.define('categories', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    paranoid: true
  });

  Categories.associate = (models) => {
    Categories.hasMany(models.Course, {
      foreignKey: {
        name: 'categoryId',
        allowNull: false
      },
      as: 'course'
    });
  };

  return Categories;
};
