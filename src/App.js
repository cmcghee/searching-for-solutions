import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'; 
import HomePage from './HomePage/homePage';
import ProductPage from './ProductPage/productPage.jsx'

function App() {
  return (
    <Router>
        <Switch>
          <Route path="/" component={HomePage} />
          <Route path="/product/" component={ProductPage} />
        </Switch>
    </Router>
  );
}

export default App;
