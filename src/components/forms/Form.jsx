import React, { useState, useContext, createContext } from 'react';
import CompoundGraph from '../graph/CompoundGraph';
import { DataSchema } from '../../models/DataSchema.class';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import '../../dist/output.css';

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
    
    // Get Data for graph

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
      <div className='flex'>
        <div>
          <Formik 
            initialValues={{principal: '', interest: '', time: ''}}
            validationSchema={formSchema}
            onSubmit={values => getAmount(values)}
          >
            {({ errors, touched }) => (
              <Form>
                <label className='block'>
                  <span className='block text-slate-800 mb-2'>Principal</span>
                  <Field 
                     name='principal' 
                     className='block border border-slate-300 rounded w-40 pl-4 placeholder:text-slate-400' 
                     placeholder='100'
                     type='text' 
                  />
                  { errors.principal && touched.principal ? 
                  (
                  <div className='text-red-600'>{ errors.principal }</div>
                  )
                  :
                  null
                  }
                </label>
                <label className='block mt-5'>
                  <span className='block text-slate-800 mb-2'>Interest</span>
                  <Field 
                    name='interest' 
                    className='block border border-slate-300 rounded w-40  pl-4 placeholder:text-slate-400'
                    placeholder='10%'
                  />
                  { errors.interest && touched.interest ?
                  (
                  <div className='text-red-600'>{ errors.interest }</div>
                  )
                  :
                  null
                  } 
                </label>
                <label className='block mt-5'>
                  <span className='block text-slate-800 mb-2'>Time</span>
                  <Field 
                    name='time' 
                    className='block border border-slate-300 rounded w-40  pl-4 placeholder:text-slate-400'
                    placeholder='10'
                  />
                  { errors.time && touched.time ?
                  (
                  <div className='text-red-600'>{ errors.time }</div>
                  )
                  :
                  null
                  }
                </label>
                <button className='mt-10 px-4 py-1 border border-lime-600 rounded bg-lime-400 text-slate-800 ' type='submit'>Calculate</button>
              </Form>
            )}
          </Formik>
          <Amount />
        </div>
        <CompoundGraph data={data} />
      </div>
    </formContext.Provider>
  );
}
/* !!! Make amount a separete component to be reused in multiple calculators*/
/**
 * 
 * @returns {Amount} Displays total amount after interest
 */
const Amount = () => {
  const {
    result
  } = useContext(formContext);

  return (
    <div className='mt-10'>
      <p>
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
      <p className='text-slate-900'>
        { result }
      </p>
    </div>
  )
}

export default FormComponent;
