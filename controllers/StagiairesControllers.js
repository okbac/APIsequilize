const StagiairesService = require("../services/StagiairesService");

class StagiaireController {
  async getAllStagiaires(req, res) {
    try {
      const stagiaires = await StagiairesService.getAllStagiaires();
      res.json(stagiaires);
    } catch (error) {
      console.log(error);
      res.status(500);
      res.json({ error: "Erreur lors de la récupération des stagiaires" });
    }
  }

  async addStagiaires(req, res) {
    try {
      const stagiares = await StagiairesService.addStagiaires(req.body);
      res.status(201).json(stagiares);
    } catch (error) {
      console.log(error);
      res.status(500);
      res.json({ error: "Erreur lors de l'ajout du stagiaire" });
    }
  }

  async getStagiairesById(req, res) {
    try {
      const stagiaires = await StagiairesService.getStagiairesById(
        req.params.id
      );
      if (!Stagiaires) {
        return res.status(404).json({ error: "stagiaire non trouvée" });
      }
      res.json(stagiaires);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ error: "Erreur lors de la récupération du stagiaire" });
    }
  }

  async updateStagiaires(req, res) {
    try {
      const formation = await StagiairesService.updateStagiaires(
        req.params.id,
        req.body
      );
      if (!formation) {
        return res.status(404).json({ error: "Stagiaire non trouvée" });
      }
      res.json(stagiaires);
    } catch (error) {
      console.log(error);
      res.status(500);
      res.json({ error: "Erreur lors de la mise à jour du stagiaire" });
    }
  }

  async deleteStagiaires(req, res) {
    try {
      const stagiaires = await StagiairesService.deleteStagiaires(
        req.params.id
      );
      if (!stagiaires) {
        return res.status(404).json({ error: "Stagiaire non trouvée" });
      }
      res.json({ message: "Stagiaire supprimée avecsuccès" });
    } catch (error) {
      console.log(error);
      res.status(500);
      res.json({ error: "Erreur lors de la suppression du stagiaires" });
    }
  }
}
module.exports = new StagiaireController();
