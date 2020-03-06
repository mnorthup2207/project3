import React from "react";
import { Grid, Button, Hidden } from "@material-ui/core";

export default function Draw(props) {

    const {set, player, spell} = props;
    console.log(player)

    const draw = () => {
        player.Choop.selectedCards = [];
        player.Choop.drawHand();
        set({ ...player, spell: ""});
    }

    return (
        <Grid container item >
            <Button
                variant="contained"
                color="primary"
                size="large"
                style={{paddingLeft: 25}}
                onClick={draw}    
            >
                <h1>DRAW!</h1>
            </Button>
        </Grid>
    );
};