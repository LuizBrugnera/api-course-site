const { User } = require('../models');

module.exports = {
  createUser: async (userData) => {
    return await User.create(userData);
  },

  getAllUsers: async () => {
    return await User.findAll();
  },

  getUserById: async (id) => {
    return await User.findByPk(id);
  },

  updateUser: async (id, updateData) => {
    const user = await User.findByPk(id);
    if (user) {
      await user.update(updateData);
      return user;
    }
    throw new Error('Usuário não encontrado');
  },

  deleteUser: async (id) => {
    const user = await User.findByPk(id);
    if (user) {
      await user.destroy();
      return true;
    }
    throw new Error('Usuário não encontrado');
  },
};
