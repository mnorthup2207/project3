import React from "react";
import { Link } from "react-router-dom";

////Sprites////
import Sprite from "../../sprites/getSprite";
import sprites from "../../sprites/sprites.json";

////Material UI////
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
// import mapPic from "../../images/map-color.png";
import mapPic1 from "../../images/map-color-ratio.png";
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
const currentMapBoss = [sprites.boss.one, sprites.boss.one, sprites.boss.one];

const MapPage = (props) => {
    const classes = useStyles();
    return (
        <>
            <img id="mapPic" src={mapPic1} alt="map image" />
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
                <Grid container
                    id="shift"
                    justify="flex-start"
                    alignItems="center" 
                    className={classes.root}>
                    <Grid item xs={6}>
                        <Sprite character={currentMapBoss[0]} />
                    </Grid>
                    <Grid item xs={4}>
                        <Link to={"/fight"}>
                        <h3>Unidentified vessel travelling at sub warp speed, bearing 235.7. 
                            Fluctuations in energy readings from it, Captain. All transporters off. 
                            A strange set-up, but I’d say the graviton generator is depolarized. 
                            The dark colourings of the scrapes are the leavings of natural rubber, 
                            a type of non-conductive sole used by researchers experimenting with electricity. 
                            The molecules must have been partly de-phased by the anyon beam.
                            </h3>
                        </Link>    
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default MapPage;