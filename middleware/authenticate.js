const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const token = req.headers["token"];

  const verified = jwt.verify(token, "vishalgirase", (err, decoded) => {
    if (err) {
      return res.status(401).send({
        messege: "Not Authencated",
      });
    } else {
      req.body["data"] = decoded;
      next();
    }
  });
};
console.log("auth ", auth);
module.exports = auth;
