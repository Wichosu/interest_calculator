import React from 'react';
import '../../dist/output.css';
/**
 * 
 * @returns {Title} Component for diferent titles
 */
const Title = ({ title }) => {
  return (
    <h1 className='md:ml-20 ml-6 my-6 md:text-6xl text-4xl text-slate-800'>
      { title }
    </h1>
  );
}

export default Title;
