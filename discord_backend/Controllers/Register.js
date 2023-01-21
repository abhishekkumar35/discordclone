const User = require("../Models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = register = async (req, res) => {
  try {
    const { username, password, mail } = req.body;

    const userExists = await User.exists({ mail: mail.toLowerCase() });
    if (userExists) {
      return res.status(409).send("User already exists");
    } else {
      const encryptPassword = await bcrypt.hash(password, 10);

      // Create and save a user account
      const user = await User.create({
        username,
        mail: mail.toLowerCase(),
        password: encryptPassword,
      });

      // Create a jwt token
      const token = jwt.sign(user, process.env.PRIVATE_KEY, {
        expireIn: "24h",
      });

      res.status(201).json({
        userDetails: { mail: user.mail, token: token, username: user.username },
      });
    }
  } catch (err) {
    return res
      .status(500)
      .send("Error Occured ! Please Try Again , more details : " + err.message);
  }
};
