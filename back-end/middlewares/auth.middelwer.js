const jwt = require("jsonwebtoken");
const UserModel = require("../Model/model");

module.exports.checkUser = (req, res, next) => {
  const token = req.cookies.jwt;
  // Si on a un token
  if (token) {
    // Verificaion du token
    jwt.verify(token, process.env.TOKEN_SECRET, async (err, decodedToken) => {
      // Si on a une erreur
      if (err) {
        res.locals.user = null;
        res.cookie("jwt", "", { maxAge: 1 });
        next();
      } else {
        let user = await UserModel.findById(decodedToken.id);
        res.locals.user = user;
        // console.log(user);
        console.log("Token found");
        next();
      }
    });
  } else {
    res.locals.user = null;
    next();
    
  }
};

module.exports.requireAuth = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, process.env.TOKEN_SECRET, async (err, decodedToken) => {
      if (err) {
        console.log(err);
      } else {
        // res.send(decodedToken.id);
        console.log(decodedToken.id);

        next();
      }
    });
  } else {
    res.send("No token");
    console.log("No Token found");
  }
};
