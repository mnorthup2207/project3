// Scared that updating objects works differently in REACT
// Need to add the image information for each of them

class Character {
    constructor(health, armor, totalHealth, totalArmor) {
        this.health = health;
        this.armor = armor;
        this.totalHealth = totalHealth;
        this.totalArmor = totalArmor;
    }
}

class Monster extends Character {
    constructor(health, armor, totalHealth, totalArmor, damage) {
        super(health, armor, totalHealth, totalArmor)
        this.damage = damage;
    }
    attack(opponent) {
        opponent.health = opponent.health - this.damage;
    }
    spell(type, opponent) {
        switch (type) {
            case "attack":
                return console.log("Attack magic")
            case "defend":
                return console.log("Defend magic")
            default:
                return console.log("default")
        }
    }
}

// Cards Bank
const cards = ["r1", "r2", "r3", "r4", "r5", "r6", "r7", "r8", "r9", "r10", "p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9", "p10", "s1", "s2", "s3", "s4", "s5", "s6", "s7", "s8", "s9", "s10"]
// Player cards
var playerCards = [...cards.slice(0, 5), ...cards.slice(10, 15), ...cards.slice(20, 25)];

// Need to add player methods
class Player extends Character {
    // These are the initial values that a player starts with
    constructor(health=50, armor=20, totalHealth=50, totalArmor=50, cards=playerCards, 
        discardDeck=[], drawDeck=[], hand=[], numDraw=5, selectedCards=[]) {
        super(health, armor, totalHealth, totalArmor)
        this.cards = cards;
        this.discardDeck = discardDeck;
        this.drawDeck = drawDeck;
        this.hand = hand;
        this.selectedCards = selectedCards;
        this.numDraw = numDraw;
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
        console.log(this.hand);
        // Need to add damage method and spell method
        this.discardDeck = [...this.hand.splice(0, this.hand.length), ...this.discardDeck];
        console.log("Discarding hand")
        console.log(this.discardDeck)
    }
    selectCard(event) {
        // event.target.value
        console.log("Selecting a hand")
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



// Updating cards
//!



const Choop = new Player()

const Doop = new Monster( 75, 30, 50, 30, 15 )



console.log(Choop)
console.log(Doop)