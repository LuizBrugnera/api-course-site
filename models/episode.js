'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Episode = sequelize.define('Episode', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    mediaLink: DataTypes.STRING,
    moduleId: DataTypes.INTEGER,
  }, {});

  Episode.associate = function(models) {
    // Um episódio pertence a um módulo
    Episode.belongsTo(models.Module, { foreignKey: 'moduleId' });
    // Um episódio tem muitas visualizações
    Episode.hasMany(models.View, { foreignKey: 'episodeId' });
  };

  return Episode;
};
