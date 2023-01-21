const jwt = require("jsonwebtoken");

module.exports = veryfyToken = (req, res, next) => {
  const authorisation =
    req.query.token || req.body.token || req.headers["authorization"];
  const token = authorisation.split(" ")[1];
  console.log(token);
  if (!token) {
    return res.status(403).send("Token is required");
  }
  const decoded = jwt.verify(token, process.env.PRIVATE_KEY);
  res.user = decoded;
  next();
};
