const { validateToken } = require("../config/token");

const validateAuth = (req, res, next) => {
  const token = req.cookies.user;
  if (!token) return res.sendStatus(401);

  const {user} = validateToken(token);
  if (!user) return res.sendStatus(401);

  req.user = user;

  next();
};

module.exports =  validateAuth ;