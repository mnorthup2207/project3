import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";

////Material UI////
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

import "./styles.css";


class Register extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            password: "",
            password2: "",
            errors: {}
        };
    }

    componentDidMount() {
        // If logged in and user navigates to Register page, should redirect them to dashboard
        if (this.props.auth.isAuthenticated) {
            this.props.history.push("/home");
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();

        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        };

        this.props.registerUser(newUser, this.props.history);
    };

    render() {
        const { errors } = this.state;

        return (
            <Container maxWidth="sm">
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
                <Grid container s={8} justify="center" alignItems="center">
                    <form noValidate onSubmit={this.onSubmit}>
                        <div>

                            <div className="form-element">
                                <TextField
                                    onChange={this.onChange}
                                    value={this.state.name}
                                    error={errors.name}
                                    id="name"
                                    type="text"
                                    className={classnames("", {
                                        invalid: errors.name
                                    })}
                                    label="Name"
                                    variant="outlined"
                                />
                                {/* <label htmlFor="name">Name</label> */}
                                {/* <span className="red-text">{errors.name}</span> */}
                            </div>
                            <div className="form-element">
                                <TextField
                                    onChange={this.onChange}
                                    value={this.state.email}
                                    error={errors.email}
                                    id="email"
                                    type="email"
                                    className={classnames("", {
                                        invalid: errors.email
                                    })}
                                    label="Email"
                                    variant="outlined"
                                />
                                {/* <span className="red-text">{errors.email}</span> */}
                            </div>
                            <div className="form-element">
                                <TextField
                                    onChange={this.onChange}
                                    value={this.state.password}
                                    error={errors.password}
                                    id="password"
                                    type="password"
                                    className={classnames("", {
                                        invalid: errors.password
                                    })}
                                    label="Password"
                                    variant="outlined"
                                />
                                {/* <span className="red-text">{errors.password}</span> */}
                            </div>
                            <div className="form-element">
                                <TextField
                                    onChange={this.onChange}
                                    value={this.state.password2}
                                    error={errors.password2}
                                    id="password2"
                                    type="password"
                                    className={classnames("", {
                                        invalid: errors.password2
                                    })}
                                    label="Confirm Password"
                                    variant="outlined"
                                />
                                {/* <span className="red-text">{errors.password2}</span> */}
                            </div>
                        </div>
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            size="large"
                        >
                            Sign Up
                        </Button>
                    </form>
                </Grid>
            </Container>
        );
    }
}

Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { registerUser }
)(withRouter(Register));
