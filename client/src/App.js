import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
function App() {
  return (
    <Router>
        <Nav />
        <Switch>
            <Route exact path={['/', '/home']}>
                
            </Route>
        </Switch>
    </Router>
  );
}

export default App;
