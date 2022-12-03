import React, { useState } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Title from '../components/pure/Title';
import CustomField from '../components/pure/CustomField';
import CustomError from '../components/pure/CustomError';
import Result from '../components/pure/Result';
import Button from '../components/pure/Button';

const formSchema = Yup.object().shape({
  cash: Yup.number()
    .positive('Must be positive!')
    .required('Required!'),
  credit: Yup.number()
    .positive('Must be positive!')
    .required('Required!'),
  time: Yup.number()
    .positive('Must be positive!')
    .required('Required!')
})

//Formula: Interest = (Amount / Principal) ^ (1 / Time) - 1

const InterestRate = () => {
  
  const [interest, setInterest] = useState(0);

  const getInterest = (values) => {
    const cash = Number(values.cash);
    const credit = Number(values.credit);
    const time = Number(values.time);
    const interest = (Math.pow((credit / cash), (1 / time)) - 1) * 100;
    setInterest(interest);
  }

  return (
    <>
      <Title title={'interest-rate.title'} />
      <Formik
        initialValues={{cash: '', credit: '', time: ''}}
        validationSchema={formSchema}
        onSubmit={(values) => getInterest(values)}
      >
        {({errors, touched}) => (
          <Form>
            <CustomField name={'cash'} translationFrom={'interest-rate'} placeholder='100' />
            { errors.cash && touched.cash ? 
            (
              <CustomError error={errors.cash} />
            )
            :
            null
            }
            <CustomField name={'credit'} translationFrom={'interest-rate'} placeholder='80' />
            { errors.credit && touched.credit ? 
            (
              <CustomError error={errors.credit} />
            )
            :
            null
            }
            <CustomField name={'time'} translationFrom={'interest-rate'} placeholder='1' />
            { errors.time && touched.time ? 
            (
              <CustomError error={errors.time} />
            )
            :
            null
            }
            <Button text={'btn.calculate'} />
          </Form>
        )}
      </Formik>
      <Result result={`${interest}%`}  text='interest-rate.title'/>
    </>
  );
}

export default InterestRate;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    }
  }
}