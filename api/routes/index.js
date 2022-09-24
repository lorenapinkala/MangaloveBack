const express = require("express");
const router = express.Router();

const userRouter = require("./user");
const favouriteRouter = require("./favourites");


router.use("/user", userRouter);
router.use("/favourites", favouriteRouter);

module.exports = router;