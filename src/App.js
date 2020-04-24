import React, { useState, useEffect } from "react";
import { Switch, Route, Link } from 'react-router-dom'
import axios from 'axios'
import * as yup from 'yup'

//Components
import Home from './Home'
import OrderForm from './OrderForm'

import './App.css'

//BaseURL for axios
const baseURL = 'https://reqres.in/api/users_'

//Initial formValues
const initFormValues = {
  name: '',
  size: '',
  sauce: 'original',
  toppings: {
    pepperoni: false,
    sausage: false,
    cBacon: false,
    onions: false,
    olives: false,
    pineapple: false,
  },
  special: '',
}

//Initial formErrors
const initFormErrors = {
  name: '',
  size: '',
  sauce: '',
}

/************************ Validation Format ************************/
const formSchema = yup.object().shape({
  name:
    yup
      .string()
      .min(2, 'Your name must contain at least 2 letters')
      .required('You must enter your name'),
  size:
    yup
      .string()
      .required('You must choose a size'),
  sauce:
    yup
      .string()
      .required('You must choose a type of sauce'),
  special:
    yup
      .string()
})

const App = () => {

  /************************ App States ************************/
  const [orderList, setOrderList] = useState([])

  const [formValues, setFormValues] = useState(initFormValues)

  const [formErrors, setFormErrors] = useState(initFormErrors)

  const [submitDisabled, setSubmitDisabled] = useState(true)


  /************************ Callbacks ************************/

  //Input change handler
  const onInputChange = e => {
    const name = e.target.name
    const value = e.target.value

    //Check form validation on input change
    yup
      .reach(formSchema, name)
      .validate(value)
      .then(valid => {
        //Clear the errors if the value is passes the test
        setFormErrors({
          ...formErrors, [name]: '',
        })
      })
      .catch(err => {
        //Set our error message into the formErrors if it doesn't pass the test
        setFormErrors({
          ...formErrors, [name]: err.errors[0],
        })
      })

    //Set form inputs into state
    setFormValues({
      ...formValues, [name]: value
    })

  }

  //Checkbox change handler
  const onCheckboxChange = e => {
    const name = e.target.name
    const isChecked = e.target.checked

    //Change state when the checkboxes are changed
    setFormValues({
      ...formValues,
      toppings: {
        ...formValues.toppings, [name]: isChecked
      },
    })

  }

  //Enable the Submit button if the Form is filled in correctly
  useEffect(() => {
    formSchema
      .isValid(formValues)
      .then(valid => {
        setSubmitDisabled(!valid)
      })

  }, [formValues])

  //Send data from order form to server
  const postOrder = (data) => {
    axios
      .post(baseURL, data)
      .then(res => {
        //Add the newOrder to the orderList
        const newOrder = res.data
        setOrderList([
          ...orderList, newOrder
        ])
      })
      .catch(err => {
        console.log('ERROR: ', err)
      })
  }

  //Submit the order form
  const onSubmit = e => {
    e.preventDefault()

    //Structure the data into the format we need
    const newOrder = {
      name: formValues.name,
      size: formValues.size,
      sauce: formValues.sauce,
      toppings:
        Object
          .keys(formValues.toppings)
          .filter(t => formValues.toppings[t] === true),
      special: formValues.special
    }

    //Submit the order
    postOrder(newOrder)

    //Reset the form
    setFormValues(initFormValues)
  }


  return (
    <div className="container">
      <h1>Lambda Eats</h1>
      <Route path={'/pizza'}>
        <Link to={'/'}><button>Home</button></Link>
      </Route>

      <Switch>
        <Route path={"/pizza"}>
          <OrderForm
            values={formValues}
            onInputChange={onInputChange}
            onCheckboxChange={onCheckboxChange}
            onSubmit={onSubmit}
            disabled={submitDisabled}
            errors={formErrors}
            orders={orderList}
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
