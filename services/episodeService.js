const { Episode, Module, View } = require('../models');

module.exports = {
  createEpisode: async (episodeData) => {
    return await Episode.create(episodeData);
  },

  getAllEpisodes: async () => {
    return await Episode.findAll({
      include: [Module, View],
    });
  },

  getEpisodeById: async (id) => {
    return await Episode.findByPk(id, {
      include: [Module, View],
    });
  },

  updateEpisode: async (id, updateData) => {
    const episode = await Episode.findByPk(id);
    if (episode) {
      await episode.update(updateData);
      return episode;
    }
    throw new Error('Episódio não encontrado');
  },

  deleteEpisode: async (id) => {
    const episode = await Episode.findByPk(id);
    if (episode) {
      await episode.destroy();
      return true;
    }
    throw new Error('Episódio não encontrado');
  },
};
