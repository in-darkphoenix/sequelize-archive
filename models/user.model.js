const { DataTypes } = require("sequelize");
const sequelize = require("../database/db-connection");

const User = sequelize.define(
  "user",
  {
    id: {
      type: DataTypes.UUIDV4,
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = User;
