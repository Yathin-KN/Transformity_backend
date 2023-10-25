const Podcast = require('../../schemas/podcast');

const createPodcast = async (req, res) => {
  try {
    const { category, description, image, link , userId } = req.body;

    const newPodcast = new Podcast({
      category,
      description,
      image,
      link,
      userId
    });

    await newPodcast.save();

    res.status(201).json({ message: 'Podcast created successfully', podcast: newPodcast });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
};

module.exports = {
  createPodcast,
};
