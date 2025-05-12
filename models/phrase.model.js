const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize.config"); // this is necessary to use .define() method

//Sequelize ORM handles id just like mongoose so no need to create an id field manually
//if sequelize was not used then we would have to create an id field manually

const Phrase = sequelize.define(
  "Phrase",
  {
    english: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nepali: {
      type: DataTypes.TEXT,
    },
    newari: {
      type: DataTypes.TEXT,
    },
    is_new: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    timestamps: true, //same as mongodb to add created and updated at
    tableName: "phrases",
  }
);

module.exports = Phrase;
