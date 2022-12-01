import React from 'react';
import { useTranslation } from 'next-i18next';

function Result({ capacity, text }) {

  const { t } = useTranslation();

  return (
    <div className='md:ml-20 ml-5 mt-8'>
      <p className='text-slate-900'>{ t(text) }</p>
      <p className='text-slate-900 text-2xl underline'>{ capacity }</p>
    </div>
  )
}

export default Result;