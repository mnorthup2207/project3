import React from "react";

////Material UI////
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


////Sprite////
import Sprite from "../../sprites/getSprite";

import './styles.css';

// Each Card will have a different type = Rock, Paper or Scissors
//    Example sprite =>  <Sprite character = "scissor" type = "one" />


export default function PlayerHand({ set, player }) {

    const select = e => {
        const cardId = e.currentTarget.id

        console.log(cardId);
        let spell = "";
        let cards = player.Choop.selectedCards
        if (cards.includes(cardId)) {
            cards.splice(cards.indexOf(cardId), 1)
        } else {
            cards.push(cardId)
        }

        const cardEl = document.getElementById(cardId)
        if (cardEl.classList.contains("clicked")){
            cardEl.classList.remove("clicked")
        } else {
            cardEl.classList.add("clicked")
        }

        if (cards.length === 3) {
            spell = player.Choop.determineSpell()
            console.log(spell);
        }
        set({ ...player , spell});
    }

    return (
        <Grid
            container
            item
            justify="space-between"
        >
            {player.Choop.hand.map(card => {
                return (
                    <Card id={card} onClick={select} style={{margin: 25}}>
                        <CardContent>
                            <Typography color="textSecondary">
                                {/* <Sprite character="scissor" type="one" /> */}
                                {card}
                            </Typography>
                        </CardContent>
                    </Card>
                )
            })}
        </Grid>
    );
};