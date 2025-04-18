const express = require("express");
const router = express.Router();

const FormateurController = require("../controllers/FormateurControllers");
router.get("/", (req, res) => {
  FormateurController.getAllFormateur(req, res);
});
module.exports = router;

router.get("/:id", (req, res) => {
  FormateurController.getFormateurById(req, res);
 });

 router.post("/", (req, res) => {
  FormateurController.addFormateur(req, res);
 });
