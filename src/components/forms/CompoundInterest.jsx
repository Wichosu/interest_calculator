import React, { useState } from 'react';
import CompoundGraph from '../graph/CompoundGraph';
import Amount from '../pure/Amount';
import { DataSchema } from '../../models/DataSchema.class';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import '../../dist/output.css';

// ? Ideas: Mobile view, Switch lang es or en, multiple calculators

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
const CompoundInterest = () => {

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
    <div className='md:flex'>
      <div>
        <Formik 
          initialValues={{principal: '', interest: '', time: ''}}
          validationSchema={formSchema}
          onSubmit={values => getAmount(values)}
        >
          {({ errors, touched }) => (
            <Form>
              <label className='block'>
                <div className='flex'>
                  <span className='block text-slate-800 mb-2'>Principal</span>
                  <p className='ml-3 mt-1 rounded h-4 w-4 bg-blue-400' />
                </div>
                <Field 
                  name='principal' 
                  className='block border border-slate-300 rounded w-40 pl-4 placeholder:text-slate-400' 
                  placeholder='100'
                  type='number' 
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
                <div className='flex'>
                  <span className='block text-slate-800 mb-2'>Interest</span>
                  <p className='ml-3 mt-1 rounded h-4 w-4 bg-yellow-400' />
                </div>
                <Field 
                  name='interest' 
                  className='block border border-slate-300 rounded w-40  pl-4 placeholder:text-slate-400'
                  placeholder='10%'
                  type='number'
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
                  type='number'
                />
                { errors.time && touched.time ?
                (
                <div className='text-red-600'>{ errors.time }</div>
                )
                :
                null
                }
              </label>
              <button className='mt-10 px-4 py-1 rounded bg-lime-400 text-slate-800 ' type='submit'>Calculate</button>
            </Form>
          )}
        </Formik>
        <Amount result={result}/>
      </div>
      <CompoundGraph data={data} />
    </div>
  );
}

export default CompoundInterest;
