const Feedback = require('../../schemas/feedback');

const addFeedback = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const newFeedback = new Feedback({
      name,
      email,
      message,
    });

    await newFeedback.save();

    res.status(201).json({ message: 'Feedback submitted successfully', feedback: newFeedback });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
};

module.exports = {
  addFeedback,
};
