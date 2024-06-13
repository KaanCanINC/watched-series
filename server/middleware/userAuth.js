const db = require("../models");
const jwt = require("jsonwebtoken");

const User = db.users;

const createUser = async (req, res, next) => {
  try {
    //Kullanıcı adı başka bir kullanıcı tarafından kullanılıyor mu?
    const username = await User.findOne({
      where: {
        username: req.body.username,
      },
    });
    //Eğer kullanıcı adı başka bir kullanıcı tarafından kullanılıyorsa 409 hata koduyla hata mesajı gönder
    if (username) {
      return res.status(409).json({ message: "Kullanıcı adı alınmış" });
    }

    //Email başka bir hesap tarafından kullanılıyor mu?
    const isEmailExist = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    //Eğer email başka bir kullanıcı tarafından kullanılıyorsa 409 hata koduyla hata mesajı gönder
    if (isEmailExist) {
      return res.status(409).json({
        message: "Bu e-posta başka bir hesap tarafından kullanılıyor",
      });
    }

    next();
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Sunucu Hatasi" });
  }
};

//JWT geçerlilik kontrolü
const verifyToken = async (req, res, next) => {
  const token = await req.headers["x-access-token"];

  //token mevcut değilse hata gönder
  if (!token) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }

  try {
    //JWT doğrulaması ile token değişkenini doğrula
    jwt.verify(token, process.env.secretKey, (err, user) => {
      if (err) {
        return res.status(403).json({ message: "token dogrulanamadi" });
      }
      req.user = user;
      next();
    });
  } catch (error) {
    res.status(401).json({ message: "Token is not valid" });
  }
};

module.exports = { createUser, verifyToken };
