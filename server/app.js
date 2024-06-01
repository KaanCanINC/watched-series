const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv").config();
const cookieParser = require("cookie-parser");
const { Sequelize } = require("sequelize");
const User = require("./models");
const userRoutes = require("./routes/userRoutes");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

User.sync().then(() => {
  console.log("veritabanı yeniden eşitlendi");
});

app.use("/api/users", userRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
