import React from "react";
import { Link } from "react-router-dom";
////Material UI////
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import B1 from "../../images/bg-paper.png";
import B2 from "../../images/bg-rock.png";
import B3 from "../../images/bg-scissors.png";
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
const BGArray = [B1, B2, B3];
const AltArray = ["Paper Background", "Rock Background", "Scissor Background"];
const getRandomInt = () => Math.floor(Math.random() * Math.floor(3));
const picChange = getRandomInt();


const DungeonFight = (props) => {
    const classes = useStyles();
    return (
        <>
        <img id="picChange" src={BGArray[picChange]} alt={AltArray[picChange]}/>
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
                    <h1>Fight Goes Here</h1>
                </Grid>
            </Grid>
        </Container>
    </>
    );
};

export default DungeonFight;