const {} = require("sequelize");
const Formation = require("../models/Formation");

class FormationService {
  async getAllFormation() {
    return await Formation.findAll();
  }

  async addFormation(formation) {
    // on declare la fonction addFormation
    return await Formation.create(formation); // on renvoie la formation
  }

  async getFormationById(id) {
    // on declare la fonction getFormationById;
    return await Formation.findByPk(id); // on renvoie la formation par son id
  }
}
module.exports = new FormationService();
