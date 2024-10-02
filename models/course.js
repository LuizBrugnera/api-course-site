'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Course = sequelize.define('Course', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    mediaLink: DataTypes.STRING,
  }, {});

  Course.associate = function(models) {
    // Um curso tem muitos módulos
    Course.hasMany(models.Module, { foreignKey: 'courseId' });
    // Um curso tem muitas visualizações
    Course.hasMany(models.View, { foreignKey: 'courseId' });
  };

  return Course;
};
