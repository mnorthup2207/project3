import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Intention from "./components/Intention";
import AnimatedCard from "./components/Animated_Card";
import GenericBar from "./components/GenericBar";

const useStyles = makeStyles({
    root: {
        backgroundColor: "none",
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

export default function OutlinedCard() {
    const classes = useStyles();

    return (
        <div className={classes.root} >
            <Intention />
            <AnimatedCard />
            {/* Use the state in place of the player.armor */}
            <GenericBar type="armor" currentValue={10} total={50}/>
            <GenericBar type="health" currentValue={25} total={50}/>
        </div>
    );
}
