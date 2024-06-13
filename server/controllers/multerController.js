const db = require("../models");

const User = db.users;

const avatarUpload = async (req, res) => {
  try {
    const userId = req.user.id;
    const avatar = req.file.buffer;

    const user = await User.findOne({
      where: {
        id: userId,
      },
    });

    user.avatar = avatar;

    await user.save();

    return res.status(200);
  } catch (error) {
    console.error(error);
    res.status(404);
  }
};

module.exports = avatarUpload;
