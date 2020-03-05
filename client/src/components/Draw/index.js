import React from "react";
import { Button } from "@material-ui/core";

export default function Draw({set, player}) {

    console.log(player)

    const draw = () => {
        player.Choop.drawHand()
        set({ ...player});
    }

    return (
        <>
            <Button
                variant="contained"
                color="primary"
                size="large"
                style={{paddingLeft: 25}}
                onClick={draw}    
            >
                <h1>DRAW!</h1>
            </Button>
        </>
    );
};