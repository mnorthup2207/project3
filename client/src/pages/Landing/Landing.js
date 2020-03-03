import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
////Material UI////
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
///pages/components///
import AnimationCard from "../../components/Animation_Card"
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
                    <Grid item xs>
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
                    <Grid item xs>
                    <Link to="/map"><h2>Map</h2></Link>
                    </Grid>
                </Grid>
                <Grid id="shift" container spacing={3} className={classes.root}>
                    <Grid item xs>
                        <Link to="/fight"><h2>Fight</h2></Link>
                        <Link to="/creators"><h2>Meet the Creators</h2></Link>
                    </Grid>
                    <Grid item xs>
                        <AnimationCard />
                    </Grid>
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