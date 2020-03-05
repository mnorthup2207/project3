import React, { useState } from "react";
import Draw from "../Draw/index";
import Discard from "../Discard/index";
import PlayerHand from "../PlayerHand/index";

////Material UI////
import { Grid } from "@material-ui/core";


import Player from "../../pages/Dungeon_Fight/scripts/characters/Player";

export default function Deck() {
    const Choop = new Player("Choop");

    const [playerState, setPlayerState] = useState({
        Choop
    })

    return (
        <Grid 
            container
            direction="row"
            justify="space-around"
            alignItems="center"
        >
            <PlayerHand 
                set={setPlayerState}
                player={playerState}
            />
            <Draw 
                set={setPlayerState}
                player={playerState}
            />
            <Discard 
                player={playerState}
            />
        </Grid>
    );
};
