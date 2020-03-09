import React from "react";
import { Link } from "react-router-dom";

import "./style.css";
import overPic from "../../images/game-over.png";
import Sprite from "../../sprites/getSprite.js";

////Material UI////
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { useSelector, useDispatch } from "react-redux";
import { resetBattleNumber } from "../../actions/gameActions";
// import { makeStyles } from '@material-ui/core/styles';



const GameOver = () => {
    const { character, type } = useSelector(state => state.monsterSprite);
    const playerState = useSelector(state => state.player);
    const stats = useSelector(state => state.stats);
    const dispatch = useDispatch();

    
    dispatch(resetBattleNumber());
    console.log(playerState);
    console.log(stats);
    
    return (
        <>
            <img id="overImage" src={overPic} alt="Game Over" />
            <div className="helpfulDiv2"></div>
            <Container id="gameOverContainer" maxWidth="lg">
                <Grid container spacing={3} >
                    <Grid item xs>
                        <Link to="/home">
                            <Button
                                color="primary"
                                size="large"
                            >
                                <h1>Home</h1>
                                <i className="material-icons" style={{ marginLeft: 10 }}>house</i>
                            </Button>
                        </Link>
                    </Grid>
                </Grid>
                <Grid container id="centerWrapper" justify="space-between" alignItems="center" >
                    <Grid item xs={2}>
                        <h1 id="">You Died</h1>
                    </Grid>
                    <Grid container item xs>
                        <div id="spriteDiv2">
                            <Sprite character={character} type={type} />
                        </div>
                    </Grid>
                    <Grid item xs>
                        <h1 id="choopStats">Choop Stats</h1>
                        <h3>Monsters Defeated: {playerState.battleNumber}</h3>
                        <h3>Spells Cast: {stats.totalRounds}</h3>
                        <h3>Damage Dealt: {stats.playerTotalDamage}</h3>
                        <h3>Health Remaining: {playerState.health}</h3>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default GameOver;