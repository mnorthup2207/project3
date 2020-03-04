import React from "react";
import Draw from "../Draw/index";
import Discard from "../Discard/index";
import PlayerHand from "../PlayerHand/index";
import { Grid } from "@material-ui/core";

export default function Deck() {
    return (
        <Grid 
            container
            direction="row"
            justify="space-around"
            alignItems="flex-end"
        >
            <PlayerHand />
            <Draw />
            <Discard />
        </Grid>
    );
};
