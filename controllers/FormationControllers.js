const FormationService = require("../services/FormationService");

class FormationController {
  async getAllFormation(req, res) {
    try {
      const formation = await FormationService.getAllFormation();
      res.json(formation);
    } catch (error) {
      console.log(error);
      res.status(500);
      res.json({ error: "Erreur lors de la récupérationdes des formation" });
    }
  }
}
module.exports = new FormationController();