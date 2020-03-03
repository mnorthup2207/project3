import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

////Sprites////
import Sprite from "../../sprites/getSprite";
import sprites from "../../sprites/sprites.json";

import "./style.css";

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
})

export default function OutlinedCard() {

    return (
        <Sprite charcter={sprites.player.main} />
    );
}
export default AnimatedCard;
