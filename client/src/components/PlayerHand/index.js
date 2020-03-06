import React from "react";

////Material UI////
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import background from '../../images/bg-card.png'


////Sprite////
import Sprite from "../../sprites/getSprite";

import './styles.css';

// Each Card will have a different type = Rock, Paper or Scissors
//    Example sprite =>  <Sprite character = "scissor" type = "one" />


export default function PlayerHand({ set, player }) {


    var cardStyle = {
        backgroundImage: `url(${background})`,
        height: "200px",
        width: "145px",
        marginLeft: "15px",
        marginRight: "15px"
    }

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
            style={{width: 875}}
        >
            {player.Choop.hand.map(card => {
                return (
                    <Card id={card} onClick={select} style={cardStyle}>
                        <CardContent>
                            <Typography color="textSecondary">
                                <div id="card-sprite">
                                    {/* <Sprite character="scissor" type="one" /> */}
                                </div>
                                {card}
                            </Typography>
                        </CardContent>
                    </Card>
                )
            })}
        </Grid>
    );
};