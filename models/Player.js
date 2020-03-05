const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PlayerSchema = new Schema({
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
    cards: {
        type: String,
        required: true,
    },
});

module.exports = Player = mongoose.model("player", PlayerSchema);