const express = require("express");
const User = require("../models");

const createUser = async (req, res, next) => {
  try {
    //Check username is exist
    const username = await User.findOne({
      where: {
        username: req.body.username,
      },
    });
    //If username exist in database send error
    if (username) {
      return res.status(409).json({ message: "Kullanıcı adı alınmış" });
    }
    //Email is exist in database
    const isEmailExist = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

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

module.exports = { createUser };
