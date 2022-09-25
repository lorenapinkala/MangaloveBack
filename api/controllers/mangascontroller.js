const axios = require("axios");

class Mangascotroller {
  static async search(req, res) {
    try {
      const name = req.params.name;
      console.log('recibo esto',name)
      const manga = await axios(`https://api.jikan.moe/v4/manga?q=${name}`);

      return res.status(200).send(manga.data.data);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }
}

module.exports = Mangascotroller;
