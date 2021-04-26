'use strict';

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    confirm_password: DataTypes.STRING,
    resetPassword: DataTypes.STRING,
    resetPasswordExpires: DataTypes.DATE
  }, {
    paranoid: true
  });

  User.associate = (models) => {
    User.hasMany(models.Enrollment, {
      foreignKey: {
        name: 'userId',
        allowNull: false
      },
      as: 'enrollment'
    });  
  };

  return User;
};