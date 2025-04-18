const {} = require("sequelize");
const Formateur = require("../models/Formateur");

class FormateurService {
  async getAllFormateur() {
    return await Formateur.findAll();
  }

  async getFormateurById(id) {
    return await Formateur.findByPk(id); 
  }

  async addFormateur(formateur) { 
     return await Formateur.create(formateur); 
     }
    
}
module.exports = new FormateurService();
