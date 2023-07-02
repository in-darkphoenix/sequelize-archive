const { DataTypes } = require("sequelize");
const sequelize = require("../database/db-connection");
const Designation = require("./designation.model");
const Publication = require("./publication.model");
const Group = require("./group.model");
const UserGroup = require("./user-group.model");

const User = sequelize.define(
  "user",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true,
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastname: {
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

// one to one, any one way, option fkey optional if custom fk name
// if u want to make pure one to one then it should be in pair
User.hasOne(Designation, {
  foreignKey: "user_id",
});
Designation.belongsTo(User, {
  foreignKey: "user_id",
});

// one to many
// if u want to make pure one to many then it should be in pair
User.hasMany(Publication, {
  foreignKey: "author_id",
});
Publication.belongsTo(User, {
  foreignKey: "author_id",
});

// many to many
// it takes the pk of both model and make its own both pk as composite key
// User.belongsToMany(Group, { through: UserGroup });
// Group.belongsToMany(User, { through: UserGroup });
// if model not made we can specify so sequelize can make that
User.belongsToMany(Group, { through: "user_groups" });
Group.belongsToMany(User, { through: "user_groups" });

module.exports = User;
