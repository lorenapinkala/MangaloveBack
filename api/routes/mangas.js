const express = require("express");
const router = express.Router();
const Mangascontroller=require("../controllers/mangascontroller")


//rutas
//buscar mangas por id a traves de params
router.get('search/:name', Mangascontroller.search)

router.get('onemanga/:id', Mangascontroller.one)



module.exports = router;