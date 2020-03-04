import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import Title from "../../components/title/title1x";

////Sprites////
import Sprite from "../../sprites/getSprite";

////Formik////
import { Formik } from 'formik';

////Material UI////
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

import "./styles.css";

import amber from '@material-ui/core/colors/amber';
// import amber from '@material-ui/core/colors/purple';


const Login = (props) => {

    const [userState, setUserState] = useState({
        email: "",
        password: ""
    })


    useEffect(() => {
        if (props.auth.isAuthenticated) {
            props.history.push("/home");
        }
    })

    const onChange = e => {
        setUserState({...userState, [e.target.id]: e.target.value });
    };

    const onSubmit = e => {
        e.preventDefault();

        const userData = {
            email: userState.email,
            password: userState.password
        };

        props.loginUser(userData);
    };


    return (
        <div className="auth-page">
            <Container maxWidth="sm">
                <Title />
                <div className="auth-controls">
                    <Grid container justify="center" alignItems="center">
                        <div>
                            <h4>
                                <b>Login</b> below
                            </h4>
                            <p className="grey-text text-darken-1">
                                Don't have an account? 
                                <Link to="/register">
                                    <Button color="secondary">
                                        Register
                                    </Button>
                                </Link>
                            </p>
                        </div>
                    </Grid>
                    <Grid container s={12} justify="center" alignItems="center">
                        <Formik
                            initialValues={{userState}}
                            validate={values => {
                                const errors = {};
                                if (!values.userState.email) {
                                    errors.email = 'Required';
                                } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.userState.email)) {
                                    errors.email = 'Invalid email address';
                                }
                                return errors;
                            }}
                        >
                            <form noValidate onSubmit={onSubmit}>
                                <div>
                                    <div className="form-element">
                                        {/* ADD ERROR HANDLING */}
                                        <TextField 
                                            onChange={onChange}
                                            value={userState.email}
                                            id="email"
                                            type="email"
                                            helperText={(props.errors.email) && props.errors.email}
                                            error={(props.errors.email) && props.errors.email}
                                            label="Email"
                                        />
                                        {/* <span className="red-text">
                                            {errors.email}
                                            {errors.emailnotfound}
                                            </span> */}
                                    </div>
                                    <div className="form-element">
                                        <TextField
                                            onChange={onChange}
                                            value={userState.password}
                                            // error={errors.password}
                                            id="password"
                                            type="password"
                                            // className={classnames("", {
                                            //     invalid: errors.password || errors.passwordincorrect
                                            // })}
                                            label="Password"
                                        />
                                        {/* <span className="red-text">
                                            {errors.password}
                                            {errors.passwordincorrect}
                                        </span> */}
                                    </div>
                                </div>
                                <Grid container alignItems="center" justify="center">
                                    <Button
                                        style={{marginTop: 25}}
                                        variant="contained"
                                        color="primary"
                                        type="submit"
                                        size="large"
                                    >
                                        Login
                                    </Button>
                                </Grid>
                            </form>
                        </Formik>
                        {/* <Sprite
                            character="display"
                            type="main"
                        /> */}
                    </Grid>
                </div>
            </Container>
        </div>
    );
}

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = userState => ({
    auth: userState.auth,
    errors: userState.errors
});

export default connect(
    mapStateToProps,
    { loginUser }
)(Login);
