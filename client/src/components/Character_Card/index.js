import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Intention from "./components/Intention";
import HealthArmorBars from "./components/HealthArmorBars";
//Sprites////
import Sprite from "../../sprites/getSprite";

// I believe this is where I want to use context to then pass that information into all the below

const useStyles = makeStyles({
    root: {
        backgroundColor: "none",
        height: "rem",
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function CharacterCard(props) {
    const classes = useStyles();
    const display = (props.character.name==="Choop") ? 
        ({name: "Choop", sprite: "player", spriteType: "main", health: 45, totalHealth: 50, armor: 25, totalArmor: 50}):
        ({name: "Monster", sprite: props.type, spriteType: "one", health: 55, totalHealth: 100, armor: 50, totalArmor: 150})
    return (
        <div className={classes.root} >
            {/* Pass in the intention for the monster, and maybe the name in the font that logan is working on */}
            <Intention intention={display.name}/>
            <Sprite 
                character={display.sprite} 
                type={display.spriteType}
            />
            {/* Use the state in place of the player.armor */}
            <HealthArmorBars health={display.health} totalHealth={display.totalHealth} armor={display.armor} totalArmor={display.totalArmor}/>
        </div>
    );
}
