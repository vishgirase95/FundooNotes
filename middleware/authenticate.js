const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const token = req.header;
  console.log("token",token);
  console.log("req.body",req.body);

  const verified = jwt.verify(token, "vishalgirase", (err, decoded) => {
    if (err) {
        console.log("Decoded",decoded)

        return res.status(401).send({ messege: "Not Authencated" });
    } else {
      req.Token = decoded;
      next();
    }
    
  });
  console.log("verified",verified);

};

module.exports = auth;
