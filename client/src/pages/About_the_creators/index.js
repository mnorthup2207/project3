import React from "react";
import { Link } from "react-router-dom";
////Material UI////
import Button from '@material-ui/core/Button';
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
        handle: "13uilding",
        FavoriteSpell: "Desolate",
        character: "rock",
        type: "two"
    },
    {
        name: "Logan Moody",
        GitHub: "https://github.com/lbmoody",
        handle: "lbmoody",
        FavoriteSpell: "Slice",
        character: "paper",
        type: "two"
    },
    {
        name: "Matt Jeffords",
        GitHub: "https://github.com/Choop-A-Loop",
        handle: "Choop-A-Loop",
        FavoriteSpell: "Jackpot",
        character: "boss",
        type: "two"
    },
    {
        name: "McCabe Northup",
        GitHub: "https://github.com/mnorthup2207",
        handle: "mnorthup2207",
        FavoriteSpell: "Tank",
        character: "enemy",
        type: "two"
    }
]
const AboutCreators = () => {
    const classes = useStyles();
    return (
        <>
            <img id="bgBoss" src={BGBoss} alt={"Boss Background"}/>
            <Container id="creatorContainer" maxWidth="lg">
                <Grid container spacing={3} className={classes.root}>
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
                <Grid id="creatorCardContainer" container justify="space-evenly" spacing={4} className={classes.root}>
                    {creators.map(creator => (
                        <Grid key={creator.name} item xs={5}>
                        <CreatorCard 
                            name={creator.name}
                            GitHub={creator.GitHub}
                            FavoriteSpell={creator.FavoriteSpell}
                            handle={creator.handle}    
                            character={creator.character}    
                            type={creator.type}    
                        />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </>
    );
};

export default AboutCreators;