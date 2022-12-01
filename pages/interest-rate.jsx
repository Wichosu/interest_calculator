import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Formik, Form } from 'formik';
import { useTranslation } from 'next-i18next';
import * as Yup from 'yup';
import Title from '../components/pure/Title';
import CustomField from '../components/pure/CustomField';
import CustomError from '../components/pure/CustomError';
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
            <Button text={'Calculate'} />
          </Form>
        )}
      </Formik>
      <Capacity capacity={2}/>
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

export default InterestRate;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    }
  }
}