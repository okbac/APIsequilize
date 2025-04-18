const express = require("express");
const router = express.Router();

const FormationController = require("../controllers/FormationControllers");
router.get("/", (req, res) => {
  FormationController.getAllFormation(req, res);
});
module.exports = router;

router.post("/", (req, res) => {
  FormationController.addFormation(req, res);
});

router.get("/:id", (req, res) => {
  FormationController.getFormationById(req, res);
});

router.put("/:id", (req, res) => {
  FormationController.updateFormation(req, res);
});

router.delete("/:id", (req, res) => {
  FormationController.deleteFormation(req, res);
});
