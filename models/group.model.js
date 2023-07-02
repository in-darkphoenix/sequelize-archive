const { DataTypes } = require("sequelize");
const sequelize = require("../database/db-connection");

const Group = sequelize.define(
  "group",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Group;
