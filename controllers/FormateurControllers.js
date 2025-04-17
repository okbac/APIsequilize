const FormateurService = require("../services/FormateurService");

class FormateurController {
  async getAllFormateur(req, res) {
    try {
      const formateur = await FormateurService.getAllFormateur();
      res.json(formateur);
    } catch (error) {
      console.log(error);
      res.status(500);
      res.json({ error: "Erreur lors de la récupérationdes des formateur" });
    }
  }
}
module.exports = new FormateurController();
