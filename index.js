const express = require("express");
require("dotenv").config();

const PORT = process.env.PORT;

const app = express();

//Database Connection
require("./config/sequelize.config");

app.listen(PORT, () => {
  console.log(`Server started at PORT: ${PORT}`);
});
