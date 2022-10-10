const User = require("../models/User");
const {generateToken}=require('../config/token')

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
      console.log("error", error);
      res.status(500).send(error);
    }
  }

  static async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({
        where: { email },
      });
      console.log(user)
      if (!user) return res.sendStatus(401);
      const isValid = await user.validatePassword(password);
      if (!isValid) return res.sendStatus(401);

      const payload = {
        email: user.email,
        name: user.name,
      };

      const token = generateToken(payload);

      return res.cookie("user", token).send(payload);
    } catch (error) {
      console.log('error',error)
      res.status(500).send(error);
    }
  }
}

module.exports = Userscontroller;
