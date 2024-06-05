const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../models");

const User = db.users;

const signUp = async (req, res) => {
  try {
    const {
      firstname,
      lastname,
      username,
      email,
      password,
      dateofbirth,
      notify,
    } = req.body;

    const data = {
      firstname,
      lastname,
      username,
      email,
      password: await bcrypt.hash(password, 16),
      dateofbirth,
      notify,
    };

    const user = await User.create(data);

    if (user) {
      let token = jwt.sign({ id: user.id }, process.env.secretKey, {
        expiresIn: 1 * 24 * 60 * 60 * 1000,
      });

      res.cookie("jwt", token, { maxAge: 1 * 24 * 60 * 60, httpOnly: true });
      console.log("user", JSON.stringify(user, null, 2));
      console.log(token);

      return res.status(200).send(user);
    } else {
      return res.status(409).send("Bilgiler doğru değil");
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Sunucu hatası" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({
      where: {
        email: email,
      },
    });

    if (!user) return res.status(409).json({ message: "Bilgiler doğru değil" });

    const isSame = await bcrypt.compare(password, user.password);

    if (!isSame) {
      return res.status(409).json({ message: "Bilgiler doğru değil" });
    }
    let token = jwt.sign({ id: user.id }, process.env.secretKey, {
      expiresIn: 1 * 24 * 60 * 60 * 1000,
    });

    res.cookie("jwt", token, {
      maxAge: 1 * 24 * 60 * 60,
      httpOnly: true,
    });

    console.log("user", JSON.stringify(user, null, 2));
    console.log(token);

    return res.status(200).send({ token, user });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Sunucu hatası" });
  }
};

module.exports = {
  signUp,
  login,
};
