require("dotenv").config();
require("./database/sync-db");

const express = require("express");
const cors = require("cors");

const serverConfig = require("./configs/server-config");
const sequelize = require("./database/db-connection.js");

const app = express();

app.use(express.json());
app.use(cors());

sequelize
  .sync({ alter: true })
  .then(() => {
    console.log("database synced successfully.....");

    const port = serverConfig.PORT;
    app.listen(port, () => {
      console.log(`Server is running on http://localhost/${port}`);
    });
  })
  .catch((err) => console.log("Unable to connect to the database:", err));
