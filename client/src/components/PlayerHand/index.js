import React from "react";

////Material UI////
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

////Sprite////
// import Sprite from "../../sprites/getSprite";



// Each Card will have a different type = Rock, Paper or Scissors
//    Example sprite =>  <Sprite character = "scissor" type = "one" />


export default function PlayerHand({ set, player }) {

    const select = (data) => {
        let spellState = "";
        let cards = player.Choop.selectedCards
        if (cards.includes(data)) {
            cards.splice(cards.indexOf(data), 1)
        } else {
            cards.push(data)
        }

        if (cards.length === 3) {
            spellState = player.Choop.determineSpell()
            console.log(spellState);
        }
        set({ ...player }, spellState);
    }

    return (
        <>
            {player.Choop.hand.map(card => {
                return (
                    <Card onClick={() => select(card)}>
                        <CardContent>
                            <Typography color="textSecondary">
                                {card}
                            </Typography>
                        </CardContent>
                    </Card>
                )
            })}
        </>
    );
};