const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../models");

const User = db.users;

const signUp = async (req, res) => {
  try {
    //Veritabanında yer alan sütunlara karşılık gelen request body alanları
    const {
      firstname,
      lastname,
      username,
      email,
      password,
      dateofbirth,
      notify,
    } = req.body;

    //Veritabanına kaydedilecek kullanıcı bilgileri
    const data = {
      firstname,
      lastname,
      username,
      email,
      password: await bcrypt.hash(password, 16), //Şifre hash'lenmesi
      dateofbirth,
      notify,
    };

    //Yeni kullanıcı kaydı oluştur
    const user = await User.create(data);

    //Kullanıcı oluşturma işlemi başarısız olursa 409 koduyla hata mesajı gönder
    if (!user) {
      return res.status(409).send("Bilgiler doğru değil");
    }

    //Yanıt olarak kayıt edilen kullanıcı bilgilerini gönder
    return res.status(200).send(user);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message:
        "Bilinmeyen bir hata oluştu. Lütfen daha sonra tekrar deneyiniz.",
    });
  }
};

const login = async (req, res) => {
  try {
    //Giriş işlemi için gerekli olan request body alanları
    const { email, password } = req.body;

    //Kullanıcının girdiği email veritabanında yer alıyor mu?
    const user = await User.findOne({
      where: {
        email: email,
      },
    });

    //Email veritabanında yoksa 409 koduyla hata mesajı gönder
    if (!user)
      return res
        .status(409)
        .json({ message: "Bilgileri kontrol edip tekrar deneyiniz." });

    //Girilen şifre veritabanında yer alan şifre ile eşleşiyor mu
    const isSame = await bcrypt.compare(password, user.password);

    //Eğer şifreler eşleşmiyorsa 409 koduyla hata mesajı gönder
    if (!isSame) {
      return res
        .status(409)
        .json({ message: "Bilgileri kontrol edip tekrar deneyiniz." });
    }

    //Kullanıcı doğrulaması ve diğer işlemler için bir JWT oluştur
    let token = jwt.sign({ id: user.id }, process.env.secretKey, {
      //Test aşamasında olduğu için JWT süresi 1 saat
      //JWT geçerlilik süresi
      expiresIn: 1 * 60 * 60,
    });

    //Yanıt çerezi olarak tokeni gönder
    res.cookie("x-access-token", token, {
      maxAge: 1 * 60 * 60,
      httpOnly: true,
    });

    //console.log("user", JSON.stringify(user, null, 2));
    console.log(token);

    return res.status(200).send({ token, user });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message:
        "Bilinmeyen bir hata oluştu. Lütfen daha sonra tekrar deneyiniz.",
    });
  }
};

const getAll = async (req, res) => {
  try {
    const id = req.user.id;

    const user = await User.findByPk(id);

    if (!user)
      return res
        .status(409)
        .json({ message: "Bilgileri kontrol edip tekrar deneyiniz." });

    return res.status(200).send(user);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message:
        "Bilinmeyen bir hata oluştu. Lütfen daha sonra tekrar deneyiniz.",
    });
  }
};

const getAvatar = async (req, res) => {
  try {
    const id = req.user.id;

    const user = await User.findByPk(id, {
      attributes: ["avatar"],
    });

    if (!user)
      return res
        .status(409)
        .json({ message: "Bilgileri kontrol edip tekrar deneyiniz." });

    res.setHeader("Content-Type", "image/jpeg");
    return res.status(200).send(user.avatar);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message:
        "Bilinmeyen bir hata oluştu. Lütfen daha sonra tekrar deneyiniz.",
    });
  }
};
module.exports = {
  signUp,
  login,
  getAll,
  getAvatar,
};
