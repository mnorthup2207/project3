import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { logoutUser } from "../../actions/authActions";
import landingImage from "../../images/bg-auth.png"
import API from "../../utils/API";
import roshambo from "../../images/roshambo.5x.png";
import e1 from "../../images/enemy1-head.png";
import e2 from "../../images/enemy2-head.png";
import e3 from "../../images/enemy3-head.png";
import b1 from "../../images/boss1-head.png";
import b2 from "../../images/boss2-head.png";
import b3 from "../../images/boss3-head.png";

// REDUX
import { useSelector, useDispatch, connect } from "react-redux";
import {
    setPlayer,
    setAllMonsters,
    setMonster,
    setHealthArmor
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
import zIndex from "@material-ui/core/styles/zIndex";
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

const titleStyle = {
    height: 60,
    marginTop: 10
}

const deadStyle = {
    height: 160,
    marginTop: -290,
    marginLeft: 50,
    marginRight: -60,
    zIndex: 1
}

const Landing = (props) => {

    
    const { battleNumber } = useSelector(state => state.player);
    const dispatch = useDispatch();
    
    const enemies = [e1, e2, e3, b1, b2, b3];
    const defeatedEnemies = enemies.filter(enemy => enemies.indexOf(enemy) < battleNumber);
    
    // console.log("defeatedEnemies", defeatedEnemies);

    function loadMonsters() {
        API.getMonsters()
            .then(res => {
                // Update the global state here
                dispatch(setAllMonsters(res.data)) 
                let monster = res.data.filter(monster => monster.order === battleNumber)[0];
                // database is wrong
                // console.log(res.data)
                // We set the initial monster
                dispatch(setMonster(monster))
            })
            // .catch(err => console.log(err));
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
                let player = res.data[0];

                // Update the global state here
                dispatch(setPlayer(player));

                // setTimeout(() => {
                //     dispatch(setHealthArmor(10, 18, true));
                // }, 1000)

            }
            )
            // .catch(err => console.log(err));
    };
    useEffect(() => {
        // find some better way to update?
        if ( battleNumber > 0 ) {
            return
        }
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
                        <img src={roshambo} alt="roshambo" style={titleStyle} />
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
                <Grid id="landingDiv" container direction="row" spacing={2} className={classes.root}>
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
                <Grid
                    container
                    item
                    direction="row"
                    alignItems="flex-start"
                    justify="flex-start"
                    style={{marginLeft: 100}}
                >
                    {defeatedEnemies.map(defeated => {
                        return (
                            <img src={defeated} alt="enemy" key={defeated} style={deadStyle}/>
                        )
                    })}
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