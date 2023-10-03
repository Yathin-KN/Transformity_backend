require("dotenv").config();
const bcrypt = require("bcrypt");
const User = require("./../../schemas/user");

const setUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const file = req.file;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      username,
      email,
      password: hashedPassword,
      profilePic: " ",
    });

    await user.save();

    res.status(201).json({
      message: "User created successfully",
      user: {
        user_id: user.user_id,
        email: user.email,
      },
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

module.exports = {
  setUser,
};
