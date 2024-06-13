const express = require("express");
const userAuth = require("../middleware/userAuth");
const {
  signUp,
  login,
  getAll,
  getAvatar,
} = require("../controllers/userController");

const router = express.Router();

router.post("/signup", userAuth.createUser, signUp);

router.post("/login", login);

router.get("/auth", userAuth.verifyToken, (req, res) => {
  res.status(200).send();
});

router.get("/getall", userAuth.verifyToken, getAll);

router.get("/avatar", userAuth.verifyToken, getAvatar);

module.exports = router;
