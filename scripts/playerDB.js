/* eslint-disable linebreak-style */
const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    'mongodb://localhost/roshambo'
);

const PlayerSeed = [{
    name: "Choop",
    health: 50,
    armor: 25,
    totalHealth: 50,
    totalArmor: 25,
    cards: ["r1", "r2", "r3", "r4", "r5", "p1", "p2", "p3", "p4", "p5", "s1", "s2", "s3", "s4", "s5",]
}];

db.Player
    .remove({})
    .then(() => db.Player.collection.insertMany(PlayerSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
