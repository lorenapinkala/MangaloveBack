const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const models = require("./models");

const db = require("./db"); //carpeta de configuracion de db
const router = require("./routes");
require("dotenv").config();

// logging middleware
app.use(morgan("tiny"));

// parsing middleware
app.use(express.json());
app.use(cookieParser());

app.use(cors());

app.use("/api", router);

// error middleware -> https://expressjs.com/es/guide/error-handling.html
app.use((err, req, res, next) => {
  console.log("ERROR");
  console.log(err);
  res.status(500).send(err.message);
});

db.sync({ force: false }).then(() => {
  app.listen(process.env.PORT, () =>
    console.log("server levantado en puerto 3001")
  );
});
