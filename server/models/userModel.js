module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "users",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
        allowNull: false,
      },
      firstname: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
      lastname: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
      username: {
        type: DataTypes.STRING(30),
        allowNull: false,
        unique: true,
      },
      email: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      dateofbirth: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      notify: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false,
      },
      avatar: {
        type: DataTypes.BLOB,
        allowNull: true,
      },
    },
    { timestamps: true }, // Disable automatic timestamps if not needed
  );
  return User;
};
