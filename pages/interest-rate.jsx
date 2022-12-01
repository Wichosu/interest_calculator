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
  amount: Yup.number()
    .positive('Must be positive!')
    .required('Required!'),
  principal: Yup.number()
    .positive('Must be positive!')
    .required('Required!'),
  time: Yup.number()
    .positive('Must be positive!')
    .required('Required!')
})

//Formula: Interest = (Amount / Principal) ^ (1 / Time) - 1

const InterestRate = () => {
  
  const [interest, setInterest] = useState();

  const getInterest = (values) => {
    const amount = Number(values.amount);
    const principal = Number(values.principal);
    const time = Number(values.time);
    const interest = (Math.pow((amount / principal), (1 / time)) - 1) * 100;
    setInterest(interest);
  }

  return (
    <>
      <Title title={'Interest Rate'} />
      <Formik
        initialValues={{amount: '', principal: '', time: ''}}
        validationSchema={formSchema}
        onSubmit={(values) => getInterest(values)}
      >
        {({errors, touched}) => (
          <Form>
            <CustomField name={'amount'} placeholder='100' />
            { errors.amount && touched.amount ? 
            (
              <CustomError error={errors.amount} />
            )
            :
            null
            }
            <CustomField name={'principal'} placeholder='80' />
            { errors.principal && touched.principal ? 
            (
              <CustomError error={errors.principal} />
            )
            :
            null
            }
            <CustomField name={'time'} placeholder='1' />
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
      <Result result={`${interest}%`}  text='Interest Rate'/>
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