import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import Button from '../components/pure/Button.jsx';
import Title from '../components/pure/Title.jsx';
import CustomError from '../components/pure/CustomError.jsx';
import Navbar from '../components/pure/Navbar.jsx';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations.js';

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

  const { t } = useTranslation();

  const [capacity, setCapacity] = useState(0);

  function getCapacity(values) {
    const income = Number(values.income);
    const expenses = Number(values.expenses);
    const percent = Number(values.percentage) / 100;
    const capacity = (income - expenses) * percent;
    setCapacity(capacity.toFixed(2));
  }

  return (
    <>
      <Navbar />
      <Title title={t('debt-capacity')} />
      <Formik
        initialValues={{income: '', expenses: '', percentage: ''}}
        validationSchema={formSchema}
        onSubmit={(values) => getCapacity(values)}
      >
        {({errors, touched}) => (
          <Form>
            <CustomField name={'income'} placeholder={'12000'} />
            { errors.income && touched.income ? 
            (
              <CustomError error={errors.income} />
            )
            :
            null
            }
            <CustomField name={'expenses'} placeholder={'8000'} />
            { errors.expenses && touched.expenses ?
            (
              <CustomError error={errors.income} />
            )
            :
            null
            }
            <CustomField name={'percentage'} placeholder={'40'} />
            { errors.percentage && touched.percentage ?
            (
              <CustomError error={errors.percentage} />
            )
            :
            null
            }
            <Button text={'calculate'}/>
          </Form>
        )}
      </Formik>
      <Capacity capacity={capacity} />
    </>
  );
}

function Capacity({ capacity }) {

  const { t } = useTranslation();

  return (
    <div className='md:ml-20 ml-5 mt-8'>
      <p className='text-slate-900'>{ t('debt-capacity') }</p>
      <p className='text-slate-900 text-2xl underline'>{ capacity }</p>
    </div>
  )
}

function CustomField({ name, placeholder }) {

  const { t } = useTranslation();

  return (
    <label className='block md:ml-20 md:mt-6 ml-5 mt-4'>
      <span className='block mb-1 text-slate-900 capitalize'>{ t(name) }</span>
      <Field
        name={name}
        className='border-b-2 border-slate-200 outline-none'
        placeholder={placeholder}
        type='number'
      />
    </label>
  )
}

export default DebtCapacity;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'footer'])),
    },
  };
}