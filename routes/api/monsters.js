const router = require("express").Router();
const monsterController = require("../../controllers/monsterController");

// Matches with "/api/monsters"
router.route("/")
  .get(monsterController.findAll)
// Matches with "/api/monsters/:id"
router
  .route("/:id")
  .get(monsterController.findById)

module.exports = router;
