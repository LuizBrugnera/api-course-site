const { Module, Course, Episode } = require('../models');

module.exports = {
  createModule: async (moduleData) => {
    return await Module.create(moduleData);
  },

  getAllModules: async () => {
    return await Module.findAll({
      include: [Course, Episode],
    });
  },

  getModuleById: async (id) => {
    return await Module.findByPk(id, {
      include: [Course, Episode],
    });
  },

  updateModule: async (id, updateData) => {
    const module = await Module.findByPk(id);
    if (module) {
      await module.update(updateData);
      return module;
    }
    throw new Error('Módulo não encontrado');
  },

  deleteModule: async (id) => {
    const module = await Module.findByPk(id);
    if (module) {
      await module.destroy();
      return true;
    }
    throw new Error('Módulo não encontrado');
  },
};
