import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Shop from './Components/Shop/Shop';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Review from './Components/Review/Review';
import Inventory from './Components/Invetory/Inventory';
import NotFound from './Components/NotFound/NotFound';
import ProductDetails from './Components/ProductDetails/ProductDetails';

function App() {
  return (
    <div>
      <Header></Header>
       <Router>
          <Switch>
            <Route path='/shop'>
              <Shop></Shop>
            </Route>
            <Route path='/review'>
               <Review></Review>
            </Route>
            <Route  path="/inventory">
              <Inventory></Inventory>
            </Route>
            <Route exact path='/'>
               <Shop></Shop>
            </Route>
            <Route path="/product/:productkey">
                <ProductDetails></ProductDetails>
            </Route>
            <Route  path="*">
               <NotFound></NotFound>
            </Route>
          </Switch>
       </Router>
    </div>
  );
}

export default App;
