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

  async getFormateurById(req, res) {
    try {
      const formateur = await FormateurService.getFormateurById(req.params.id);

      if (!formateur) {
        return res.status(404).json({ error: "Formateur non trouvée" });
      }
      res.json(formateur);
    } catch (error) {
      console.log(error);
      res.status(500);
      res.json({ error: "Erreur lors de la récupération de la formateur" });
    }
  }

  async addFormateur(req, res) {
    try {
      const formateur = await FormateurService.addFormateur(req.body);

      res.status(201).json(formateur);
    } catch (error) {
      console.log(error);

      res.status(500);
      res.json({ error: "Erreur lors de l'ajout de la formateur" });
    }
  }

  async updateFormateur(req, res) {
    try {
    const formateur = await
    FormateurService.updateFormateur(req.params.id, req.body);
    
    if (!formateur) {
    return res.status(404).json({ error:
    'Formateur non trouvée' });
    }
    res.json(formateur);
    
    } catch (error) { 
    res.status(500);
    res.json({ error: 'Erreur lors de la mise à jour de formateur' });
    
    }
    }
    
    async deleteFormateur(req, res) {
      try {
      const formateur = await
      FormateurService.deleteFormateur(req.params.id);
      
      if (!formateur) {
      return res.status(404).json({ error:
      'Formateur non trouvée' });
      
      }
      res.json({ message: 'Formateur supprimée avecsuccès' });
      
      } catch (error) { 
      console.log(error); 
      res.status(500); 
      res.json({ error: 'Erreur lors de la suppression du formateur' });
      
      }
      }
}
module.exports = new FormateurController();
