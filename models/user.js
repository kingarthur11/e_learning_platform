'use strict';

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    confirm_password: DataTypes.STRING,
    resetPassword: DataTypes.STRING,
    resetPasswordExpires: DataTypes.DATE
  });

  User.associate = (models) => {
    User.hasMany(models.Enrollment, {
      foreignKey: 'userId',
    });  
  };

  return User;
};