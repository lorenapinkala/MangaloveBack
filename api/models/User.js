const S = require("sequelize");
const db = require("../db/index");
const bcrypt=require("bcrypt");

class User extends S.Model {

  hash(password, salt) {
    return bcrypt.hash(password, salt);
  }

  validatePassword(password) {
    return this.hash(password, this.salt).then(
      (newHash) => newHash === this.password
    );
  }
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

    salt: {
      type: S.STRING,
    },
  },
  { sequelize: db, modelName: "user" }
);

User.beforeCreate(async (user) => {
  const salt = bcrypt.genSaltSync();
  user.salt = salt;
  const hash = await user.hash(user.password, salt);
  return (user.password = hash);
});

module.exports = User;
