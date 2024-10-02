'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
  }, {});

  User.associate = function(models) {
    // Um usuário pode ter muitas visualizações
    User.hasMany(models.View, { foreignKey: 'userId' });
  };

  return User;
};
