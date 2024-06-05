const { Sequelize, DataTypes } = require("sequelize");

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

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./userModel")(sequelize, DataTypes);

module.exports = db;
