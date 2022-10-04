const User = require("../models/User");

class Userscontroller {

  static async register(req, res) {
    try {
      const { name, email, password } = req.body;
      const user = await User.create({
        //crea el user
        name: name,
        email: email,
        password: password,
      });

      return res.status(201).send(user);
    } catch (error) {
      console.log("error",error)
      res.status(500).send(error);
    }
  }
}

module.exports = Userscontroller;
