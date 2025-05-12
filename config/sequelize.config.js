const Sequelize = require("sequelize");

DB_NAME = process.env.DB_NAME;
USER_NAME = process.env.USER_NAME;
PASSWORD = process.env.PASSWORD;
HOST = process.env.HOST || "localhost"; //default value
DB_PORT = process.env.DB_PORT || 5432; //default value

const sequelize = new Sequelize(DB_NAME, USER_NAME, PASSWORD, {
  host: HOST,
  port: DB_PORT,
  dialect: "postgres",
});

const sqlConnect = () => {
  sequelize
    .authenticate()
    .then(() => {
      console.log("Database connection successfully!");
    })
    .catch((err) => {
      console.error("Database connection failed!", err);
    });
};

module.exports = sqlConnect();
