'use strict';

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstname: {
      type: DataTypes.STRING,
    },
    lastname: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    confirm_password: {
      type: DataTypes.STRING,
    },
    resetpasswordexpires: {
      type: DataTypes.DATE,
    },
    resetPassword: {
      type: DataTypes.STRING,
    },
  });

  User.associate = (models) => {
    User.hasMany(models.Enrollment, {
      foreignKey:  'userId',
    });
  };

  return User;
};