const {} = require("sequelize");
const Formation = require("../models/Formation");

class FormationService {
  async getAllFormation() {
    return await Formation.findAll();
  }
}
module.exports = new FormationService();