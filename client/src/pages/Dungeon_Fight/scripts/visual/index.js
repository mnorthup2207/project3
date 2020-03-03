//! Refactor the pointer to use state
// export function healthArmorUpdate (pointer, character) {
//     pointer.innerText = `Health: ${character.health} 
//     Armor: ${character.armor}`
// }
// // Shows the spell when Choop's selected cards are length 3
// export function showAttackSpell() {
//     // If the number of selected cards is 3 then we show the spell
//     if ( Choop.selectedCards.length === 3 ) {
//         spell.style.display = "block"
//         spell.innerText = Choop.determineSpell()
//     } else {
//         spell.style.display = "none"
//     }
// }
// // When the user presses the spell or play button. We run Choop.play()
// // Choop environment controller
// export function playerAction() {
//     // Does nothing if no cards in hand
//     if ( Choop.hand.length === 0 ) {
//         return 
//     }
//     // Calls the Choop.play method against Doop
//     let choopAttack = Choop.play();
//     console.log(choopAttack)
//     Doop.defend(choopAttack)
//     // Update the health and armor of both
//     healthArmorUpdate(player1, Choop);
//     healthArmorUpdate(monster1, Doop);
//     // Clears the cards, updates the deck numbers, hides the spell
//     handWrapper.innerHTML = ""
//     drawDeck.firstElementChild.innerText = Choop.drawDeck.length;
//     discardDeck.innerText = Choop.discardDeck.length;
//     spell.style.display = "none";
//     // Add a set interval throughout this part
//     if ( Doop.alive ) {
//         monsterAction();
//     } else {
//         alert("You have slain the monster!")
//     }
// }
// // When the user presses the draw or green deck. We run Choop.playerDrawHand()
// // Then we render the cards and add event listeners
// // Choop playerDrawHand environment controller
// export function playerDrawHand() {
//     if ( Choop.hand.length > 0 ) {
//         return
//     }
//     // Calls the choop drawHand method
//     Choop.drawHand();
//     // Used to give the cards unique ids
//     let count = 0;
//     // Generates the cards
//     Choop.hand.map(card => {
//         // console.log(card);
//         let newCard = document.createElement("div");
//         newCard.setAttribute("class", "card");
//         newCard.setAttribute("data-type", card[0]);
//         newCard.setAttribute("data-value", card[1]);
//         newCard.setAttribute("data-selected", false);
//         newCard.setAttribute("id", count);
//         newCard.innerText = card;
//         newCard.addEventListener("click", (e) => {
//             // console.log(e.target);
//             // console.log(e.target.getAttribute("data-selected"))
//             if ( e.target.getAttribute("data-selected") === "false" ) {
//                 newCard.setAttribute("data-selected", true);
//                 Choop.selectCard(e, "select");
//                 showAttackSpell()
//             }  else {
//                 newCard.setAttribute("data-selected", false);
//                 Choop.selectCard(e, "deselect")
//                 showAttackSpell()
//             }  
//         })
//         handWrapper.appendChild(newCard);
//         count++;
//     })
//     // Updates the card number on the draw and discard deck
//     drawDeck.firstElementChild.innerText = Choop.drawDeck.length;
//     discardDeck.innerText = Choop.discardDeck.length;
// }
// // Monster environment controller
// export function determineMonsterAction () {
//     let round0 = round - 1; // Round starting at 0
//     if ( Doop.sequence.length > round0 ) {
//         return Doop.sequence[round0];
//     }
//     return Doop.sequence[round0 % Doop.sequence.length]
// }
// export function monsterAction() {
//     console.log("Monster's turn")
//     let action = determineMonsterAction()
//     console.log(action);
//     let doopAttack = Doop[action]();
//     console.log(doopAttack);
//     Choop.defend(doopAttack);
//     // Update the health and armor of both
//     healthArmorUpdate(player1, Choop);
//     healthArmorUpdate(monster1, Doop);
//     // Clears the cards, updates the deck numbers, hides the spell
//     handWrapper.innerHTML = ""
//     drawDeck.firstElementChild.innerText = Choop.drawDeck.length;
//     discardDeck.innerText = Choop.discardDeck.length;
//     spell.style.display = "none";
//     if ( Choop.alive ) {
//         newRound()
//     } else {
//         alert("You have been slain!")
//     }
// }

// // After the round is over
// export function newRound() {
//     // Updates the global variable for the round
//     round ++;
//     console.log(round);

//     // Update the intention of the monster
//     // monsterIntention.setAttribute = Doop.sequence[round]
// }