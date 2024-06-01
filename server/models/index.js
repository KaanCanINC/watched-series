const { Sequelize } = require("sequelize");
const dotenv = require("dotenv").config();

const sequelize = new Sequelize(
  `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@localhost:${process.env.DB_PORT}/${process.env.DB_NAME}`,
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Sequelize baglantisi basarili");
  })
  .catch((error) => {
    console.error(error);
  });

const User = sequelize.define(
  "users",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
      allowNull: false,
    },
    firstname: {
      type: Sequelize.STRING(30),
      allowNull: false,
    },
    lastname: {
      type: Sequelize.STRING(30),
      allowNull: false,
    },
    username: {
      type: Sequelize.STRING(30),
      allowNull: false,
      unique: true,
    },
    email: {
      type: Sequelize.STRING(50),
      allowNull: false,
      unique: true,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    dateofbirth: {
      type: Sequelize.DATEONLY,
      allowNull: false,
    },
    notify: {
      type: Sequelize.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },
  },
  { timestamps: true }, // Disable automatic timestamps if not needed
);

module.exports = User;
