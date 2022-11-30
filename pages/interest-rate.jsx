import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Formik, Form } from 'formik';
import Title from '../components/pure/Title';
import CustomField from '../components/pure/CustomField';
import * as Yup from 'yup';

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
  return (
    <>
      <Title title={'Interest Rate'} />
      <Formik
        initialValues={{amount: '', principal: '', time: ''}}
        validationSchema={formSchema}
        onSubmit={(values) => alert(JSON.stringify(values))}
      >
        {({errors, touched}) => (
          <Form>
            <CustomField name={'amount'} placeholder='100' />
          </Form>
        )}

      </Formik>
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