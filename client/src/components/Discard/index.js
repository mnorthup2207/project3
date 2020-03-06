import React from "react";
import CardStack from "../../images/card-stack.png";

////Material UI////
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

export default function Discard({player}) {
    return (
        <>
            {player.Choop.discardDeck.length > 1 && <img src={CardStack} alt="stack of cards" style={{height: 250}} />}
        </>
    );
};