const episodeService = require('../services/episodeService');

module.exports = {
  createEpisode: async (req, res) => {
    try {
      const episode = await episodeService.createEpisode(req.body);
      res.status(201).json(episode);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getAllEpisodes: async (req, res) => {
    try {
      const episodes = await episodeService.getAllEpisodes();
      res.json(episodes);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getEpisodeById: async (req, res) => {
    try {
      const episode = await episodeService.getEpisodeById(req.params.id);
      if (episode) {
        res.json(episode);
      } else {
        res.status(404).json({ error: 'Episódio não encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  updateEpisode: async (req, res) => {
    try {
      const episode = await episodeService.updateEpisode(req.params.id, req.body);
      res.json(episode);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  deleteEpisode: async (req, res) => {
    try {
      await episodeService.deleteEpisode(req.params.id);
      res.json({ message: 'Episódio excluído com sucesso' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};
