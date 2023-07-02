const express = require("express");
const { addUser, getAllUsers } = require("../controllers/users-controller");
const userRouter = express.Router();

userRouter.post("/", addUser);
userRouter.get("/", getAllUsers);

module.exports = userRouter;
