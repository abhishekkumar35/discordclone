const jwt = require("jsonwebtoken");
const User = require("../Models/user");
const bcrypt = require("bcryptjs");

module.exports = login = async (req, res) => {
  try {
    const { mail, password } = req.body;
    const user = await User.findOne({ mail: mail.toLowerCase() });

    if (user && bcrypt.compare(user.password, password)) {
      const token = jwt.sign(
        { userId: user._id, mail },
        process.env.PRIVATE_KEY,
        {
          expiresIn: "1h",
        }
      );
      res.status(200).json({ mail: user.mail, token });
    }
  } catch (err) {
    res.send(err);
  }
};
