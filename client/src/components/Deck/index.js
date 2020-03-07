import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Draw from "../Draw/index";
import Discard from "../Discard/index";
import PlayerHand from "../PlayerHand/index";

////Material UI////
import { Grid, Button } from "@material-ui/core";


import Player from "../../pages/Dungeon_Fight/scripts/characters/Player";
import Monster from "../../pages/Dungeon_Fight/scripts/characters/Monster";
import background from "../../images/bg-leather.png";
import spells from "./spell.json"
import { setMonster, setMonsterHealthArmor } from "../../actions/gameActions";
// import '../../images/spells'

export default function Deck() {
    const playerGState = useSelector(state => state.player);
    const monsterGState = useSelector(state => state.monster);
    const monstersGState = useSelector(state => state.monsters);
    const cardsGState = useSelector(state => state.cards);
    const dispatch = useDispatch();
    // const monsterHealthArmor = dispatch(setMonsterHealthArmor)
    // // console.log(monstersGState[0].filter(monster => monster.order === playerGState.battleNumber))
    // // console.log(monstersGState)
    // let doop = monstersGState[0].filter(monster => monster.order === playerGState.battleNumber)[0]
    // console.log(doop)
    const Doop = new Monster(monsterGState);
    const Choop = new Player(playerGState, cardsGState);
    const [playerState, setPlayerState] = useState({
        Choop,
        spell: ""
    })
    console.log(Doop)
    console.log(Choop)

    const castAction = () => {
        
        //! Selected cards, hand, draw deck, discard deck, and spell
        //! const [cardState, setCardState] = useState({
            //     cards: [],
            //     discardDeck: [],
            //     drawDeck: [],
            //     hand: [],
            //     selectedCards: [],
            //     spell: ""
        // })






        // clear disabled on draw button
        const drawButton = document.getElementById("draw-button")
        drawButton.classList.remove("Mui-disabled")

        // clear highlight on selected cards
        playerState.Choop.selectedCards.forEach(item => {
            const card = document.getElementById(item)
            card.classList.remove("clicked")

        })

        // set the attack to a variable
        // empty selected cards and move to discard
        const playerAttack = playerState.Choop.play();
        Doop.defend(playerAttack)
        dispatch(setMonsterHealthArmor(Doop.health, Doop.armor, Doop.alive));

//     healthArmorUpdate(player1, Choop);
//     healthArmorUpdate(monster1, Doop);


        // remove spell from state
        setPlayerState({ ...playerState, spell: "" })
    }

    // const spellImg = {
    //     height: "50px"
    // }

    const getSpellIMG = (theSpell) => {
        const icon = spells[theSpell].image
        console.log(icon)
        return(
            <Grid
                container
                item
                direction="column"
            >
                <span><img src={icon} alt={theSpell} height={50} width={50}/></span>
            </Grid>
        ) 
    }

    var selectionStyle = {
        backgroundImage: `url(${background})`,
        height: "40vh",
        width: "100%"
    }

    var spellStyle = {
        padding: "25px",
        marginBottom: "25px"
    }


    return (
        <Grid
            style={selectionStyle}
            container
            item
            justify="center"
            direction="row"
            alignItems="flex-end"
        >
            <div style={{ padding: 25 }}>
                <PlayerHand
                    set={setPlayerState}
                    player={playerState}
                />
            </div>
            <div style={{ padding: 25 }}>
                {playerState.spell ?
                    <Button
                        id="action-button"
                        color="primary"
                        variant="contained"
                        size="large"
                        style={spellStyle}
                        onClick={castAction}
                    >
                        {getSpellIMG(playerState.spell)}
                    </Button> : null}
                <Draw
                    set={setPlayerState}
                    player={playerState}
                />
            </div>
            <Discard
                player={playerState}
            />
        </Grid>
    );
};
