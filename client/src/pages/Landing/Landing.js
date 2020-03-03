import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
////Material UI////
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
////Pages////
import AboutCreators from "../About_the_creators"
import DungeonFight from "../Dungeon_Fight"
import GameOver from "../Game_Over"
import LeaderBoard from "../Leader_Board"
import Loot from "../Loot"
import Map from "../Map"
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
        <Router>
            <Container maxWidth="lg">
                <div className={classes.root}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <h4>
                                <b>Welcome Back,</b> {user.name.split(" ")[0]}
                            </h4>
                            <Button
                                variant="contained"
                                onClick={onLogoutClick}
                            >
                                Logout
                    </Button>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </Router>
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