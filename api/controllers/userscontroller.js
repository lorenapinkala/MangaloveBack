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
      console.log("error", error);
      res.status(500).send(error);
    }
  }

  static async login(req, res) {
    try {
      //req.body por formulario
      const { email, password } = req.body;
      //busca en la base de datos al usuario con ese email
      const user = await User.findOne({
        where: { email: email },
      });
      //si no esta no esta autorizado
      if (!user) return res.sendStatus(401);
      //valida si la password es correcta
      const isValid = await User.validatePassword(password);
      if (!isValid) return res.sendStatus(401);

      //informacion con la que se genera el token
      const payload = await{
        name: securityGuard.name,
        email: securityGuard.email,
      };

      const token =await generateToken(payload);

      return res.status(201).send(token);
    } catch (error) {
      console.log("error",error)
      res.status(500).send(error);
    }
  }
}

module.exports = Userscontroller;
