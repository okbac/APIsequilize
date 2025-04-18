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

     async updateFormateur(id, formateur) {
      return await Formateur.update(formateur, {
        where: {
          id_formateur: id,
        },
      });
    }
  
    async deleteFormateur(id) {
      return await Formateur.destroy({
        where: {
          id_formateur: id,
        },
      });
    }
    
}
module.exports = new FormateurService();
