import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import "./style.css";
import victoryPic from "../../images/triumph.png";
import Sprite from "../../sprites/getSprite.js";

////Material UI////
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';


const GameOver = () => {
    const { character, type } = useSelector(state => state.playerSprite);
    const playerState = useSelector(state => state.player);
    const stats = useSelector(state => state.stats);
    return (
        <>
            <img id="victoryImage" src={victoryPic} alt="Victory" />
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
                        <h1 id="">Victory!</h1>
                    </Grid>
                    <Grid
                        container
                        item
                        xs
                        >
                        <div id="sprite-div">
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