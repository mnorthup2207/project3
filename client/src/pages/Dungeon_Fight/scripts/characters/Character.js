//! Store somewhere else?
var statusObj = {
    heal: 0,
    harden: 0,
    retaliate: 0,
    sharpen: 0,
    toughen: 0,
}

class Character {
    constructor(name, health, armor, totalHealth, totalArmor, status=statusObj
        attacking=false, defending=false, idle=true, alive=true) {
        this.health = health;
        this.armor = armor;
        this.totalHealth = totalHealth;
        this.totalArmor = totalArmor;
        this.name = name;
        // Used for react state and animation manipulation
        this.attacking = attacking;
        this.defending = defending;
        this.idle = idle;
        this.alive = true;
        this.status = status;
    }
}
Character.prototype.defend = function([damage, type]) {
    console.log("defending");
    let resultHealth;
    if ( type.length !== 0 ) {
        // Replace this with ef elses late when an attack can have multiple attack types
        switch (type[0]) {
            case "desolate":
                return this.armor = Math.max(this.armor - damage, 0);
            case "cut":
                resultHealth = this.health - damage;
                this.isAlive(resultHealth);
                return this.health = resultHealth;
            default:
                break;
        }
    }
    if ( damage <= this.armor) {
        return this.armor -= damage;
    }
    resultHealth = this.health - ( damage - this.armor )
    this.armor = 0;
    this.isAlive(resultHealth);
    return this.health = resultHealth
}
Character.prototype.isAlive = function(resultHealth) {
    if (resultHealth <= 0) {
        console.log("Is dead")
        this.alive = false
    } else {
        console.log("Is alive")
    }
}

export default Character;