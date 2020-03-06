import Character from "./Character"

//! Store spellsObj, cards, and playerCards somewhere else?
// Cards Bank: ALL THE POSSIBLE CARDS (REPLACE WITH DATABASE)
const cards = ["r1", "r2", "r3", "r4", "r5", "r6", "r7", "r8", "r9", "r10", "p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9", "p10", "s1", "s2", "s3", "s4", "s5", "s6", "s7", "s8", "s9", "s10"]
// Player cards: INITIAL CARDS (WHEN YOU CREATE NEW GAME)
var playerCards = [...cards.slice(0, 5), ...cards.slice(10, 15), ...cards.slice(20, 25)];
// Object of spells to initialize with Player
const spellsObj = {
    heal: () => {
        console.log("healing")
        // this.status["heal"] += 1;
        return ""
    },
    harden: () => {
        console.log("hardening")
        // this.status["harden"] += 1;
        return ""
    },
    sharpen: () => {
        console.log("sharpening")
        // this.status["sharpen"] += 1;
        return ""
    },
    jackpot: () => {
        console.log("Hit the jackpot")
        return "jackpot"
    },
    toughen: () => {
        console.log("toughening")
        // this.status["toughen"] += 1;
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
        // this.status["retaliate"] += 1;
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


// Need to add player methods
class Player extends Character {
    // These are the initial values that a player starts with
    // Turn this into an object
    constructor({_id="", name="Choop", health=50, armor=25, totalHealth=50, totalArmor=25, cards=playerCards}, status, 
        discardDeck=[], drawDeck=[], hand=[], numDraw=5, selectedCards=[], spells=spellsObj,
        attacking, defending, idle, alive, round) {
        super(name, health, armor, totalHealth, totalArmor, status,
            attacking, defending, idle, alive, round)
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
                resultDamage += 5 * this.round;
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
            this.selectedCards.push(e.target.textContent)
        } else if ( action === "deselect" ) {
            this.selectedCards.splice(this.selectedCards.indexOf(e.target.textContent), 1);
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

export default Player;