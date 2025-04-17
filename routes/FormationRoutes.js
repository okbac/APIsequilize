const express = require("express");
const router = express.Router();

const FormationController = require("../controllers/FormationControllers");
router.get("/", (req, res) => {
  FormationController.getAllFormation(req, res);
});
module.exports = router;