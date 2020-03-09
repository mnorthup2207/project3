// // Environment: Turn this into the connector between the two characters
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
////Material UI////
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import Container from "@material-ui/core/Container";
import Drawer from "@material-ui/core/Drawer";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
// Redux
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { 
    setHealthArmor, 
    setBattleNumber
} from "../../actions/gameActions";
// Our imports
import CharacterCard from "../../components/Character_Card";
import Deck from "../../components/Deck";
import B1 from "../../images/bg-paper.png";
import B2 from "../../images/bg-rock.png";
import B3 from "../../images/bg-scissors.png";
import "./style.css";
import scripts from "./scripts";

// Background
const BGArray = [B1, B2, B3];
const AltArray = ["paper background", "rock background", "scissor background"];

// Functions
const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary
    }
}));
// End of fight
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const DungeonFight = props => {
    const stats = useSelector(state => state.stats);
    const playerState = useSelector(state => state.player);
    const monsterState = useSelector(state => state.monster);
    const battleNumber = useSelector(state => state.player.battleNumber)
    const dispatch = useDispatch();

    const [open, setOpen] = React.useState(false);
    
    useEffect(() => {
        if (!(playerState.alive && monsterState.alive)) {
            dispatch(setBattleNumber(battleNumber + 1))
            dispatch(setHealthArmor(playerState.health, playerState.totalArmor, playerState.alive))
            setOpen(true);
        }
    }, [playerState.alive, monsterState.alive])

    
    const handleDialogClose = () => {
        setOpen(false);
    };

    const classes = useStyles();
    // componentDidMount(init())
    return (
        <>
            <img
                id="picChange"
                src={BGArray[playerState.battleNumber]}
                alt={AltArray[playerState.battleNumber]}
            />
            <Container id="fightContainer" maxWidth="lg">
                <Grid container spacing={3} className={classes.root}>
                    <Grid item xs>
                        <Link to="/home">
                            <h2>Home</h2>
                        </Link>
                    </Grid>
                    <Grid item xs>
                        <Link to="/map">
                            <h2>Map</h2>
                        </Link>
                    </Grid>
                </Grid>
                {/* Row 1 */}
                <Grid
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="center"
                    className={classes.root}
                >
                    <Grid item xs={4}>
                        <CharacterCard
                            character="player"
                            // characterState={playerState}
                            animation={"idle"}
                        ></CharacterCard>
                    </Grid>
                    <Grid item xs={2}>
                        {stats.playerTurnDamage ? stats.playerTurnDamage : ""}
                    </Grid>
                    <Grid item xs={4}>
                        {/* Figure this out */}
                        <CharacterCard
                            character="monster"
                            intention={"ADD ME"}
                        ></CharacterCard>
                    </Grid>
                </Grid>
                {/* Row 2 */}
            </Container>
            <Grid
                container
                item
                alignItems="flex-end"
                id="deck-floor"
                justify="center"
            >
                <Deck />
            </Grid>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleDialogClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title">
                    {(playerState.alive) ? ("Victory") : ("Game Over")}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        {(playerState.alive) ? 
                            ("You have slain the mighty monster. Time for some swag, loot, and all things shiny!") :
                            ("You were killed...")}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Link to={(playerState.alive) ? ("/loot") : ("/gameover")}>
                        <Button
                            color="secondary"
                            size="large"
                            style={{ margin: 20 }}
                        >
                            Proceed
                        </Button>
                    </Link>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default DungeonFight;
