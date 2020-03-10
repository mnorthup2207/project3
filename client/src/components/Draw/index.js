import React from "react";
import { Grid, Button, Hidden } from "@material-ui/core";

export default function Draw(props) {

    const {set, player, spell} = props;
    // console.log(player)

    const draw = () => {
        const drawButton = document.getElementById("draw-button")
        player.Choop.selectedCards = [];
        player.Choop.drawHand();
        drawButton.classList.add("Mui-disabled")
        set({ ...player, spell: ""});
    }

    return (
        <Grid container item >
            <Button
                id="draw-button"
                variant="contained"
                color="primary"
                size="large"
                style={{paddingLeft: 25}}
                onClick={draw}    
            >
                <h4>DRAW!</h4>
            </Button>
        </Grid>
    );
};