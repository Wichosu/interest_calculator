import React, { useState, useRef, useContext, createContext } from 'react';
import CompoundGraph from '../graph/CompoundGraph';
import { DataSchema } from '../../models/DataSchema.class';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const formContext = createContext(null);

// !Validate Form
// ? Ideas: Mobile view, Switch lang es or en, multiple calculators

/**
 * Styles for labels and icons
 * @returns {fontSize} 1.2rem
 */
const labelStyle = {
  fontSize: '1.2rem'
}

/**
 * Color for Graph and icons
 * @returns {principal} #3CB9C3 Blue 
 * @returns {interest} #FFDE00 Yellow 
 * @returns {amount} #53C43B Green 
 * @returns {cursor} #FAFAFA Gray 
 */
const fillColors = {
  principal: "#3CB9C3",
  interest: "#FFDE00",
  amount: "#53C43B",
  cursor: "#FAFAFA",
}

/**
 * Form schema
 */
const formSchema = Yup.object().shape({
  principal: Yup.number()
    .typeError('Must be a number!')
    .positive('Only positive number!')
    .required('Required!'),
  interest: Yup.number()
    .typeError('Must be a number!')
    .positive('Only positive number!')
    .required('Required!'),
  time: Yup.number()
    .typeError('Must be a number!')
    .positive('Only positive number!')
    .required('Required!'),
})

/**
 * @returns {FormComponent} Component with compound interest calculator.
 */
const FormComponent = () => {

  const [result, setResult] = useState(0);
  const [data, setData] = useState([{}]);
  const valuePrincipal = useRef();
  const valueInterest = useRef();
  const valueTime = useRef();

  /**
   *Calculates the final amount 
   * @param {*} form Tag from html
   * @returns {result} Number. amount after interest
   * @returns {data} Array. Contains objects with data for barchart
   */
  const getAmount = (form) => {
    const principal = Number(form.principal);
    const interest = Number(form.interest / 100);
    const Time = Number(form.time);
    const formula = principal * Math.pow((1 + interest), Time);
    setResult(formula.toFixed(2));
    // TODO Optimize this block
    let tempArray = [];
    let prin = Number(principal);
    let amount = Number(principal);
    let interestProfit = 0;
    for(let time = 1; time <= Time; time++) {
      interestProfit = amount * interest;
      prin = amount;
      amount = amount * (1 + interest);
      tempArray.push(
        new DataSchema(
          `Year ${time}`,
          prin.toFixed(2),
          amount.toFixed(2),
          interestProfit.toFixed(2),
        )
      );
    }
    setData(tempArray);
  }

  return (
    <formContext.Provider value={{result}}>
      <div style={{display: 'flex'}}>
        <Formik 
          initialValues={{principal: '', interest: '', time: ''}}
          validationSchema={formSchema}
          onSubmit={values => {
            console.log(values)
            getAmount(values)
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <Field name='principal' />
              { errors.principal && touched.principal ? 
              (
                <div>{ errors.principal }</div>
              )
              :
              null
              }
              <Field name='interest' />
              { errors.interest && touched.interest ?
              (
                <div>{ errors.interest }</div>
              )
              :
              null
              } 
              <Field name='time' />
              { errors.time && touched.time ?
              (
                <div>{ errors.time }</div>
              )
              :
              null
              }
              <button className='btn btn-success my-4' type='submit'>Calculate</button>
            </Form>
          )}
        </Formik>
        <Amount />
        <CompoundGraph data={data} />
      </div>
    </formContext.Provider>
  );
}

/**
 * 
 * @returns {Amount} Displays total amount after interest
 */
const Amount = () => {
  const {
    result
  } = useContext(formContext);

  return (
    <div>
      <p className='my-3'>
        <strong>
          Amount
        </strong>
        <i 
          className='mx-3 bi bi-square-fill' 
          style={{color: fillColors.amount}}
        />
        <i
          className='bi bi-cash-coin'
          style={{color: fillColors.amount, fontSize: labelStyle.fontSize}}
        />
      </p>
      <p className='lead'>
        { result }
      </p>
    </div>
  )
}

export default FormComponent;
