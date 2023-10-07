const Event = require('./../../schemas/Event');

async function getEventById(req, res) {
  const { eventId } = req.params;

  try {
    const event = await Event.findOne({ eventId }); // Assuming eventId is unique
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }
    res.json(event);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = { getEventById };
