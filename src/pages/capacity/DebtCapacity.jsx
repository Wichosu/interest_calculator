import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import '../../dist/output.css';

const formSchema = Yup.object().shape({
  income: Yup.number()
    .positive('Must be positive!')
    .required('Required!'),
  expenses: Yup.number()
    .positive('Must be positive!')
    .required('Required!'),
  percentage: Yup.number()
    .positive('Must be positive')
    .min(30, 'Must be between 30 and 40 percent!')
    .max(40, 'Must be between 30 and 40 percent!')
    .required('Required!')
})

const DebtCapacity = () => {

  const [capacity, setCapacity] = useState(0);

  function getCapacity(values) {
    const income = Number(values.income);
    const expenses = Number(values.expenses);
    const percent = Number(values.percentage) / 100;
    const capacity = (income - expenses) * percent;
    setCapacity(capacity);
  }

  return (
    <>
      <Formik
        initialValues={{income: '', expenses: '', percentage: ''}}
        validationSchema={formSchema}
        onSubmit={(values) => getCapacity(values)}
      >
        {({errors, touched}) => (
          <Form>
            <label>
              <span>Income</span>
              <Field 
                name='income'
                placeholder='12000'
                type='number'
              />
              { errors.income && touched.income ? 
              (
                <div>{ errors.income }</div>
              )
              :
              null
              }
            </label>
            <label>
              <span>Expenses</span>
              <Field
                name='expenses'
                placeholder='8800'
                type='number'
              />
              { errors.expenses && touched.expenses ?
              (
                <div>{ errors.expenses }</div>
              )
              :
              null
              }
            </label>
            <label>
              <span>Percentage</span>
              <Field
                name='percentage'
                placeholder='40'
                type='number'
              />
              { errors.percentage && touched.percentage ? 
              (
                <div>{ errors.percentage }</div>
              )
              :
              null
              }
            </label>
            <button>Calculate</button>
          </Form>
        )}
      </Formik>
      <Capacity capacity={capacity} />
    </>
  );
}

function Capacity({ capacity }) {
  return (
    <div>
      <p>Your Debt Capacity</p>
      <p>{ capacity }</p>
    </div>
  )
}

export default DebtCapacity;
