const { DataTypes } = require("sequelize");
const sequelize = require("../database/db-connection");

const Designation = sequelize.define(
  "designation",
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
    // optional, if association is amde
    // user_id: {
    //   type: DataTypes.UUID,
    //   references: {
    //     model: "users",
    //     key: "id",
    //   },
    // },
  },
  {
    timestamps: false,
  }
);

module.exports = Designation;
