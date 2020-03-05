import React, { useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import Title from "../../components/title/title1x";

////Material UI////
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

import "./styles.css";


const Register = (props) => {
    // Use state
    const [registerState, setRegisterState] = useState({
        name: "",
        email: "",
        password: "",
        password2: "",
        errors: {}
    })
    // If authenticated send to home
    useEffect(() => {
        if (props.auth.isAuthenticated) {
            props.history.push("/home");
        }
    })
    // onChange on the form to set the state registerState when anything changes
    const onChange = e => {
        setRegisterState({ ...registerState, [e.target.id]: e.target.value });
    };
    // onSubmit that takes in all the values from the form
    const onSubmit = e => {
        e.preventDefault();

        const newUser = {
            name: registerState.name,
            email: registerState.email,
            password: registerState.password,
            password2: registerState.password2
        };
        // We run the registerUser action with our newUser and props.history
        // This goes to our actions folder and performs a post with all our information
        props.registerUser(newUser, props.history);
    };


    return (
        <div className="auth-page">
            <Container maxWidth="sm">
                <Title />
                <div className="auth-controls">
                    <Grid container justify="center" alignItems="center">
                        <div>
                            <h4>
                                <b>Register</b> below
                            </h4>
                            <p className="grey-text text-darken-1">
                                Already have an account?
                                <Link to="/">
                                    <Button color="secondary">
                                        Log In
                                    </Button>
                                </Link>
                            </p>
                        </div>
                    </Grid>
                    <Grid container s={12} justify="center" alignItems="center">
                        <form noValidate onSubmit={onSubmit}>
                            <div className="form-element">
                                <TextField
                                    fullWidth
                                    onChange={onChange}
                                    value={registerState.name}
                                    // error={errors.name}
                                    id="name"
                                    type="text"
                                    label="Name"
                                />
                            </div>
                            <div className="form-element">
                                <TextField
                                    fullWidth
                                    onChange={onChange}
                                    value={registerState.email}
                                    // error={errors.email}
                                    id="email"
                                    type="email"
                                    label="Email"
                                />
                            </div>
                            <div className="form-element">
                                <TextField
                                    fullWidth
                                    onChange={onChange}
                                    value={registerState.password}
                                    // error={errors.password}
                                    id="password"
                                    type="password"
                                    label="Password"
                                />
                            </div>
                            <div className="form-element">
                                <TextField
                                    fullWidth
                                    onChange={onChange}
                                    value={registerState.password2}
                                    // error={errors.password2}
                                    id="password2"
                                    type="password"
                                    label="Confirm Password"
                                />
                            </div>
                            <Grid container alignItems="center" justify="center">
                                <Button
                                    style={{ marginTop: 25 }}
                                    variant="contained"
                                    color="primary"
                                    type="submit"
                                    size="large"
                                >
                                    Sign Up
                                </Button>
                            </Grid>
                        </form>
                    </Grid>
                </div>
            </Container>
        </div>
    );

}

Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = registerState => ({
    auth: registerState.auth,
    errors: registerState.errors
});

export default connect(
    mapStateToProps,
    { registerUser }
)(withRouter(Register));
