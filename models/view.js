'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const View = sequelize.define('View', {
    userId: DataTypes.INTEGER,
    courseId: DataTypes.INTEGER,
    episodeId: DataTypes.INTEGER,
    stopTime: DataTypes.INTEGER,
    dateView: DataTypes.DATE,
  }, {});

  View.associate = function(models) {
    // Uma visualização pertence a um usuário
    View.belongsTo(models.User, { foreignKey: 'userId' });
    // Uma visualização pertence a um curso
    View.belongsTo(models.Course, { foreignKey: 'courseId' });
    // Uma visualização pertence a um episódio
    View.belongsTo(models.Episode, { foreignKey: 'episodeId' });
  };

  return View;
};
