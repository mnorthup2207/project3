import React from "react";
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
    return (
        <Container id="fightContainer" maxWidth="lg">
            <Grid container spacing={3} className={classes.root}>
                <Grid item xs>
                    <Link to="/home"><h2>Home</h2></Link>
                </Grid>
                <Grid item xs>
                    <Link to="/map"><h2>Map</h2></Link>
                </Grid>
            </Grid> 
            <Grid id="shift" container spacing={3} className={classes.root}>
                <Grid item xs>
                    <h1>Map Goes Here</h1>
                </Grid>
            </Grid>
        </Container>
    );
};

export default DungeonFight;