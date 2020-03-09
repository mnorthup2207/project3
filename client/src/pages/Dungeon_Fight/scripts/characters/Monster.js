import Character from "./Character"

class Monster extends Character {
    constructor({ name, health, armor, totalHealth, totalArmor, damage,
        sequence, order, alive}, attacking, defending, idle, round, ) {
        super(name, health, armor, totalHealth, totalArmor,
            attacking, defending, idle, alive, round)
        this.damage = damage;
        this.sequence = sequence;
        this.order = order;
    }
    attack() {
        // the damage is regular damage
        let low = parseInt(this.damage[0])
        let high = parseInt(this.damage[1])
        return [low + Math.round((high - low) * Math.random()), []]
    }
    block() {
        this.armor += Math.round(this.totalArmor / 10)
        return [0, []];
        }
    taunt() {
        console.log("This is an insult!");
<<<<<<< HEAD
        return [0, []];
=======
        return [0, []]
>>>>>>> 04c9ed30ee12d76104220e2acaf1416315ad4bff
    }
}

export default Monster;