const dbConfig = {
  DB_DIALECT: process.env.DB_DIALECT,
  DB_HOST: process.env.DB_HOST,
  DB_PORT: process.env.DB_PORT,
  DB_USER: process.env.DB_USER,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_NAME: process.env.DB_NAME,
  POOL_MAX: Number(process.env.POOL_MAX),
  POOL_MIN: Number(process.env.POOL_MIN),
  POOL_IDLE: Number(process.env.POOL_IDLE),
};

module.exports = dbConfig;
