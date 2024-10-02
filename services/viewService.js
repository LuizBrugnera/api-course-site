const { View, User, Course, Episode } = require('../models');

module.exports = {
  createView: async (viewData) => {
    return await View.create(viewData);
  },

  getAllViews: async () => {
    return await View.findAll({
      include: [User, Course, Episode],
    });
  },

  getViewById: async (id) => {
    return await View.findByPk(id, {
      include: [User, Course, Episode],
    });
  },

  updateView: async (id, updateData) => {
    const view = await View.findByPk(id);
    if (view) {
      await view.update(updateData);
      return view;
    }
    throw new Error('Visualização não encontrada');
  },

  deleteView: async (id) => {
    const view = await View.findByPk(id);
    if (view) {
      await view.destroy();
      return true;
    }
    throw new Error('Visualização não encontrada');
  },
};
