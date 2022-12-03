import React from 'react';
import Title from '../components/pure/Title';
import CustomError from '../components/pure/CustomError';
import CustomField from '../components/pure/CustomField';
import Button from '../components/pure/Button';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const formSchema = Yup.object().shape({

})


const DebtPayment = () => {
  return (
    <>
      <Title title={'debt-payment.title'} />
    </>
  );
}

export default DebtPayment;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    }
  }
}