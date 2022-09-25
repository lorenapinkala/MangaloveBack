const express = require("express");
const router = express.Router();
const Mangascotroller=require("../controllers/mangascontroller")


//rutas
//buscar mangas por id a traves de params
router.get('/:name', Mangascotroller.search)





module.exports = router;