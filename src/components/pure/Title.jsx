import React from 'react';
import '../../dist/output.css';
/**
 * 
 * @returns {Title} Component for diferent titles
 */
const Title = ({ title }) => {
  return (
    <div>
      <p className='my-6 text-6xl text-slate-800 font-normal'>{ title }</p>
    </div>
  );
}

export default Title;
