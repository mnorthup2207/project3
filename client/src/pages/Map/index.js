import React, { useEffect } from "react";
import { Link } from "react-router-dom";
////Material UI////
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import "./style.css"

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const DungeonFight = (props) => {
    const classes = useStyles();
    useEffect(() => {
        const canvas = document.getElementById('draw');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        canvas.addEventListener('mousedown', (e) => {
            console.log(e);

            // [lastX, lastY] = [e.offsetX, e.offsetY];
        });
    })
    return (
        <Container id="fightContainer" maxWidth="lg">
            <Grid container spacing={3} className={classes.root}>
                <Grid item xs>
                    <Link to="/home"><h2>Home</h2></Link>
                </Grid>
            </Grid>
            <Grid id="shift" container spacing={3} className={classes.root}>
                <Grid item xs>
                    <canvas id="draw" width="800" height="800"></canvas>
                </Grid>
            </Grid>
        </Container>
    );
};

export default DungeonFight;