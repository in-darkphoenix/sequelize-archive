const { DataTypes } = require("sequelize");
const sequelize = require("../database/db-connection");

const UserGroup = sequelize.define(
  "user_group",
  {
    user_id: {
      type: DataTypes.UUID,
      references: {
        model: "users",
        key: "id",
      },
    },
    group_id: {
      type: DataTypes.UUID,
      references: {
        model: "groups",
        key: "id",
      },
    },
  },
  {
    timestamps: false,
  }
);

module.exports = UserGroup;
