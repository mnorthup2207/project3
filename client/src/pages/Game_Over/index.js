import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./style.css";
import overPic from "../../images/game-over.png";

////Material UI////
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
// import { makeStyles } from '@material-ui/core/styles';



const GameOver = () => {
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
                <Grid container alignItems="center" >
                    <Grid item xs>
                        <h1 id="">You Died</h1>
                    </Grid>
                    <Grid item xs>
                        <h1>Fighter here</h1>
                    </Grid>
                    <Grid item xs>
                        <h1>Choop Stats</h1>
                        <h3>Monsters Defeated: 3</h3>
                        <h3>Spells Cast: 34</h3>
                        <h3>Something Else Maybe</h3>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default GameOver;