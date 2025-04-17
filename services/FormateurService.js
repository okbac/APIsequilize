const {} = require("sequelize");
const Formateur = require("../models/Formateur");

class FormateurService {
  async getAllFormateur() {
    return await Formateur.findAll();
  }
}
module.exports = new FormateurService();
