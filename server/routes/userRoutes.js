const express = require("express");
const userController = require("../controllers/userController");
const userAuth = require("../middleware/userAuth");
const { signUp, login } = userController;

const router = express.Router();

router.post("/signup", userAuth.createUser, signUp);

router.post("/login", login);

module.exports = router;
