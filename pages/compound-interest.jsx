import React, { useState } from 'react';
import CompoundGraph from '../components/graph/CompoundGraph';
import Button from '../components/pure/Button';
import CustomError from '../components/pure/CustomError';
import Navbar from '../components/pure/Navbar';
import { useTranslation } from 'react-i18next';
import { DataSchema } from '../models/DataSchema.class';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

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
    <>
      <Navbar />
      <div className='md:flex'>
        <div>
          <Formik 
            initialValues={{principal: '', interest: '', time: ''}}
            validationSchema={formSchema}
            onSubmit={values => getAmount(values)}
          >
            {({ errors, touched }) => (
              <Form>
                <CustomField name='principal' placeholder='100' color='blue' />
                { errors.principal && touched.principal ? 
                (
                <CustomError error={errors.principal} />
                )
                :
                null
                }
                <CustomField name='interest' placeholder='10' color='yellow' />
                { errors.interest && touched.interest ?
                (
                  <CustomError error={errors.interest} />
                )
                :
                null
                } 
                <CustomField name='time' placeholder='8' />
                { errors.time && touched.time ?
                (
                  <CustomError error={errors.time} />
                )
                :
                null
                }
                <Button text={'calculate'} />
              </Form>
            )}
          </Formik>
          <Amount result={result}/>
        </div>
        <CompoundGraph data={data} />
      </div>
    </>
  );
}

function CustomField({ name, placeholder, color }) {

  const { t } = useTranslation();

  return (
    <label className='block ml-6 md:ml-20 mt-4'>
      <div className='flex'>
        <span className='block text-slate-800 mb-2 capitalize'>{ t(name) }</span>
        <p className={`ml-3 mt-1 rounded h-4 w-4 ${color ? `bg-${color}-400` : null}`} />
      </div>
      <Field 
        name={name} 
        className='border-b-2 border-slate-200 outline-none' 
        placeholder={placeholder}
        type='number' 
      />
    </label>
  )
}

function Amount ({ result }) {

  const { t } = useTranslation();

  return (
    <div className='md:ml-20 ml-6 mt-10'>
      <p className='flex'>
        <strong className='text-slate-800 capitalize'>{ t('amount') }</strong>
        <p className='ml-3 mt-1 rounded h-4 w-4 bg-emerald-400' />
      </p>
      <p className='text-slate-900 text-2xl underline'>
        { result }
      </p>
    </div>
  )
}

export default CompoundInterest;
