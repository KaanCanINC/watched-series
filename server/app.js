const express = require("express");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const db = require("./models");
const userRoutes = require("./routes/userRoutes");
const multerRoutes = require("./routes/multerRoutes");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3001;

app.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept",
  );
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

db.sequelize.sync({ force: false }).then(() => {
  console.log("veritabanı yeniden eşitlendi");
});

app.use("/api/users", userRoutes);
app.use("/api", multerRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
