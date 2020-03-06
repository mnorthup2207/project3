/* eslint-disable linebreak-style */
const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI ||
    'mongodb://localhost/roshambo'
);

const monsterSeed = [
    {
        name: "fire",
        health: 40,
        armor: 20,
        totalHealth: 40,
        totalArmor: 20,
        damage: [23, 35],
        sequence: ["attack"],
        alive: true,
        round: 1,
        order: 4
    },
    {
        name: "ice",
        health: 80,
        armor: 30,
        totalHealth: 80,
        totalArmor: 30,
        damage: [15, 25],
        sequence: ["attack", "defend"],
        alive: true,
        round: 1,
        order: 3
    },
    {
        name: "earth",
        health: 40,
        armor: 40,
        totalHealth: 40,
        totalArmor: 40,
        damage: [15, 22],
        sequence: ["defend", "attack"],
        alive: true,
        round: 1,
        order: 5
    },
    {
        name: "minotaur_yellow",
        health: 25,
        armor: 10,
        totalHealth: 25,
        totalArmor: 10,
        damage: [5, 15],
        sequence: ["attack", "defend"],
        alive: true,
        round: 1,
        order: 0
    },
    {
        name: "minotaur_yellow", 
        health: 35,
        armor: 10,
        totalHealth: 35,
        totalArmor: 10,
        damage: [8, 18],
        sequence: ["attack"],
        alive: true,
        round: 1,
        order: 1
    },
    {
        name: "minotaur_green",
        health: 45,
        armor: 15,
        totalHealth: 45,
        totalArmor: 15,
        damage: [10, 20],
        sequence: ["attack", "attack", "defend"],
        alive: true,
        round: 1,
        order: 2
    },
];

db.Monster
    .remove({})
    .then(() => db.Monster.collection.insertMany(monsterSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
