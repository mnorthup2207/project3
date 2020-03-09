import React from "react";
import { useDispatch } from "react-redux";
////Material UI////
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import background from '../../images/bg-card.png';
import { setStatsPlayerDamage } from "../../actions/gameActions";
import Sprite from "../../sprites/getSprite"

import './styles.css';

// Each Card will have a different type = Rock, Paper or Scissors
//    Example sprite =>  <Sprite character = "scissor" type = "one" />


export default function PlayerHand({ set, player }) {

    const dispatch = useDispatch();

    var cardStyle = {
        backgroundImage: `url(${background})`,
        height: "200px",
        width: "145px",
        marginLeft: "15px",
        marginRight: "15px",
    }

    const select = e => {
        const cardId = e.currentTarget.id
        dispatch(setStatsPlayerDamage(0))
        // console.log(cardId);
        let spell = "";
        let cards = player.Choop.selectedCards
        if (cards.includes(cardId)) {
            cards.splice(cards.indexOf(cardId), 1)
        } else {
            cards.push(cardId)
        }

        const cardEl = document.getElementById(cardId)
        if (cardEl.classList.contains("clicked")) {
            cardEl.classList.remove("clicked")
        } else {
            cardEl.classList.add("clicked")
        }

        if (cards.length === 3) {
            spell = player.Choop.determineSpell()
            let damage = player.Choop.attack(spell)[0]
            dispatch(setStatsPlayerDamage(damage))
            // Update the global variable for attack damage
            // console.log(spell);
        }
        set({ ...player, spell });
    }

    const getCardSprites = (card) => {
        const RPS = card[0]
        const number = parseInt(card[1])
        let type;
        let character

        switch (RPS) {
            case 'r':
                character = 'rock'
                break
            case 'p':
                character = 'paper'
                break
            case 's':
                character = 'scissor'
                break
            default:
                throw console.error("The RPS for cards is not working")
        }

        if (number <= 3) {
            type = "one"
        } else if (4 <= number <= 6) {
            type = "two"
        } else if (7 <= number) {
            type = "three"
        }

        return <>
            <h3 id='cardNumber'>{number}</h3>
            <div id="card-sprite">
                <Sprite character={character} type={type} />
            </div>
        </>
    }


    return (
        <Grid
            container
            item
            justify="space-between"
            style={{ width: 875 }}
        >
            {player.Choop.hand.map(card => {
                return (
                    <Card id={card} onClick={select} style={cardStyle}>
                        <CardContent id="card-content">
                            <Typography color="textSecondary">
                                {getCardSprites(card)}
                            </Typography>
                        </CardContent>
                    </Card>
                )
            })}
        </Grid>
    );
};