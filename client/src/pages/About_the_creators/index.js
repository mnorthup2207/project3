import React from "react";
import { Link } from "react-router-dom";
////Material UI////
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import BGBoss from "../../images/bg-boss.png"
///components////
import CreatorCard from "../../components/Creator_Card";
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
const creators = [
    {
        name: "Dan Brown",
        GitHub: "https://github.com/13uilding",
        FavoriteSpell: "Put your Spell Here",
        img: "https://via.placeholder.com/150"
    },
    {
        name: "Logan Moody",
        GitHub: "https://github.com/13uilding",
        FavoriteSpell: "Put your Spell Here",
        img: "https://via.placeholder.com/150"
    },
    {
        name: "Matt Jeffords",
        GitHub: "https://github.com/13uilding",
        FavoriteSpell: "Put your Spell Here",
        img: "https://via.placeholder.com/150"
    },
]
const DungeonFight = (props) => {
    const classes = useStyles();
    return (
        <>
            <img id="bgBoss" src={BGBoss} alt={"Boss Background"}/>
            <Container id="creatorContainer" maxWidth="lg">
                <Grid container spacing={3} className={classes.root}>
                    <Grid item xs>
                        <Link to="/home"><h2>Home</h2></Link>
                    </Grid>
                </Grid>
                <Grid id="shift" container spacing={3} className={classes.root}>
                    <Grid item xs>
                        <CreatorCard/>
                    </Grid>
                    <Grid item xs>
                        <CreatorCard/>
                    </Grid>
                    <Grid item xs>
                        <CreatorCard/>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default DungeonFight;