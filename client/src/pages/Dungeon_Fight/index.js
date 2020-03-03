// // Environment: Turn this into the connector between the two characters
import React from "react";
import { Link } from "react-router-dom";
////Material UI////
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import CharacterCard from "../../components/Character_Card";
import B1 from "../../images/bg-paper.png";
import B2 from "../../images/bg-rock.png";
import B3 from "../../images/bg-scissors.png";
import "./style.css";
import scripts from "./scripts";

// Destructuring the scripts export
const {
  Monster,
  Player,
  healthArmorUpdate,
  showAttackSpell,
  playerAction,
  playerDrawHand,
  determineMonsterAction,
  monsterAction,
  newRound
} = scripts;

const BGArray = [B1, B2, B3];
const AltArray = ["Paper Background", "Rock Background", "Scissor Background"];

//! Git rid of this
const getRandomInt = () => Math.floor(Math.random() * Math.floor(3));
const picChange = getRandomInt();

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
// const init = () => {

//   // healthArmorUpdate(player1, Choop);
//   // healthArmorUpdate(monster1, Doop);

//   // drawDeck.firstElementChild.innerText = Choop.cards.length;
//   // discardDeck.innerText = 0;
// };

const DungeonFight = props => {
  const classes = useStyles();
	var round = 1;
  // Pointers
  // Add this into an init function
  const Choop = new Player("Choop");
  const Doop = new Monster("Doop");

  // componentDidMount(init())
  return (
		<>
      <img id="picChange" src={BGArray[picChange]} alt={AltArray[picChange]} />
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
        <Grid id="shift" container direction="row" justify="space-between" alignItems="center" className={classes.root}>
          <Grid item xs={4}>
						<h1>{Choop.name} </h1>
						<CharacterCard></CharacterCard>
          </Grid>
          <Grid item xs={2}>
						<h1>Spell</h1>
					</Grid>
        	<Grid item xs={4}>
						<h1>{Doop.name} </h1>
					</Grid>
        </Grid>
        <Grid id="shift" container direction="row" justify="space-between" alignItems="center" className={classes.root}>
					<Grid item xs={2}>
						<h1>Discard Deck</h1>
					</Grid>
          <Grid item xs={8}>
						<h1>Cards map</h1>
          </Grid>
        	<Grid item xs={2}>
						<h1>Draw Deck</h1>
					</Grid>
        </Grid>
      </Container>
    </>
  );
};

export default DungeonFight;

// function Dungeon_Fight(props) {
//   // Buttons and corresponding events
//   const drawBtn = document.getElementById("draw");
//   drawBtn.addEventListener("click", playerDrawHand);
//   const drawDeck = document.querySelector("[name = drawDeck]");
//   drawDeck.addEventListener("click", playerDrawHand);

//   const playBtn = document.getElementById("play");
//   playBtn.addEventListener("click", playerAction);
//   const spell = document.querySelector(".spell");
//   spell.addEventListener("click", playerAction);

//   // Hand pointers
//   const discardDeck = document.querySelector("[name = discardDeck]")
//     .firstElementChild;
//   const handWrapper = document.querySelector(".handWrapper");

//   // Entire wrapper
//   const container = document.querySelector(".container");

//   // Character pointers
//   const player1 = document.getElementById("player1");
//   const monster1 = document.getElementById("monster1");
//   const monsterIntention = document.getElementById("monster1Intention");
//   // Initialize the game board

//   return <h1>Dungeon_Fight</h1>;
// }
