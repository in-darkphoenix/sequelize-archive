const { Sequelize } = require("sequelize");
const dbConfig = require("../configs/db-config");

const {
  DB_DIALECT,
  DB_HOST,
  DB_NAME,
  DB_PASSWORD,
  DB_PORT,
  DB_USER,
  POOL_MAX,
  POOL_MIN,
  POOL_IDLE,
} = dbConfig;

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  port: DB_PORT,
  dialect: DB_DIALECT,

  pool: {
    max: POOL_MAX,
    min: POOL_MIN,
    idle: POOL_IDLE,
  },

  logging: false,
});

module.exports = sequelize;
