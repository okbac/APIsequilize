const { Model, DataTypes } = require("sequelize");
// on declare la const model et dataTypes pour utiliser les types de données
const sequelize = require("../config/sequelize");
// on importe la config de sequelize
class Formateur extends Model {}
// on declare la class stagiaires qui herite de model
Formateur.init(
  // on initialise le model
  {
    id_formateur: {
      // on declare les champs de la table
      type: DataTypes.INTEGER, // on declare le type de données
      primaryKey: true, // on declare la clé primaire
      autoIncrement: true, // on declare l'auto increment
      allowNull: false, // on declare le champ comme non nul
    },
    nom: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    prenom: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize, // on declare la config de sequelize
    modelName: "Formateur", // on declare le nom du model
    tableName: "Formateur", // on declare le nom de la table
    timestamps: false, // on declare les timestamps
  }
);
module.exports = Formateur;
// on exporte le model stagiaires
