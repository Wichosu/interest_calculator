import React from 'react';
import { useTranslation } from 'next-i18next';
/**
 * 
 * @returns {Title} Component for diferent titles
 */
const Title = ({ title }) => {
  const { t } = useTranslation();

  return (
    <h1 className='md:ml-20 ml-6 my-6 md:text-6xl text-4xl text-slate-800'>
      { t(title) }
    </h1>
  );
}

export default Title;
