const express = require("express");
const controller = require("../controller/controller.js");
const router = express.Router();
const newUserValidator = require("../middleware/validation.js");


router.post("/register", newUserValidator, controller.Registration);
router.post("/register/login", controller.login);

router.get("/", (req, res) => {
  try {
    res.json("wellcome");
  } catch (error) {
    res.send("error", error);
  }
});

module.exports = router;