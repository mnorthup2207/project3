import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";

import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";

import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Landing from "./pages/Landing/Landing";
import Test from "./pages/Test"
////Pages/Components////
import AboutCreators from "./pages/About_the_creators"
import DungeonFight from "./pages/Dungeon_Fight"
import GameOver from "./pages/Game_Over"
import LeaderBoard from "./pages/Leader_Board"
import Loot from "./pages/Loot"
import MapPage from "./pages/Map"

////Material UI////
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { amber, deepOrange } from '@material-ui/core/colors';

// import logo from './logo.svg';
import "./App.css";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: amber[500]
        },
        secondary: {
            main: deepOrange[700],
        },
    },
});

// Check for token to keep user logged in
if (localStorage.jwtToken) {
    // Set auth token header auth
    const token = localStorage.jwtToken;
    setAuthToken(token);
    // Decode token and get user info and exp
    const decoded = jwt_decode(token);
    // Set user and isAuthenticated
    store.dispatch(setCurrentUser(decoded));
    // Check for expired token
    const currentTime = Date.now() / 1000; // to get in milliseconds
    if (decoded.exp < currentTime) {
        // Logout user
        store.dispatch(logoutUser());

        // Redirect to login
        window.location.href = "./";
    }
}

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div className="App">
                        <ThemeProvider theme={theme}>
                            <Route exact path="/" component={Login} />
                            <Route exact path="/register" component={Register} />
                            <Route exact path="/test" component={Test} />
                            <Switch>
                                <PrivateRoute exact path="/home" component={Landing} />
                                <PrivateRoute exact path="/creators" component={AboutCreators} />
                                <PrivateRoute exact path="/gameover" component={GameOver} />
                                <PrivateRoute exact path="/fight" component={DungeonFight} />
                                <PrivateRoute exact path="/leaderboard" component={LeaderBoard} />
                                <PrivateRoute exact path="/loot" component={Loot} />
                                <PrivateRoute exact path="/map" component={MapPage} />
                            </Switch>
                        </ThemeProvider>
                    </div>
                </Router>
            </Provider>
            // <div>
            //     <Sprite
            //         props={sprites.main}
            //     />
            // </div>
        );
    }
}
export default App;
