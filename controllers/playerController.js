const db = require("../models");

// Defining methods for the playerController
module.exports = {
    findAll: function (req, res) {
        db.player
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};
