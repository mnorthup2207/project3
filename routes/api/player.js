const router = require("express").Router();
const playerController = require("../../controllers/playerController");

// Matches with "/api/players"
router.route("/")
  .get(playerController.findAll)

module.exports = router;
