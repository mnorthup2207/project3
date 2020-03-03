import React from "react";
import scripts from "./scripts";
const { Monster, Player, healthArmorUpdate, showAttackSpell, playerAction, playerDrawHand, 
    determineMonsterAction, monsterAction, newRound } = scripts;

function Dungeon_Fight(props) {
    // Buttons and corresponding events
    const drawBtn = document.getElementById("draw");
    drawBtn.addEventListener("click", playerDrawHand);
    const drawDeck = document.querySelector("[name = drawDeck]");
    drawDeck.addEventListener("click", playerDrawHand);

    const playBtn = document.getElementById("play");
    playBtn.addEventListener("click", playerAction);
    const spell = document.querySelector(".spell");
    spell.addEventListener("click", playerAction);

    // Hand pointers
    const discardDeck = document.querySelector("[name = discardDeck]").firstElementChild;
    const handWrapper = document.querySelector(".handWrapper");

    // Entire wrapper
    const container = document.querySelector(".container");

    // Character pointers
    const player1 = document.getElementById("player1");
    const monster1 = document.getElementById("monster1");
    const monsterIntention = document.getElementById("monster1Intention")
    // Initialize the game board
    function init() {
        var round = 1;
        // Pointers
        // Add this into an init function
        const Choop = new Player("Choop");
        const Doop = new Monster("Doop");
        healthArmorUpdate(player1, Choop);
        healthArmorUpdate(monster1, Doop);

        drawDeck.firstElementChild.innerText = Choop.cards.length;
        discardDeck.innerText = 0;
    }
    // componentDidMount(init())
    init()
    return <h1>Dungeon_Fight</h1>
}
//! Dead code used only for inspiration
// // ===========================================================
// // HTML FUNCTIONALITY
// // Pointers
// const container = document.querySelector(".container");
// const handWrapper = document.querySelector(".handWrapper");
// const playBtn = document.getElementById("play");
// const drawBtn = document.getElementById("draw");
// const drawDeck = document.querySelector("[name = drawDeck]");
// const discardDeck = document.querySelector("[name = discardDeck]").firstElementChild;
// const spell = document.querySelector(".spell");
// const player1 = document.getElementById("player1");
// const monster1 = document.getElementById("monster1");
// const monsterIntention = document.getElementById("monster1Intention")
// // Global Variables
// var round = 1;

// // Play btn state
// playBtn.addEventListener("click", playerAction);
// // Draw btn state
// drawBtn.addEventListener("click", playerDrawHand);
// // Spell event listener
// spell.addEventListener("click", playerAction);
// // Draw deck event listener
// drawDeck.addEventListener("click", playerDrawHand);

// // Environment: Turn this into the connector between the two characters