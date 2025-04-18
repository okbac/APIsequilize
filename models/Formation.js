const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/sequelize");

class Formation extends Model {}

Formation.init(
  {
    id_formation: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nom: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    niveau: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Formation",
    tableName: "Formation",
    timestamps: false,
  }
);
module.exports = Formation;
