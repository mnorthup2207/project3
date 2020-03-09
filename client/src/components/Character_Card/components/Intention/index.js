import React from 'react';
import { useSelector } from "react-redux";
import { Grid } from "@material-ui/core";
import intentions from "./intention.json";

export default function Intention(props) {
    const sequence = useSelector(state => state.monster.sequence);
    const round = useSelector(state => state.stats.round);

    const determineIntention = (round) => {
        let intention = "";
        console.log("Determining intention")
        console.log(round, sequence.length);
        if (sequence.length > round - 1) {
            intention = sequence[round - 1];
        } else {
            intention = sequence[(round - 1) % sequence.length]
        }
        console.log(intentions, intention)
        const icon = intentions[intention].image
        console.log(icon)
        return (
            <Grid
                container
                justify="center"
            >
                <span><img src={icon} alt={intention} height={50} width={50} /></span>
            </Grid>
        )
    }
    return (
        (props.intention === "monster") ?
            determineIntention(round)
            : (null)
    );
}
