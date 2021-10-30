import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from '../container/LandingPage';
import HomePage from '../container/HomePage';


function App () {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/home" exact component={HomePage} />
        </Switch>
      </Router>
    );
  };

export default App;
