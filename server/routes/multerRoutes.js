const express = require("express");
const { verifyToken } = require("../middleware/userAuth");
const upload = require("../multer");
const avatarUpload = require("../controllers/multerController");

const router = express.Router();

router.put("/avatar", verifyToken, upload.single("avatar"), avatarUpload);

module.exports = router;
