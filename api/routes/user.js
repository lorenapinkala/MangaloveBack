const express = require("express");
const router = express.Router();
const Userscontroller=require("../controllers/userscontroller")

//rutas

//ruta para el registro del usuario necesita un req.body con name, email y el password
router.post("/register", Userscontroller.register);




module.exports = router;