import React from 'react';
import { useTranslation } from 'react-i18next';

const Button = ({ text }) => {

  const { t } = useTranslation();

  return (
    <button 
      className='mt-10 ml-6 md:ml-20
        px-4 py-1 rounded bg-lime-400 text-slate-800 hover:shadow capitalize' 
      type='submit'
    >
      { t(text) }
    </button>
  );
}

export default Button;
