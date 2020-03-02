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
// import logo from './logo.svg';
// import './App.css';

<<<<<<< HEAD
function App() {
  return (
    <div>
      <Sprite 
        props={sprites.main}
      />
    </div>
  );
=======
import "./App.css";

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
                        <Route exact path="/" component={Login} />
                        <Route exact path="/register" component={Register} />
                        <Switch>
                            <PrivateRoute exact path="/home" component={Landing} />
                        </Switch>
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
>>>>>>> 74ed319b328e5aefe2331d5afab3a1aead31477f
}

export default App;
