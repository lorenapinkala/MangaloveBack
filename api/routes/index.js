const express = require("express");
const router = express.Router();

const userRouter = require("./user");
const favouriteRouter = require("./favourites");
const mangasRouter= require("./mangas")


router.use("/user", userRouter);
router.use("/favourites", favouriteRouter);
router.use("/mangas", mangasRouter);

module.exports = router;