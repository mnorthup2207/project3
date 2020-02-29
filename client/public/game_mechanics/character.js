// HTML functionality
// Pointers
const container = document.querySelector(".container");
const handWrapper = document.querySelector(".handWrapper");
const playBtn = document.getElementById("play");
const drawBtn = document.getElementById("draw");
const drawDeck = document.querySelector("[name = drawDeck]").firstElementChild;
const discardDeck = document.querySelector("[name = discardDeck]").firstElementChild;
const spell = document.querySelector(".spell");
// Global Variables
var numSelectedCards = 0;
var round = 1;

// Play btn state
playBtn.addEventListener("click", playHand);
// Draw btn state
drawBtn.addEventListener("click", drawHand);
// Spell event listener
spell.addEventListener("click", playHand);
// Draw deck event listener
drawDeck.addEventListener("click", drawHand);



function showSpell(num) {
    // Increments and decrements global variable numSelectedCards
    numSelectedCards += num;
    // If the number of selected cards is 3 then we show the spell
    if ( numSelectedCards === 3 ) {
        spell.style.display = "block";
    } else {
        spell.style.display = "none";
    }
}
function playHand() {
    // Does nothing if no cards in hand
    if ( Choop.hand.length === 0 ) {
        return 
    }
    // Calls the Choop.play method
    Choop.play();
    // Clears the cards, updates the deck numbers, hides the spell
    handWrapper.innerHTML = ""
    drawDeck.innerText = Choop.drawDeck.length;
    discardDeck.innerText = Choop.discardDeck.length;
    spell.style.display = "none";
    // Updates the global variables to 0 for selected cards and increments the round
    numSelectedCards = 0;
    round ++;
}
function drawHand() {
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
                showSpell(1)
                Choop.selectCard(e, "select");
            }  else {
                newCard.setAttribute("data-selected", false);
                showSpell(-1)
                Choop.selectCard(e, "deselect")
            }  
        })
        handWrapper.appendChild(newCard);
        count++;
    })
    // Updates the card number on the draw and discard deck
    drawDeck.innerText = Choop.drawDeck.length;
    discardDeck.innerText = Choop.discardDeck.length;
}



// Scared that updating objects works differently in REACT
// Need to add the image information for each of them
class Character {
    constructor(name, health, armor, totalHealth, totalArmor) {
        this.health = health;
        this.armor = armor;
        this.totalHealth = totalHealth;
        this.totalArmor = totalArmor;
        this.name = name;
    }
}

class Monster extends Character {
    constructor(name, health=75, armor=30, totalHealth=75, totalArmor=30, damage=10) {
        super(name, health, armor, totalHealth, totalArmor)
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
    constructor(name, health=50, armor=20, totalHealth=50, totalArmor=50, cards=playerCards, 
        discardDeck=[], drawDeck=[], hand=[], numDraw=5, selectedCards=[]) {
        super(name, health, armor, totalHealth, totalArmor)
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
        console.log(this.selectedCards);
        let spellArr = this.selectedCards.map(card => card[0])
        let attackArr = this.selectedCards.map(card => card[0])
        // Need to add damage method and spell method


        this.discardDeck = [...this.hand.splice(0, this.hand.length), ...this.discardDeck];
        console.log("Discarding hand")
        console.log(this.discardDeck)
    }
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


const Choop = new Player("Choop")
const Doop = new Monster("Doop")

drawDeck.innerText = Choop.cards.length;
discardDeck.innerText = 0;