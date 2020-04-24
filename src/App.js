import React, { useState } from "react";
import { Switch, Route } from 'react-router-dom'
import axios from 'axios'
import * as yup from 'yup'

//Components
import Home from './Home'
import OrderForm from './OrderForm'

import './App.css'

//Initial formValues
const initFormValues = {
  name: '',
  size: '',
  sauce: 'original',
  toppings: [
    'pepperoni',
    'sausage',
    'cBacon',
    'onions',
    'olives',
    'pineapple'
  ],
  special: ''
}

const App = () => {

  //States
  const [formValues, setFormValues] = useState(initFormValues)


//Callbacks

const onInputChange = e =>{
  const name = e.target.name
  const value = e.target.value

  setFormValues({
    ...formValues, [name]: value
  })

}

const onSubmit = e =>{
  e.preventDefault()


  setFormValues(initFormValues)

}


  return (
    <div className="container">
      <h1>Lambda Eats</h1>
      
      <Switch>
        <Route path={"/pizza"}>
          <OrderForm 
            values={formValues}
            onInputChange={onInputChange}
            onSubmit={onSubmit} 
          />
        </Route>

        <Route path={"/"}>
          <Home />
        </Route>
      </Switch> 
      
    </div>
  );
};
export default App;
