const router = require("express").Router();
const users = require("./users");
const monsters = require("./monsters");
const player = require("./player");


router.use("/users", users);

router.use("/monsters", monsters);

router.use("/player", monsters);

module.exports = router;