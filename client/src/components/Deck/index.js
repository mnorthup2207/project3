import React, { useState } from "react";
import Draw from "../Draw/index";
import Discard from "../Discard/index";
import PlayerHand from "../PlayerHand/index";

////Material UI////
import { Grid, Button } from "@material-ui/core";


import Player from "../../pages/Dungeon_Fight/scripts/characters/Player";
import background from "../../images/bg-leather.png";

export default function Deck() {
    const Choop = new Player("Choop");

    const [playerState, setPlayerState] = useState({
        Choop,
        spell: ""
    })

    const check = () => {
        playerState.Choop.selectedCards.forEach(item => {
            const card = document.getElementById(item)
            card.classList.remove("clicked")

            setPlayerState({...playerState, spell: ""})
        })
    }

    var selectionStyle = {
        backgroundImage: `url(${background})`,
        height: "40vh",
        width: "100%"
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
            <div style={{padding: 25}}>
                <PlayerHand 
                    set={setPlayerState}
                    player={playerState}
                />
            </div>
            <div style={{padding: 25}}>
                <Draw 
                    set={setPlayerState}
                    player={playerState}
                />
            </div>
            {playerState.spell ? <Button id="action-button" onClick={check}>Action: {playerState.spell}</Button> : null}
            <Discard 
                player={playerState}
            />
        </Grid>
    );
};
