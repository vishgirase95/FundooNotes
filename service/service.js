const DataModel = require("../model/model.js");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const AddNoteModel = require("../model/notes.model.js");
const {
  Model
} = require("mongoose");

class UserRegitration {
  async UserRegitration(body) {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(body.Password, salt);
    console.log(hashedPassword);
    body.Password = hashedPassword;
    console.log("userID", body.data.UserID);

    const regData = await DataModel.create(body);
    return regData;
  }




  async login(body) {
    const SearchDATA = await DataModel.findOne({
      Email: body.Email,
    });

    console.log("login detail", SearchDATA);

    console.log("id" + SearchDATA._id);
    const MatchPassword = await bcrypt.compare(
      body.Password,
      SearchDATA.Password
    );
    console.log("Pasword Match :", MatchPassword);
    if (body.Email == SearchDATA.Email) {
      var token = jwt.sign({
          email: SearchDATA.Email,
          ID: SearchDATA._id,
        },
        "vishalgirase"
      );
      const TokenData = {
        token: token,
        UserID: SearchDATA._id,
      };
      if (MatchPassword) {
        console.log("Login is Sucessfull");
        return TokenData;
      } else {
        console.log("Login attemp failed");

        throw new Error("Login Pasword wrong");
      }
    }
  }




  async AddNotes(body) {
    body.UserID = body.data.ID;

    const newNote = await AddNoteModel.create(body);
    // console.log("user id",body.data.ID)

    return newNote;
  }
  // async getAllNote(req) {
  //   console.log("body in get all ", req.body);
  //   console.log("body in get userid ", req.body);
  //   console.log("req.body.id", req.body.data.ID);
  //   // console.log("body in get params ",body.params)
  //   // console.log("body in get userid ",body.params.UserID)

  //   const newNote = await AddNoteModel.find();
  //   return newNote;
  // }
  async getByUserNotesId(body) {
    const newNote = await AddNoteModel.find({
      UserID: body.data.ID
    });
    console.log("get note by user id", newNote);
    return newNote;
  }




  async DeletedNotes(req, res) {
    console.log("res", res);
    console.log("req body", req.body);

    const uniqueUserData = await AddNoteModel.find({
      UserID: req.body.data.ID,
      isDeleted: true,
    });
    // console.log("body.params",res.params);

    // const noteById=await  AddNoteModel.findById(req.params.id);
    // const noteById=await  AddNoteModel.findById(req.params.id);

    console.log("get req", req);
    return uniqueUserData;
  }




  async isArchived(req, res) {
    console.log("res", res);
    console.log("req body", req.body);

    const uniqueUserData = await AddNoteModel.find({
      UserID: req.body.data.ID,
      isArchived: "true",
    });


    console.log("get req", req);
    return uniqueUserData;
  }

  async updateByNoteId(req, res) {

    console.log("req body", req.body);
    console.log("req body note id", req.body.NoteID);
    const previousData = await AddNoteModel.find({
      _id: req.body.NoteID
    });
    console.log("previous data", previousData);


    const upDated = await AddNoteModel.updateOne({
      _id: req.body.NoteID
    }, {
      Title: req.body.Title,
      Descreption: req.body.Descreption,
      color: req.body.color,
      isArchived: req.body.isArchived,
      isDeleted: req.body.isDeleted,
      UserID: previousData.UserID,
    }, {
      new: true
    });

    console.log("get req", req);
    return upDated;
  }



  

  async trashNoteByNoteID(req) {
    const Deleted = await AddNoteModel.findOneAndDelete({
      _id: req.body.NoteID
    })
    return "Deleted Note";
  }



}

module.exports = new UserRegitration();