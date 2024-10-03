"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      name: DataTypes.STRING,
      password: DataTypes.STRING,
      email: DataTypes.STRING,
      role: DataTypes.STRING,
    },
    {}
  );

  User.associate = function (models) {
    // Um usuário pode ter muitas visualizações
    User.hasMany(models.View, { foreignKey: "userId" });
  };
  // Método para comparar senha
  User.prototype.comparePassword = function (password) {
    return bcrypt.compare(password, this.password);
  };

  // Hook para hashear a senha antes de salvar
  User.beforeCreate(async (user, options) => {
    const hash = await bcrypt.hash(user.password, 10);
    user.password = hash;
  });

  return User;
};
