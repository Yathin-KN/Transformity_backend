const Event = require("./../../schemas/Event");
const { uploadFile } = require("./../../middleware/s3");
const addEvent = async (req, res) => {
    console.log(req.body)
  try {
    const {
      title,
      desc,
      username,
      eventTime,
      eventLocation,
      eventDescription,
      startDate,
      endDate,
      eventId,
      user_id
    } = req.body;
    const file = req.file;

    let result;
    if (file) {
      result = await uploadFile(file);
    } else {
   
      result = {}; 
    }
   

    const newEvent = new Event({
      title,
      desc,
      photo : result ? result.Location : null,
      username,
      startDate,
      endDate,
      eventTime,
      eventLocation,
      eventDescription,
      eventId,
      user_id,
    });

    await newEvent.save();

    res.status(201).json({
      message: 'Event created successfully',
      eventId: newEvent.eventId,
    });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
};

module.exports = {
  addEvent,
};
