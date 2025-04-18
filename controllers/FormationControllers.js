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

  async addFormation(req, res) {
    // on declare la fonction addFormation;
    try {
      // on declare le try
      const formation = await FormationService.addFormation(req.body);
      // on declare la const formation qui va recuperer la formation
      res.status(201).json(formation);
      // on renvoie la formation au format json
    } catch (error) {
      // on declare le catch
      console.log(error); // on affiche l'erreur dans la
      console;
      res.status(500); // on declare le status 500
      res.json({ error: "Erreur lors de l'ajout de la formation" });
      // on renvoie l'erreur au format json
    }
  }

  async getFormationById(req, res) {
    try {
      // On récupère la formation à partir de l'ID passé en paramètre
      const formation = await FormationService.getFormationById(req.params.id);

      // Si aucune formation n'est trouvée, on renvoie une erreur 404
      if (!formation) {
        return res.status(404).json({ error: "Formation non trouvée" });
      }

      // Si la formation est trouvée, on la renvoie au format JSON
      res.json(formation);
    } catch (error) {
      // En cas d'erreur, on l'affiche dans la console
      console.error(error);

      // On renvoie une erreur 500 avec un message clair
      res
        .status(500)
        .json({ error: "Erreur lors de la récupération de la formation" });
    }
  }

  
    
}
module.exports = new FormationController();
