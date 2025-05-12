const Sequelize = require("sequelize");

DB_NAME = process.env.DB_NAME;
DB_USERNAME = process.env.DB_USERNAME;
DB_PASSWORD = process.env.DB_PASSWORD;
DB_HOST = process.env.DB_HOST || "localhost"; //default value
DB_PORT = process.env.DB_PORT || 5432; //default value

const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
  host: DB_HOST,
  port: DB_PORT,
  dialect: "postgres",
});

const sqlConnect = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connection successfully!");
    //sync all models at once
    await sequelize.sync();
    console.log("Database synced");
  } catch (err) {
    console.error("Database connection failed!", err);
  }
};

sqlConnect(); //this is just to connect db

module.exports = sequelize; //export sequelize since models need to to access sequelize to use .define()
