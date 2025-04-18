const {} = require("sequelize");
const Stagiaires = require("../models/Stagiaires");
// on importe sequelize
// on importe le model stagiaires
class StagiairesService {
  async getAllStagiaires() {
    // on declare la fonction getAllStagiaires
    return await Stagiaires.findAll(); // on renvoie tous les stagiaires
  }

  async addStagiaires(stagiaires) { 
    return await Stagiaires.create(stagiaires); 
    }

    async updateStagiaires(id, stagiaires) {
     return await Stagiaires.update(stagiaires, {
       where: {
         id_stagiaires: id,
       },
     });
   }
 
   async deleteStagiaires(id) {
     return await Stagiaires.destroy({
       where: {
         id_stagiaires: id,
       },
     });
    }
}
module.exports = new StagiairesService();
