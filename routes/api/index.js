const router = require("express").Router();
const users = require("./users");

// Book routes
router.use("/users", users);

module.exports = router;
