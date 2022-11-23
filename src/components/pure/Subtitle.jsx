import React from 'react';
import '../../dist/output.css';
/**
 * 
 * @returns {Subtitle} Component for diferent subtitles
 */
const SubTitle = ({ title }) => {
  return (
    <h1 className='md:ml-20 ml-6 my-6 md:text-4xl text-2xl text-slate-600'>
      { title }
    </h1>
  );
}

export default SubTitle;
