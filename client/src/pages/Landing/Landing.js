import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { logoutUser } from "../../actions/authActions";
import landingImage from "../../images/bg-auth.png"
import API from "../../utils/API";

// REDUX
import { useSelector, useDispatch, connect } from "react-redux";
import {
    setHealthArmor,
    setTotalHealth,
    setTotalArmor,
    setAllMonsters,
    setBattleNumber,
    setMonster
  } from "../../actions/gameActions";
////Sprites////
import Sprite from "../../sprites/getSprite.js";

////Material UI////
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

///pages/components///
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

const Landing = (props) => {
    const { battleNumber } = useSelector(state => state.player);
    const dispatch = useDispatch();

    function loadMonsters() {
        API.getMonsters()
            .then(res => {
                // Update the global state here
                dispatch(setAllMonsters(res.data)) 
                let monster = res.data.filter(monster => monster.order === battleNumber)[0];
                // database is wrong
                console.log(res.data)
                // We set the initial monster
                dispatch(setMonster(monster.health, monster.armor, monster.alive, monster.order, monster.totalHealth, monster.totalArmor))
            })
            .catch(err => console.log(err));
    };
    function loadMonster(id) {
        API.getMonster(id)
            .then(res =>
                console.log("get monster", res.data)
            )
            .catch(err => console.log(err));
    };
    function loadPlayer() {
        API.getPlayer()
            .then(res => {
                let { health, armor, totalHealth, totalArmor } = res.data[0];
                // Update the global state here
                dispatch(setHealthArmor(health, armor, true));
                dispatch(setBattleNumber(0));
                dispatch(setTotalHealth(totalHealth));
                dispatch(setTotalArmor(totalArmor));
            }
            )
            .catch(err => console.log(err));
    };
    useEffect(() => {
        // find some better way to update?
        loadMonsters();
        loadPlayer();
        // loadMonster(fire);
    }, [])

    const onLogoutClick = e => {
        e.preventDefault();
        props.logoutUser();
    };
    const classes = useStyles();
    const { user } = props.auth;
    return (
        <>
            <img id="landingImage" src={landingImage} alt="Ro-Sham-Bo" />
            <Container id="masterContainer" maxWidth="lg">
                <Grid container spacing={3} className={classes.root}>
                    <Grid container direction="row" justify="space-between" alignItems="flex-end">
                        <h4>
                            <b>Welcome Back,</b> {user.name.split(" ")[0]}
                        </h4>
                        <Button
                            variant="contained"
                            onClick={onLogoutClick}
                            variant="outlined"
                            color="secondary"
                        >
                            Logout
                        </Button>
                    </Grid>
                </Grid>
                <Grid container direction="row" spacing={2} className={classes.root}>
                    <Grid
                        container
                        item
                        xs={3}
                        direction="column"
                        justify="flex-start"
                        alignItems="flex-start">
                        <Link to="/map">
                            <Button
                                color="primary"
                                size="large"
                                style={{ margin: 20 }}
                            >
                                <h1>Map</h1>
                                <i className="material-icons" style={{ marginLeft: 10 }}>my_location</i>
                            </Button>
                        </Link>
                        <Link to="/fight">
                            <Button
                                color="primary"
                                size="large"
                                style={{ margin: 20 }}
                            >
                                <h1>Fight</h1>
                                <i className="material-icons" style={{ marginLeft: 10 }}>sports_kabaddi</i>
                            </Button>
                        </Link>
                        <Link to="/creators">
                            <Button
                                color="primary"
                                size="large"
                                style={{ margin: 20 }}
                            >
                                <h1>Creators</h1>
                                <i className="material-icons" style={{ marginLeft: 10 }}>people</i>
                            </Button>
                        </Link>
                    </Grid>
                    <Grid
                        container
                        item
                        xs={9}
                        direction="column"
                        justify="flex-start"
                        alignItems="flex-end">
                        <div id="sprite-div">
                            <Sprite
                                character="display"
                                type="main"
                            />
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

Landing.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { logoutUser }
)(Landing);