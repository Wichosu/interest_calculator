import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Formik, Field, Form } from 'formik';
import { useTranslation } from 'next-i18next';
import Title from '../components/pure/Title';
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

export default InterestRate;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    }
  }
}