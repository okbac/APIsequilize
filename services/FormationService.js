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

  async updateFormation(id, formation) {
    // on declare lafonction updateFormation
    return await Formation.update(formation, {
      where: {
        id_formation: id,
      },
    }); // on renvoie la formation mise à jour
  }

  async deleteFormation(id) {
    // on declare la fonction deleteFormation
    return await Formation.destroy({
      where: {
        id_formation: id,
      },
    }); // on renvoie la formation supprimée
  }
}
module.exports = new FormationService();
