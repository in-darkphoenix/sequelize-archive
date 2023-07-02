const { QueryTypes } = require("sequelize");

const User = require("../models/user.model");
const sequelize = require("../database/db-connection");

const addUser = async (req, res) => {
  try {
    const userRequestBody = req.body;
    const user = await User.create(userRequestBody);

    //console.log(user.toJSON());

    res.status(201).send({
      type: "success",
      message: "user addded successfully",
      payload: user,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: err.message });
  }
};

const getAllUsers = async (req, res) => {
  try {
    // const users = await sequelize.query("SELECT * FROM users", {
    //   type: QueryTypes.SELECT,
    // });
    
    const users = await sequelize.query("SELECT * FROM users", {
      model: User,
      mapToModel: true,
      logging: console.log,

      // If plain is true, then sequelize will only return the first
      // record of the result set. In case of false it will return all records.
      plain: false,

      // Set this to true if you don't have a model definition for your query.
      raw: false,
    });

    //const [results, metadata] = await sequelize.query("SELECT * FROM users");

    res.status(200).send({
      type: "success",
      message: "all users fetched successfully",
      payload: users,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: err.message });
  }
};

module.exports = { addUser, getAllUsers };
