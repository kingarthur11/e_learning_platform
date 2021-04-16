'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    confirm_password: DataTypes.STRING,
    resetPassword: DataTypes.STRING,
    resetPasswordExpires: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        User.hasMany(models.Todo);
      }
    }
  });
  return User;
};