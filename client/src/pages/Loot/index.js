import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateTotalHealth, updateTotalArmor, setCards } from "../../actions/gameActions";

import "./style.css"
import treaseurePic from "../../images/bg-loot.png";
import background from "../../images/bg-card.png"

////Material UI////
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
}));

const Loot = () => {
    const classes = useStyles();

    const playerState = useSelector(state => state.player)
    const dispatch = useDispatch();

    const [selectedCards, setSelectedCards] = useState([]);
    const [upgradedCards, setUpgradeCards] = useState(false);

    const [upgradeDefense, setUpgradeDefense] = useState({
        totalHealth: 0,
        totalArmor: 0,
    });
    const { totalHealth, totalArmor } = upgradeDefense;
    const [expanded, setExpanded] = React.useState(false);
    
    const handleChange = panel => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    const healthHandleChange = () => {
        setUpgradeDefense({ ...upgradeDefense, totalHealth: totalHealth + 5 })
        dispatch(updateTotalHealth(5));
        console.log("state-health", totalHealth);
    }
    
    const armorHandleChange = () => {
        setUpgradeDefense({ ...upgradeDefense, totalArmor: totalArmor + 5 })
        dispatch(updateTotalArmor(5));
        console.log("armor", totalArmor);
    }
    const upgradeCardsHandleChange = () => {
        console.log("Death to console logs")
        let upgradingCards = playerState.cards.map(card => { 
            for ( let i = 0; i < selectedCards.length; i++ ) {
                if ( selectedCards[i] === card ) {
                    let newNum = parseInt(card[1]) + 1;
                    let newCard = card[0] + newNum + card.slice(2) + "+";
                    return newCard
                }
            }
            return card
        })
        dispatch(setCards(upgradingCards));
        setUpgradeCards(true);
    }
    const select = e => {
        const cardId = e.currentTarget.id
        // dispatch(setStatsPlayerDamage(0))
        const cardEl = document.getElementById(cardId)
        if (cardEl.classList.contains("clicked")) {
            cardEl.classList.remove("clicked")
            setSelectedCards(selectedCards.filter(card => card !== cardId));
        } else {
            cardEl.classList.add("clicked")
            setSelectedCards([cardId, ...selectedCards]);
        }
    }

    // For testing purposes
    useEffect(() => {
        console.log(selectedCards)        
    })

    var cardStyle = {
        backgroundImage: `url(${background})`,
        height: "75px",
        width: "50px",
        marginLeft: "5px",
        marginRight: "5px"
    }

    return (
        <>
            <img id="treasureImage" src={treaseurePic} alt="map" />
            <div className="helpfulDiv"></div>
            <Container id="fightContainer" maxWidth="lg">
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
                <Grid container alignItems="center" className={classes.root}>
                    <Grid item xs>
                        <div className={classes.root}>
                            <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                                <ExpansionPanelSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header"
                                >
                                    <strong id="expansionContainer"><h2>Upgrade Cards</h2></strong>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <Grid 
                                        container
                                        item
                                        justify="space-between"
                                        direction="row"
                                    >
                                        {playerState.cards.map(card => {
                                            return (
                                                <Card key={card} id={card} onClick={select} style={cardStyle}>
                                                    <CardContent>
                                                        <Typography color="textSecondary">
                                                            {card}
                                                        </Typography>
                                                    </CardContent>
                                                </Card>
                                            )
                                        })}
                                    </Grid>
                                    <Grid 
                                        container
                                        item
                                        justify="center"
                                        direction="row"
                                    >
                                        {(selectedCards.length === 3 && !upgradedCards) ? (
                                        <Button
                                            onClick={() => upgradeCardsHandleChange()}
                                            color="primary"
                                            size="large"
                                            variant="contained"
                                            id="expansionButton">
                                            Upgrade Cards
                                        </Button>) : (<Button
                                            onClick={() => upgradeCardsHandleChange()}
                                            color="primary"
                                            size="large"
                                            variant="contained"
                                            disabled
                                            id="expansionButton">
                                            Upgrade Cards
                                        </Button>
                                        
                                    )}
                                    </Grid>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                            <ExpansionPanel expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                                <ExpansionPanelSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel2bh-content"
                                    id="panel2bh-header"
                                >
                                    <h2 id="expansionContainer2"><strong>Upgrade Defense</strong></h2>
                                    <h3 id="expansionContainer2"><strong>Health: {playerState.totalHealth}</strong></h3>
                                    <h3 id="expansionContainer2"><strong>Armor: {playerState.totalArmor}</strong></h3>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    {totalHealth > 4 || totalArmor > 0 ? (<Button
                                        onClick={() => healthHandleChange()}
                                        color="primary"
                                        size="large"
                                        variant="contained"
                                        disabled
                                        id="expansionButton">
                                        Upgrade Health
                                    </Button>) : (
                                        <Button
                                        onClick={() => healthHandleChange()}
                                        color="primary"
                                        size="large"
                                        variant="contained"
                                        id="expansionButton">
                                        Upgrade Health
                                    </Button>
                                    )}
                                    <h2 id="expansionH2">-OR-</h2>
                                    {totalArmor > 4 || totalHealth > 0 ? (<Button
                                        onClick={() => armorHandleChange()}
                                        color="primary"
                                        size="large"
                                        variant="contained"
                                        disabled>
                                        Upgrade Armor
                                    </Button>) : (
                                        <Button
                                        onClick={() => armorHandleChange()}
                                        color="primary"
                                        size="large"
                                        variant="contained">
                                        Upgrade Armor
                                    </Button>
                                    )}
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default Loot;