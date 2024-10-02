const viewService = require('../services/viewService');

module.exports = {
  createView: async (req, res) => {
    try {
      const view = await viewService.createView(req.body);
      res.status(201).json(view);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getAllViews: async (req, res) => {
    try {
      const views = await viewService.getAllViews();
      res.json(views);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getViewById: async (req, res) => {
    try {
      const view = await viewService.getViewById(req.params.id);
      if (view) {
        res.json(view);
      } else {
        res.status(404).json({ error: 'Visualização não encontrada' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  updateView: async (req, res) => {
    try {
      const view = await viewService.updateView(req.params.id, req.body);
      res.json(view);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  deleteView: async (req, res) => {
    try {
      await viewService.deleteView(req.params.id);
      res.json({ message: 'Visualização excluída com sucesso' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};
