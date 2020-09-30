import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'; 
import HomePage from './HomePage/homePage';
import Apply from './Apply/apply.jsx'

function App() {
  return (
    <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/donate" exact component={HomePage} />
          <Route path="/apply" exact component={Apply} />
          <Route path="/luke-project" exact component={HomePage} />
        </Switch>
    </Router>
  );
}

export default App;
