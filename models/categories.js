module.exports = (sequelize, DataTypes) => {
  const Categories = sequelize.define('Categories', {
    name: {
      type: DataTypes.STRING,
    },
  });

  Categories.associate = (models) => {
    Categories.hasMany(models.Course, {
      foreignKey: 'categoryId',
    });
  };

  return Categories;
};
