const moduleService = require('../services/moduleService');

module.exports = {
  createModule: async (req, res) => {
    try {
      const module = await moduleService.createModule(req.body);
      res.status(201).json(module);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getAllModules: async (req, res) => {
    try {
      const modules = await moduleService.getAllModules();
      res.json(modules);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getModuleById: async (req, res) => {
    try {
      const module = await moduleService.getModuleById(req.params.id);
      if (module) {
        res.json(module);
      } else {
        res.status(404).json({ error: 'Módulo não encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  updateModule: async (req, res) => {
    try {
      const module = await moduleService.updateModule(req.params.id, req.body);
      res.json(module);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  deleteModule: async (req, res) => {
    try {
      await moduleService.deleteModule(req.params.id);
      res.json({ message: 'Módulo excluído com sucesso' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};
