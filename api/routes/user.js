const express = require("express");
const router = express.Router();
const Userscontroller=require("../controllers/userscontroller")
const validateAuth = require("../middleware/auth");

//rutas

//ruta para el registro del usuario necesita un req.body con name, email y el password
router.post("/register", Userscontroller.register);

//ruta para el login del usuario requiere req.body con email y el password
router.post("/login", Userscontroller.login);


router.get("/me", validateAuth, (req, res) => {
    res.send(req.user);
  });


module.exports = router;