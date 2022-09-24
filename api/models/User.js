const S = require("sequelize");
const db = require("../db/index");

class User extends S.Model {
 
}

User.init(
  {
    name: {
      type: S.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },

    email: {
      type: S.STRING,
      isUnique: true,
      allowNull: false,
      validate: {
        isEmail: true,
        notEmpty: true,
      },
    },
    
    password: {
      type: S.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
   
  },
  { sequelize: db, modelName: "user" }
);



module.exports = User;