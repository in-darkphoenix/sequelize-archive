const { DataTypes } = require("sequelize");
const sequelize = require("../database/db-connection");

const Publication = sequelize.define(
  "publication",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Publication;
