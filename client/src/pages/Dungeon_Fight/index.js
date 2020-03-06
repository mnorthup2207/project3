// // Environment: Turn this into the connector between the two characters
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
////Material UI////
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Drawer from "@material-ui/core/Drawer";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
// Redux
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  setHealthArmor,
} from "../../actions/gameActions";
// Our imports
import CharacterCard from "../../components/Character_Card";
import Deck from "../../components/Deck";
import B1 from "../../images/bg-paper.png";
import B2 from "../../images/bg-rock.png";
import B3 from "../../images/bg-scissors.png";
import "./style.css";
import scripts from "./scripts";

// Destructuring the scripts export
const { Monster, Player } = scripts;

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

const DungeonFight = props => {
  // Health and armor state player GLOBAL STORE VALUE
  const playerState = useSelector(state => state.player);
  const monsterState = useSelector(state => state.monster);
  const cardsState = useSelector(state => state.cards);
  const dispatch = useDispatch();
  const monsterImageObj = monsterState.monster

  //! Selected cards, hand, draw deck, discard deck, and spell
  //! const [cardState, setCardState] = useState({
  //     cards: [],
  //     discardDeck: [],
  //     drawDeck: [],
  //     hand: [],
  //     selectedCards: [],
  //     spell: ""
  // })
  // Player Animations
  const [playerAnimationState, setPlayerAnimationState] = useState({
    type: "idle",
    character: "player"
  });
  // Monster Animations
  const [monsterAnimationState, setMonsterAnimationState] = useState({
    type: "idle",
    character: "enemy"
  });

  //! Round effects damage that the spell jackpot does and what the monster intention will be
  //! const [roundState, setRoundState] = useState({
  //   round: 1,
  //   monsterIntention: ""
  // });

  const [state, setState] = React.useState({
    bottom: false
  });

  const toggleDrawer = (side, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const classes = useStyles();
  var round = 1;
  // Pointers
  // Add this into an init function
  // Creat this if it doesn't exist or load if it does
  const Choop = new Player(playerState);
  const Doop = new Monster(monsterState);
  // componentDidMount(init())
    return (
        <>
            <img id="picChange" src={BGArray[playerState.battleNumber]} alt={AltArray[playerState.battleNumber]} />
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
                <Grid container direction="row" justify="space-between" alignItems="center" className={classes.root}>
                    <Grid item xs={4}>
                        <CharacterCard 
                        character="player"
                        // characterState={playerState} 
                        animation={"idle"}>
                        </CharacterCard>
                    </Grid>
                    <Grid item xs={2}>
                        <h1>{Choop.determineSpell}</h1>
                    </Grid>
                    <Grid item xs={4}>
                        {/* Figure this out */}
                        <CharacterCard 
                        character="monster"
                        intention={"ADD ME"}>
                        </CharacterCard>
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
        </>
    );
};

export default DungeonFight;

//

// // Use this when passing in health, armor, totalHealth, and totalArmor
// const mapStateToProps = (playerHealthArmorState, cardState, playerAliveState, monsterAliveState) => ({
//   health: playerHealthArmorState.health,
//   armor: playerHealthArmorState.armor,
//   // totalHealth: playerHealthArmor.totalHealth,
//   // totalArmor: playerHealthArmor.totalArmor
//   cards: cardState.cards,
//   playerAlive: playerAliveState.alive,
//   playerCharacter: playerAliveState.character,
//   monsterAlive: monsterAliveState.alive,
//   monsterCharacter: monsterAliveState.character
// });
// export default connect(
//   // mapStateToProps,
//   { setHealthArmor, setPlayerCards, setCharacterAlive }
// )(DungeonFight);
// export default DungeonFight

// Login.propTypes = {
//   loginUser: PropTypes.func.isRequired,
//   auth: PropTypes.object.isRequired,
//   errors: PropTypes.object.isRequired
// };

// const mapStateToProps = userState => ({
//   auth: userState.auth,
//   errors: userState.errors
// });

// export default connect(
//   mapStateToProps,
//   { loginUser }
// )(Login);

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
