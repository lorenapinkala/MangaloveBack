const S = require("sequelize");
const db = require("../db/index");

class Favourites extends S.Model {
 
}

Favourites.init(
  {
    name: {
      type: S.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },

    genre: {
      type: S.STRING,
      isUnique: true,
      allowNull: false,
      validate: {
        isEmail: true,
        notEmpty: true,
      },
    },
    
    stars: {
      type: S.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
   
  },
  { sequelize: db, modelName: "favourites" }
);



module.exports = Favourites;