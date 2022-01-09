const DataModel = require("../model/model.js");
const bcrypt = require("bcrypt");
var jwt = require('jsonwebtoken');



class UserRegitration {
  async UserRegitration(body) {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(body.Password, salt);
    console.log(hashedPassword);
    body.Password = hashedPassword;
    console.log("secure messege", body)
    const data = await DataModel.create(body);

    return data;
  }



  async login(body) {

    console.log("login detail", body);
    const SearchDATA = await DataModel.findOne({
      Email: body.Email
    })

    var token = jwt.sign({ id: '61d90ed65bb9c2502c23f717', email:"vishgirase@gmail" }, 'shhhhh');
  
    
    const MatchPassword = await bcrypt.compare(body.Password, SearchDATA.Password)
    console.log("Pasword Match :", MatchPassword);
    if (body.Email == SearchDATA.Email) {

      if (MatchPassword) {
        console.log("Login is Sucessfull");
        return token;
      } else {
        console.log("Login attemp failed");

        throw new Error("Login Pasword wrong");
      }

    }

  }
}

module.exports = new UserRegitration();