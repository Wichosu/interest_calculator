import React from 'react';
import { Field } from 'formik';
import { useTranslation } from 'next-i18next';

function CustomField({ name, translationFrom, placeholder }) {

  const { t } = useTranslation();

  return (
    <label className='block md:ml-20 md:mt-6 ml-5 mt-4'>
      <span className='block mb-1 text-slate-900 capitalize'>{ t(`${translationFrom}.${name}`) }</span>
      <Field
        name={name}
        className='border-b-2 border-slate-200 outline-none'
        placeholder={placeholder}
        type='number'
      />
    </label>
  )
}

export default CustomField;