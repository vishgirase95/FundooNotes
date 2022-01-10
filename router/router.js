const express = require("express");
const controller = require("../controller/controller.js");
const router = express.Router();
const newUserValidator = require("../middleware/validation.js");
const Authencated=require("../middleware/authenticate.js")


router.post("/user/register", newUserValidator, controller.Registration);
router.post("/user/login", controller.login);
router.post("/user/login/note/createnote",Authencated, controller.AddNotes);
router.post("/user/login/note/getallnote",Authencated, controller.getAll);
router.get("/user/login/note/getnotebyuserid",Authencated, controller.getByUserId);
// router.get("/user/login/note/getnotebyuserid/:",Authencated, controller.getByNoteId);



router.get("/", (req, res) => {
  try {
    res.json("wellcome");
  } catch (error) {
    res.send("error", error);
  }
});

module.exports = router;