const jwt = require("jsonwebtoken");



const auth = (req, res, next) => {
  const token = req.headers["token"]
  console.log("token", token);
  console.log("req.body", req);



  const verified = jwt.verify(token, "vishalgirase", (err, decoded) => {
    if (err) {
      console.log("Decoded", decoded)
      console.log("error", err)

      return res.status(401).send({
        messege: "Not Authencated"
      });
    } else {
      console.log("decoded", decoded);
      req.body['data'] = decoded
      console.log("req.body after decoding", req.body);

      //   req.token = decoded
      next();
    }

  });
  console.log("verified", verified);

};
console.log("auth ",auth);
module.exports = auth;