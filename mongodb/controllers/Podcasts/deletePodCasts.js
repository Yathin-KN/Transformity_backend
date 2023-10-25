const Podcast = require('./../../schemas/podcast');

const deletePodCast = async (req, res) => {
  try {
    const { podcastId } = req.params;
    const deletedPodcast = await Podcast.findOneAndDelete({ podcastId });

    if (!deletedPodcast) {
      return res.status(404).json({ message: 'Podcast not found' });
    }

    return res.status(200).json({ message: 'Podcast deleted successfully', deletedPodcast });
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error', error: error.message });
  }
};

module.exports = {
  deletePodCast,
};
