const Event = require('./../../schemas/Event'); 

async function getAllEvents(req, res) {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = { getAllEvents };
