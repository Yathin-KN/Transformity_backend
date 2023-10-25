const Podcast = require('../../schemas/podcast');

const getAllPodcasts = async (req, res) => {
  try {
    const podcasts = await Podcast.find({});
    res.status(200).json(podcasts);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
};

module.exports = {
  getAllPodcasts,
};
