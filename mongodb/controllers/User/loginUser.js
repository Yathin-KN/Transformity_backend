const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("./../../schemas/user");

const generateTokens = (user) => {
  const accessToken = jwt.sign(
    { userId: user.user_id, username: user.username, email: user.email },
    process.env.SECRET_KEY,
    { expiresIn: "1d" }
  );

  const refreshToken = jwt.sign(
    { userId: user.user_id },
    process.env.REFRESH_SECRET_KEY,
    { expiresIn: "7d" }
  );

  return { accessToken, refreshToken };
};

const signinUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }
    const { accessToken, refreshToken } = generateTokens(user);
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    res
      .status(200)
      .json({
        message: "Signin successful",
        user_id: user.user_id,
        email:user.email,
        access_token: accessToken,
      });

  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

module.exports = {
  signinUser,
};
