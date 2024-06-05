const express = require("express");
const userAuth = require("../middleware/userAuth");
const { signUp, login } = require("../controllers/userController");

const router = express.Router();

router.post("/signup", userAuth.createUser, signUp);

router.post("/login", login);

module.exports = router;
