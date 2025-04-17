const express = require("express");
const router = express.Router();

const FormateurController = require("../controllers/FormateurControllers");
router.get("/", (req, res) => {
  FormateurController.getAllFormateur(req, res);
});
module.exports = router;
