'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Module = sequelize.define('Module', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    number: DataTypes.INTEGER,
    courseId: DataTypes.INTEGER,
  }, {});

  Module.associate = function(models) {
    // Um módulo pertence a um curso
    Module.belongsTo(models.Course, { foreignKey: 'courseId' });
    // Um módulo tem muitos episódios
    Module.hasMany(models.Episode, { foreignKey: 'moduleId' });
  };

  return Module;
};
