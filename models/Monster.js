const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MonsterSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    health: {
        type: Number,
        required: true,
    },
    armor: {
        type: Number,
        required: true,
    },
    totalHealth: {
        type: Number,
        required: true,
    },
    totalArmor: {
        type: Number,
        required: true,
    },
    damage: [{
        type: Number,
        required: true,
    }],
    sequence: [{
        type: String,
        required: true,
    }],
    attacking: {
        type: Boolean,
        required: true,
    },
    defending: {
        type: Boolean,
        required: true,
    },
    idle: {
        type: Boolean,
        required: true,
    },
    alive: {
        type: Boolean,
        required: true,
    },
    round: {
        type: Number,
        required: true,
    },
    order: {
        type: Number,
        required: true,
    },
});

module.exports = Monster = mongoose.model("monster", MonsterSchema);