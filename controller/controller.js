const UserService = require("../service/service.js");
const StatusCodes =require('http-status-codes');



class Registration {
  Registration(req, res) {
    UserService.UserRegitration(req.body)
      .then((result) => {
        res.json({
          code:StatusCodes.StatusCodes.OK,
          data: result,
          message: "Registerd successfully",
        });
      })
      .catch((err) => {
        res.status(500).json({
          code: StatusCodes.StatusCodes.INTERNAL_SERVER_ERROR,
          data: err,
          message: "Registration Failed",
        });
      });
  }

  login(req, res) {
    UserService.login(req.body)
      .then((result) => {
        res.status(StatusCodes.StatusCodes.OK).json({
          code: StatusCodes.StatusCodes.OK,
          Token: result,
          message: "Sucessfully login!",
        });
      })
      .catch((err) => {
        res.status(StatusCodes.StatusCodes.INTERNAL_SERVER_ERROR).json({
          code: StatusCodes.StatusCodes.INTERNAL_SERVER_ERROR,
          data: err,
          message: "Login Failed",
        });
      });
  }


  AddNotes(req,res){
    UserService.AddNotes(req.body).then((result)=>{
      res.status(StatusCodes.StatusCodes.OK).json({
        code:StatusCodes.StatusCodes.OK,
        data:result,
        message:"Added Sucessfully"
      }).catch((er)=>{
        res.status(StatusCodes.StatusCodes.INTERNAL_SERVER_ERROR).json({
          code: StatusCodes.StatusCodes.INTERNAL_SERVER_ERROR,
          data: er,
          message: "Adding Note Failed",
        });
      })
    })
  }



  getAll(req,res){
    UserService.getAllNote(req,res).then((result)=>{
      res.status(StatusCodes.StatusCodes.OK).json({
        code:StatusCodes.StatusCodes.OK,
        data:result,
        message:"Getting All Sucessfully"
      }).catch((er)=>{
        res.status(StatusCodes.StatusCodes.INTERNAL_SERVER_ERROR).json({
          code: StatusCodes.StatusCodes.INTERNAL_SERVER_ERROR,
          data: er,
          message: "Getting Notes Failed",
        });
      })
    })
  }


  
  getByUserId(req,res){
    UserService.getByUserNotesId(req.body).then((result)=>{
      res.status(StatusCodes.StatusCodes.OK).json({
        code:StatusCodes.StatusCodes.OK,
        data:result,
        message:"Got User Notes Sucessfully"
      }).catch((er)=>{
        res.status(StatusCodes.StatusCodes.INTERNAL_SERVER_ERROR).json({
          code: StatusCodes.StatusCodes.INTERNAL_SERVER_ERROR,
          data: er,
          message: "Getting Notes of User Failed",
        });
      })
    })
  }


  getByNoteId(req,res){
    UserService.ByNoteId(req,res).then((result)=>{
      res.status(StatusCodes.StatusCodes.OK).json({
        code:StatusCodes.StatusCodes.OK,
        data:result,
        message:"Got User Notes Sucessfully"
      }).catch((er)=>{
        res.status(StatusCodes.StatusCodes.INTERNAL_SERVER_ERROR).json({
          code: StatusCodes.StatusCodes.INTERNAL_SERVER_ERROR,
          data: er,
          message: "Getting Notes of User Failed",
        });
      })
    })
  }
}

module.exports = new Registration();
























//   async findAll(req, res) {
//     try {
//       const datafind = await DataModel.find(req.body);
//       res.status(200).json({
//         code: 200,
//         data: datafind,
//         message: "found data",
//       });
//     } catch (error) {
//       // res.send("error",error);
//       console.log("not working", error);
//     }
//   }
