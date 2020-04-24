import React from "react";
import { Switch, Route, Link } from 'react-router-dom'
import * as yup from 'yup'

//Components
import Home from './Home'
import OrderForm from './OrderForm'

import './App.css'

const App = () => {
  return (
    <div className="container">
      <h1>Lambda Eats</h1>
      
      <Switch>
        <Route path={"/pizza"}>
          <OrderForm />
        </Route>

        <Route path={"/"}>
          <Home />
        </Route>
      </Switch> 
      

      
    </div>
  );
};
export default App;
