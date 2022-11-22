import React from 'react';
import '../../dist/output.css';
/**
 * 
 * @returns {Title} Component for diferent titles
 */
const Title = ({ title }) => {
  return (
    <div className='md:ml-20 ml-6 my-6'>
      <p className='md:text-6xl text-4xl text-slate-800'>{ title }</p>
    </div>
  );
}

export default Title;
