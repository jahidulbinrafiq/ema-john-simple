import React, { createContext } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Shop from './Components/Shop/Shop';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Review from './Components/Review/Review';
import Inventory from './Components/Invetory/Inventory';
import NotFound from './Components/NotFound/NotFound';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import Login from './Components/Login/Login';
import Shipment from './Components/Shipment/Shipment';
import { useState } from 'react';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
export const UserContext=createContext();

function App() {
  const [loggedInUser,setLoggedInUser]=useState({})
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
     
      <h3>email:{loggedInUser.email}</h3>
      <Header></Header>
       <Router>
          <Switch>
            <Route  path='/shop'>
              <Shop></Shop>
            </Route>
            <Route path='/review'>
               <Review></Review>
            </Route>
            <PrivateRoute  path="/inventory">
              <Inventory></Inventory>
            </PrivateRoute>
            <Route  path="/login">
              <Login/>
            </Route>
            <PrivateRoute  path="/shipment">
              <Shipment/>
            </PrivateRoute >
            <Route path="/product/:productkey">
                <ProductDetails></ProductDetails>
            </Route>
            <Route exact path='/'>
               <Shop></Shop>
            </Route>
            <Route  path="*">
               <NotFound></NotFound>
            </Route>
          </Switch>
       </Router>
    </UserContext.Provider>
  );
}

export default App;
