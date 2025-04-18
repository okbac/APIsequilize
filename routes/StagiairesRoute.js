const express = require("express");
// on importe express
const router = express.Router();
// on declare le router
const StagiairesController = require("../controllers/StagiairesControllers");
// on importe le controller stagiaire
router.get("/", (req, res) => {
  // on declare la route get
  StagiairesController.getAllStagiaires(req, res); // on declare la fonction getAllStagiaires
});
module.exports = router;
// on exporte le router

router.post("/", (req, res) => {
  StagiairesController.addStagiaires(req, res);
});

router.put("/:id", (req, res) => {
  StagiairesController.updatestagiaires(req, res);
});

router.delete("/:id", (req, res) => {
  StagiairesController.deletestagiaires(req, res);
});