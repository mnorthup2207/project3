import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Draw from "../Draw/index";
import Discard from "../Discard/index";
import PlayerHand from "../PlayerHand/index";

////Material UI////
import { Grid, Button } from "@material-ui/core";
import Tooltip from '@material-ui/core/Tooltip';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import Player from "../../pages/Dungeon_Fight/scripts/characters/Player";
import Monster from "../../pages/Dungeon_Fight/scripts/characters/Monster";
import background from "../../images/bg-leather.png";
import spells from "./spell.json"
import {
    setHealthArmor,
    setMonsterHealthArmor,
    setPlayerAnimation,
    setMonsterAnimation,
    setStatsRound,
    setStatsPlayerDamage,
    setStatsTotalDamage,
    setStatsMonsterDamage
} from "../../actions/gameActions";
// import '../../images/spells'

export default function Deck() {
    const playerGState = useSelector(state => state.player);
    const monsterGState = useSelector(state => state.monster);
    const monstersGState = useSelector(state => state.monsters);
    const statsGState = useSelector(state => state.stats);
    const { round, totalRounds } = statsGState;
    // console.log(round)
    const dispatch = useDispatch();
    // const monsterHealthArmor = dispatch(setMonsterHealthArmor)
    // console.log(monstersGState[0].filter(monster => monster.order === playerGState.battleNumber))
    // console.log(monstersGState)
    // let doop = monstersGState[0].filter(monster => monster.order === playerGState.battleNumber)[0]
    // console.log(doop)
    const Doop = new Monster(monsterGState);
    const Choop = new Player(playerGState, playerGState.cards);
    const [playerState, setPlayerState] = useState({
        Choop,
        spell: ""
    })
    // console.log(Doop)
    // console.log(Choop)

    const waitAnimation = (animation, nextFunc) => {
        let timer = 1000;
        switch (animation) {
            case "blink":
            case "idle":
                timer = 1800;
                break;
            case "death":
                timer = 1500;
                break;
            case "throw":
            case "hurt":
            case "kick":
                timer = 1200;
                break;
            default:
                timer = 10;
                break;
        }
        // console.log(timer)
        setTimeout(nextFunc, timer);
    }

    const castAction = () => {
        // clear disabled on draw button
        const drawButton = document.getElementById("draw-button")
        drawButton.classList.remove("Mui-disabled")

        // clear highlight on selected cards
        playerState.Choop.selectedCards.forEach(item => {
            const card = document.getElementById(item)
            card.classList.remove("clicked")

        })
        // set the attack to a variable
        // empty selected cards and move to discard
        ////////       
        let animation = "throw";
        dispatch(setPlayerAnimation(animation));
        const playerAttack = playerState.Choop.play();
        Doop.defend(playerAttack);
        dispatch(setMonsterHealthArmor(Doop.health, Doop.armor, Doop.alive));
        dispatch(setHealthArmor(Choop.health, Choop.armor, Choop.alive));
        setPlayerState({ ...playerState, spell: "" })
        // Stats dispatch
        dispatch(setStatsPlayerDamage(playerAttack[0]));
        // Wait animation
        //! Setting up the animations
        waitAnimation(animation, () => {
            // console.log(playerAttack)
            // Change this to generate a modal to go to the next page
            animation = "idle";
            dispatch(setPlayerAnimation(animation));
            monsterAction()
        })
    }
    const getSpellIMG = (theSpell) => {
        const icon = spells[theSpell].image
        // console.log(icon)
        return(
            <Grid
                container
                item
                direction="column"
            >
                <span><img src={icon} alt={theSpell} height={50} width={50} /></span>
            </Grid>
        )
    }
    const determineMonsterAction = () => {
        // console.log(Doop.sequence)
        // console.log(round);
        if ( Doop.sequence.length > round - 1) {
            // console.log(Doop.sequence)
            // console.log(Doop.sequence[round - 1])
            return Doop.sequence[round - 1];
        }
        return Doop.sequence[(round - 1) % Doop.sequence.length]
    }

    const monsterAction = () => {
        if (Doop.alive) {
            // Animation
            let animation = "attack";
            dispatch(setMonsterAnimation(animation));
            // Action
            let action = determineMonsterAction();
            // console.log(action, Doop, Doop[action]);
            let doopAttack = Doop[action]();
            // console.log(doopAttack)
            Choop.defend(doopAttack);
            
            dispatch(setHealthArmor(Choop.health, Choop.armor, Choop.alive));
            dispatch(setMonsterHealthArmor(Doop.health, Doop.armor, Doop.alive));
            // Stats dispatch
            dispatch(setStatsRound());
            dispatch(setStatsMonsterDamage(doopAttack[0]));
            // Wait animation
            waitAnimation(animation, () => {
                animation = "idle";
                Choop.round = round;
                dispatch(setStatsTotalDamage())
                waitAnimation("wait to update stats", () => {
                    dispatch(setStatsPlayerDamage(0));
                    dispatch(setStatsMonsterDamage(0));
                });
            })
        }
    }

    const SpellTooltip = withStyles(theme => ({
        tooltip: {
            backgroundColor: '#f5f5f9',
            color: 'rgba(0, 0, 0, 0.87)',
            maxWidth: 200,
            fontSize: theme.typography.pxToRem(12),
            border: '1px solid #dadde9',
        },
    }))(Tooltip);


    var selectionStyle = {
        backgroundImage: `url(${background})`,
        height: "40vh",
        width: "100%"
    }

    var spellStyle = {
        padding: "25px",
        marginBottom: "25px"
    }


    return (
        <Grid
            style={selectionStyle}
            container
            item
            justify="center"
            direction="row"
            alignItems="flex-end"
        >
            <div style={{ padding: 25 }}>
                <PlayerHand
                    set={setPlayerState}
                    player={playerState}
                />
            </div>
            <div style={{ padding: 25 }}>
                {playerState.spell ?
                    <SpellTooltip title={
                        <React.Fragment>
                            <Typography>{playerState.spell.toUpperCase()}</Typography>
                            <p>{spells[playerState.spell].description}</p>
                        </React.Fragment>}>
                        <Button
                            id="action-button"
                            color="primary"
                            variant="contained"
                            size="large"
                            style={spellStyle}
                            onClick={castAction}
                        >
                            {getSpellIMG(playerState.spell)}
                        </Button>
                    </SpellTooltip> : null}
                <Draw
                    set={setPlayerState}
                    player={playerState}
                />
            </div>
            <Discard
                player={playerState}
            />
        </Grid>
    );
};

