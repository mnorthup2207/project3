import React from "react";
import { Button } from "@material-ui/core";

export default function Draw({player}) {
    console.log(player.prototype);

    const draw = () => {
        console.log("yep")
        player.prototype.shuffleCards();
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