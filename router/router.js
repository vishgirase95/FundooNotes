const express = require("express");
const controller = require("../controller/controller.js");
const router = express.Router();
const newUserValidator = require("../middleware/validation.js");
const Authencated=require("../middleware/authenticate.js")


router.post("/register", newUserValidator, controller.Registration);
router.post("/login", controller.login);
router.post("/addnote",Authencated, controller.AddNotes);

router.get("/getnote",Authencated, controller.getByUserId);
router.get("/isDelete",Authencated, controller.DeletedNotes);
router.get("/isArchived",Authencated, controller.isArchived);
router.patch("/isUpdate",Authencated, controller.updateByNoteId);
router.delete("/trashnote",Authencated, controller.trashNoteByNoteID);






router.get("/", (req, res) => {
  try {
    res.json("wellcome");
  } catch (error) {
    res.send("error", error);
  }
});

module.exports = router;