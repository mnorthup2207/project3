import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./style.css"
import treaseurePic from "../../images/bg-loot.png";

////Material UI////
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
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
        setUpgradeDefense({...upgradeDefense, totalHealth: totalHealth + 1})
        console.log("health", totalHealth);
        
    }
    const armorHandleChange = () => {
        setUpgradeDefense({...upgradeDefense, totalArmor: totalArmor + 1})
        console.log("armor", totalArmor);
    }
    const handleReset = () => {
        setUpgradeDefense({totalArmor: 0, totalHealth: 0})
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
                                    <Typography>
                                        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                                        maximus est, id dignissim quam.
                                    </Typography>
                                    <p>adfgsffgfsdfsfsd
                                        sdfsfsdfsdfs
                                        sdfsfsdfsdfssdfsdf
                                        sdfsfsdfsdfssdfsdffsdf
                                        sdfsfsdfsdfssdfsdffsdfsdf
                                        sdfsfsdfsdfssdfsdffsdffsd
                                        fsd

                                    </p>
                                    <p>adfgsffgfsdfsfsd
                                        sdfsfsdfsdfs
                                        sdfsfsdfsdfssdfsdf
                                        sdfsfsdfsdfssdfsdffsdf
                                        sdfsfsdfsdfssdfsdffsdfsdf
                                        sdfsfsdfsdfssdfsdffsdffsd
                                        fsd

                                    </p>
                                    <p>adfgsffgfsdfsfsd
                                        sdfsfsdfsdfs
                                        sdfsfsdfsdfssdfsdf
                                        sdfsfsdfsdfssdfsdffsdf
                                        sdfsfsdfsdfssdfsdffsdfsdf
                                        sdfsfsdfsdfssdfsdffsdffsd
                                        fsd

                                    </p>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                            <ExpansionPanel expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                                <ExpansionPanelSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel2bh-content"
                                    id="panel2bh-header"
                                >
                                    <h2 id="expansionContainer2"><strong>Upgrade Defense</strong></h2>
                                    <h3 id="expansionContainer2"><strong>Health: {totalHealth}</strong></h3>
                                    <h3 id="expansionContainer2"><strong>Armor: {totalArmor}</strong></h3>
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
                                    <Button 
                                    onClick={() => handleReset()}
                                    color="primary"
                                    size="large"
                                    variant="contained"
                                    id="expansionButton2"
                                    >Reset</Button>
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