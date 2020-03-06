import Character from "./Character"

class Monster extends Character {
    constructor({_id, name, health, armor, totalHealth, totalArmor, damage,
        sequence, attacking, defending, idle, alive, round, status}) {
        super(name, health, armor, totalHealth, totalArmor, status,
            attacking, defending, idle, alive, round)
        this.damage = damage;
        this.sequence = sequence;
        this._id = _id;
    }
    attack() {
        // the damage is regular damage
        let low = parseInt(this.damage[0])
        let high = parseInt(this.damage[1])
        return [low + Math.round((high - low) * Math.random()), []]
    }
    spell(type) {
        switch (type) {
            case "armor":
                return console.log("Defend magic armor")
            case "charmor":
                return console.log("Defend magic charmor")
            default:
                return console.log("default")
        }
    }
}

export default Monster;