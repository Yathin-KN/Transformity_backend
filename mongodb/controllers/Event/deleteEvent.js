const Event = require("./../../schemas/Event");

const deleteEvent = async (req, res) => {
  try {
    const { eventId, user_id } = req.params;

    const event = await Event.findOne({ eventId });

    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }

    if (event.user_id !== user_id) {
      return res.status(403).json({ message: 'Unauthorized. User does not have permission to delete this event' });
    }

    await Event.deleteOne({ eventId });

    res.json({ message: 'Event deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
};

module.exports = {
  deleteEvent,
};
