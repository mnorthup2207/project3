import React from 'react';
import { useSelector } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from "@material-ui/core";
import Intention from "./components/Intention";
import HealthArmorBars from "./components/HealthArmorBars";
//Sprites////
import Sprite from "../../sprites/getSprite";
import './style.css'

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
    console.log(props)
    const { character, type } = useSelector(state => state[props.character + "Sprite"])
    const playerAnimation = useSelector(state => state.playerAnimation);
    const monsterAnimation = useSelector(state => state.monsterAnimation);
    // const display = (props.character === "player") ?: 100, armor: 50, totalArmor: 150 })
    return (
        <div className={classes.root} >
            <Grid
                container
                direction="column"
                justify="flex-end"
                alignItems="center"
            >
                {/* Pass in the intention for the monster, and maybe the name in the font that logan is working on */}
                <Intention intention={props.character} />
                <div id='divSprite'>
                    <Sprite
                        character={character}
                        type={type}
                    />
                </div>
                {/* Use the state in place of the player.armor */}
            </Grid>
            <HealthArmorBars character={props.character} />
        </div>
    );
}
