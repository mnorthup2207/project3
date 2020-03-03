// import Character from './Classes/Character.js';

// ===========================================================
// HTML FUNCTIONALITY
// Pointers
const container = document.querySelector(".container");
const handWrapper = document.querySelector(".handWrapper");
const playBtn = document.getElementById("play");
const drawBtn = document.getElementById("draw");
const drawDeck = document.querySelector("[name = drawDeck]");
const discardDeck = document.querySelector("[name = discardDeck]").firstElementChild;
const spell = document.querySelector(".spell");
const player1 = document.getElementById("player1");
const monster1 = document.getElementById("monster1");
const monsterIntention = document.getElementById("monster1Intention")
// Global Variables
var round = 1;

// Play btn state
playBtn.addEventListener("click", playerAction);
// Draw btn state
drawBtn.addEventListener("click", playerDrawHand);
// Spell event listener
spell.addEventListener("click", playerAction);
// Draw deck event listener
drawDeck.addEventListener("click", playerDrawHand);

// Environment: Turn this into the connector between the two characters
// Shows the spell when Choop's selected cards are length 3
function showAttackSpell() {
    // If the number of selected cards is 3 then we show the spell
    if ( Choop.selectedCards.length === 3 ) {
        spell.style.display = "block"
        spell.innerText = Choop.determineSpell()
    } else {
        spell.style.display = "none"
    }
}
// When the user presses the spell or play button. We run Choop.play()
// Choop environment controller
function playerAction() {
    // Does nothing if no cards in hand
    if ( Choop.hand.length === 0 ) {
        return 
    }
    // Calls the Choop.play method against Doop
    let choopAttack = Choop.play();
    console.log(choopAttack)
    Doop.defend(choopAttack)
    // Update the health and armor of both
    healthArmorUpdate(player1, Choop);
    healthArmorUpdate(monster1, Doop);
    // Clears the cards, updates the deck numbers, hides the spell
    handWrapper.innerHTML = ""
    drawDeck.firstElementChild.innerText = Choop.drawDeck.length;
    discardDeck.innerText = Choop.discardDeck.length;
    spell.style.display = "none";
    // Add a set interval throughout this part
    if ( Doop.alive ) {
        monsterAction();
    } else {
        alert("You have slain the monster!")
    }
}
// When the user presses the draw or green deck. We run Choop.playerDrawHand()
// Then we render the cards and add event listeners
// Choop playerDrawHand environment controller
function playerDrawHand() {
    if ( Choop.hand.length > 0 ) {
        return
    }
    // Calls the choop drawHand method
    Choop.drawHand();
    // Used to give the cards unique ids
    let count = 0;
    // Generates the cards
    Choop.hand.map(card => {
        // console.log(card);
        let newCard = document.createElement("div");
        newCard.setAttribute("class", "card");
        newCard.setAttribute("data-type", card[0]);
        newCard.setAttribute("data-value", card[1]);
        newCard.setAttribute("data-selected", false);
        newCard.setAttribute("id", count);
        newCard.innerText = card;
        newCard.addEventListener("click", (e) => {
            // console.log(e.target);
            // console.log(e.target.getAttribute("data-selected"))
            if ( e.target.getAttribute("data-selected") === "false" ) {
                newCard.setAttribute("data-selected", true);
                Choop.selectCard(e, "select");
                showAttackSpell()
            }  else {
                newCard.setAttribute("data-selected", false);
                Choop.selectCard(e, "deselect")
                showAttackSpell()
            }  
        })
        handWrapper.appendChild(newCard);
        count++;
    })
    // Updates the card number on the draw and discard deck
    drawDeck.firstElementChild.innerText = Choop.drawDeck.length;
    discardDeck.innerText = Choop.discardDeck.length;
}
// Monster environment controller
function determineMonsterAction () {
    let round0 = round - 1; // Round starting at 0
    if ( Doop.sequence.length > round0 ) {
        return Doop.sequence[round0];
    }
    return Doop.sequence[round0 % Doop.sequence.length]
}
function monsterAction() {
    console.log("Monster's turn")
    let action = determineMonsterAction()
    console.log(action);
    let doopAttack = Doop[action]();
    console.log(doopAttack);
    Choop.defend(doopAttack);
    // Update the health and armor of both
    healthArmorUpdate(player1, Choop);
    healthArmorUpdate(monster1, Doop);
    // Clears the cards, updates the deck numbers, hides the spell
    handWrapper.innerHTML = ""
    drawDeck.firstElementChild.innerText = Choop.drawDeck.length;
    discardDeck.innerText = Choop.discardDeck.length;
    spell.style.display = "none";
    if ( Choop.alive ) {
        newRound()
    } else {
        alert("You have been slain!")
    }
}

// After the round is over
function newRound() {
    
    // Updates the global variable for the round
    round ++;
    console.log(round);

    // Update the intention of the monster
    // monsterIntention.setAttribute = Doop.sequence[round]
}

// ===============================================================
// THESE WILL BECOME MODULES LATER ON:
// Cards Bank: ALL THE POSSIBLE CARDS (REPLACE WITH DATABASE)
const cards = ["r1", "r2", "r3", "r4", "r5", "r6", "r7", "r8", "r9", "r10", "p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9", "p10", "s1", "s2", "s3", "s4", "s5", "s6", "s7", "s8", "s9", "s10"]
// Player cards: INITIAL CARDS (WHEN YOU CREATE NEW GAME)
var playerCards = [...cards.slice(0, 5), ...cards.slice(10, 15), ...cards.slice(20, 25)];
// Status: THIS IS INITIALIZED TO 0 EVERY COMBAT. WILL ADD NEGATIVE EFFECTS
var statusObj = {
    heal: 0,
    harden: 0,
    retaliate: 0,
    sharpen: 0,
    toughen: 0,
}
// Object of spells to initialize with Player
const spellsObj = {
    heal: () => {
        console.log("healing")
        this.status["heal"] += 1;
        return ""
    },
    harden: () => {
        console.log("hardening")
        this.status["harden"] += 1;
        return ""
    },
    sharpen: () => {
        console.log("sharpening")
        this.status["sharpen"] += 1;
        return ""
    },
    jackpot: () => {
        console.log("Hit the jackpot")
        return "jackpot"
    },
    toughen: () => {
        console.log("toughening")
        this.status["toughen"] += 1;
        return ""
    },
    cut: () => {
        console.log("paper cut")
        return "cut"
    },
    tank: () => {
        console.log("tanking")
        return "tank"
    },
    retaliate: () => {
        console.log("hi")
        this.status["retaliate"] += 1;
        return ""
    },
    desolate: () => {
        console.log("hi")
        return "desolate"
    },
    slice: () => {
        console.log("hi")
        return "slice"
    }
}
// 
class Character {
    constructor(name, health, armor, totalHealth, totalArmor,
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

class Monster extends Character {
    constructor(name, health=15, armor=20, totalHealth=75, totalArmor=30, damage=10,
        sequence=["attack", "attack"], attacking, defending, idle, alive) {
        super(name, health, armor, totalHealth, totalArmor,
            attacking, defending, idle, alive)
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
// Need to add player methods
class Player extends Character {
    // These are the initial values that a player starts with
    constructor(name, health=50, armor=20, totalHealth=50, totalArmor=50, spells=spellsObj, status=statusObj,
        cards=playerCards, discardDeck=[], drawDeck=[], hand=[], numDraw=5, selectedCards=[],
        attacking, defending, idle, alive) {
        super(name, health, armor, totalHealth, totalArmor,
            attacking, defending, idle, alive)
        // Current cards the player has
        this.cards = cards;
        this.discardDeck = discardDeck;
        this.drawDeck = drawDeck;
        this.hand = hand;
        this.selectedCards = selectedCards;
        // Number of cards a player draws
        this.numDraw = numDraw;
        // Spells and status corresponding to the player
        this.spells = spells;
        this.status = status;

    }
    attack(type, powerUps) {
        // gonna have to change this for powerups
        let attackArr = this.selectedCards.map(card => parseInt(card[1]));
        let resultDamage = attackArr.reduce((a, b) => a + b);
        // Made resultType an array so later on we could have multiple effects
        let resultType = [];
        let result = [];
        switch (type) {
            case "desolate":
                resultDamage *= 2;
                resultType.push("desolate");
                break;
            case "cut":
                resultType.push("cut")
                break;
            case "slice":
                resultDamage *= 2;
                break;
            case "tank" :
                this.armor = Math.min(this.totalArmor, resultDamage * 2)
                break;
            case "jackpot":
                resultDamage += 5 * round;
                break;
            default:
                break;
        }

        
        result = [resultDamage, resultType];
        console.log("Result of attack")
        console.log([result]);
        return result
        }
    castSpell() {
        return this.spells[this.determineSpell()]();
    }
    determineSpell() {
        let spell = this.selectedCards.map(card => card[0]).sort().join("");
        console.log(`Spell ${spell}`);
        switch (spell) {
            case "ppp":
                return "heal"
            case "ppr":
                return "harden"
            case "pps":
                return "sharpen"
            case "prs":
                return "jackpot"
            case "prr":
                return "toughen"
            case "pss":
                return "cut"
            case "rrr":
                return "tank"
            case "rrs":
                return "retaliate"
            case "rss":
                return "desolate"
            case "sss":
                return "slice"
            default:
                return "noSpell"
        }
    }
    drawHand() {
        console.log("Drawing hand")
        let length = this.drawDeck.length
        if ( length >= this.numDraw ) {
            this.hand = this.drawDeck.splice(0, this.numDraw);
        } else {
            console.log(`Drawing ${length} from draw deck `)
            this.hand = this.drawDeck.splice(0, length);
            console.log('Reshuffling')
            this.shuffleCards();
            console.log(`Drawing ${this.numDraw - length} from shuffled draw deck `)
            this.hand = [...this.hand, ...this.drawDeck.splice(0, this.numDraw - length)];

        }
        console.log(this.hand)
        console.log("Remaining drawDeck")
        console.log(this.drawDeck)
    }
    play() {
        console.log("Playing hand")
        console.log(this.selectedCards);
        let type = this.castSpell();
        // opponent
        let attack = this.attack(type);
        // Need to add damage method and spell method
        //! MOVE THIS

        this.discardDeck = [...this.hand.splice(0, this.hand.length), ...this.discardDeck];
        this.selectedCards = [];
        console.log("Discarding hand")
        console.log(this.discardDeck)
        return attack
    }
    // STATE
    selectCard(e, action) {
        if ( action === "select" ) {
            Choop.selectedCards.push(e.target.textContent)
        } else if ( action === "deselect" ) {
            Choop.selectedCards.splice(Choop.selectedCards.indexOf(e.target.textContent), 1);
        }
        // event.target.value
        // console.log("Selecting a hand")
    }
    shuffleCards() {
        let shuffleLength = 0;
        let shuffledCards = [];
        let initialShuffle = this.hand.length === 0;
        // If initial shuffle we use the full deck, else we use the discardDeck
        initialShuffle ? (shuffleLength = this.cards.length) : 
            (shuffleLength = this.discardDeck.length);
        let i = 0;
        shuffledCards = new Array(shuffleLength);
        console.log("Length of new shuffle " + shuffleLength)
        while (i < shuffleLength) {
            let randomIndex = Math.floor(Math.random() * shuffleLength);
            if (shuffledCards[randomIndex] === undefined) {
                initialShuffle ? (shuffledCards[randomIndex] = this.cards[i]) :
                    (shuffledCards[randomIndex] = this.discardDeck[i]);
                    i++;
            }
        }
        this.drawDeck = shuffledCards;
        this.discardDeck = [];
    }
}

function healthArmorUpdate (pointer, character) {
    pointer.innerText = `Health: ${character.health} 
    Armor: ${character.armor}`
}
// Add this into an init function
const Choop = new Player("Choop");
const Doop = new Monster("Doop");
healthArmorUpdate(player1, Choop);
healthArmorUpdate(monster1, Doop);

drawDeck.firstElementChild.innerText = Choop.cards.length;
discardDeck.innerText = 0;

