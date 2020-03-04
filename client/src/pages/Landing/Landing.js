import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

////Sprites////
import Sprite from "../../sprites/getSprite.js";
import sprites from "../../sprites/sprites.json";

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
    const onLogoutClick = e => {
        e.preventDefault();
        props.logoutUser();
    };
    const classes = useStyles();
    const { user } = props.auth;
    return (
        <div className="landing">
            <Container id="masterContainer" maxWidth="lg">
                <Grid container spacing={3} className={classes.root}>
                    <Grid container direction="row" justify="space-between" alignItems="center">
                        <h4>
                            <b>Welcome Back,</b> {user.name.split(" ")[0]}
                        </h4>
                        <Button
                            variant="contained"
                            onClick={onLogoutClick}
                            variant="outlined" 
                            color="secondary"
                        >
                           Logout <i className="fas fa-sign-out-alt" style={{marginLeft: 10}}></i>
                        </Button>
                    </Grid>
                </Grid>
                <Grid id="shift" container direction="row" spacing={2} className={classes.root}>
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
                            >
                                <h1>Map</h1>
                                <i className="material-icons" style={{ marginLeft: 10 }}>my_location</i>
                            </Button>
                        </Link>
                        <Link to="/fight">
                            <Button 
                                color="primary"
                                size="large"
                            >
                                <h1>Fight</h1>
                                <i className="material-icons" style={{ marginLeft: 10 }}>sports_kabaddi</i>
                            </Button>
                        </Link>
                        <Link to="/creators">
                            <Button
                                color="primary"
                                size="large"
                            >
                                <h1>Creators</h1>
                                <i className="material-icons" style={{ marginLeft: 10 }}>people</i>
                            </Button>
                        </Link>
                    </Grid>
                    <Grid 
                        container
                        item
                        xs={6}
                        direction="column"
                        justify="flex-start"
                        alignItems="flex-start">
                        <Sprite 
                            character="display"
                            type="main"
                        />
                    </Grid>
                        {/* <Sprite character={sprites.player.main} /> */}
                </Grid>
            </Container>
        </div>
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