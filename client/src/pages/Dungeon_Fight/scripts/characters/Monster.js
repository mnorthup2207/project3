import Character from "./Character"

class Monster extends Character {
    constructor(name, health=15, armor=20, totalHealth=75, totalArmor=30, damage=10,
        sequence=["attack", "attack"], attacking, defending, idle, alive, round, status) {
        super(name, health, armor, totalHealth, totalArmor, status,
            attacking, defending, idle, alive, round)
        this.damage = damage;
        this.sequence = sequence;
    }
    attack() {
        // the damage is regular damage
        return [this.damage, []]
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