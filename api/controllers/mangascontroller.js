const axios = require("axios");

class Mangascontroller {
  static async search(req, res) {
    try {
      const name = req.params.name;

      const {data} = await axios(`https://api.jikan.moe/v4/manga?q=${name}`);

      return res.status(200).send(data.data);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }

  static async one(req, res) {
    try {
      const id = req.params.id;
      const {data} = await axios(`https://api.jikan.moe/v4/manga/${id}`);

      return res.status(200).send(data.data);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }
}

module.exports = Mangascontroller;
