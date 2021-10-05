import React from 'react';
import './App.css'
import {
  BrowserRouter as Router, Switch, Route, 
} from "react-router-dom";
import Cart from './components/Cart/Cart';
import Home from './components/Pages/Home';



function App() {
  return (
    <>
    <Router>
      <Switch>
    <Route exact path="/" component={Home} />
    <Route  path="/cart" component={Cart} />
        </Switch>
    </Router>
    </>
  );
}

export default App;
