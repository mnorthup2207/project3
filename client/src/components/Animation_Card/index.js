import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
////Sprites////
import Sprite from "../../sprites/getSprite";
import sprites from "../../sprites/sprites.json";
import "./style.css";
import { PromiseProvider } from 'mongoose';

const AnimatedCard = (props) => {
    return (
        <div id="spriteDiv">
            <Sprite character={props[0]} />
        </div>
    );
}

export default AnimatedCard;
