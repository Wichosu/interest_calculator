import React from 'react';
/**
 * 
 * @returns {Subtitle} Component for diferent subtitles
 */
const SubTitle = ({ title }) => {
  return (
    <h1 className='md:ml-20 ml-6 my-6 md:text-4xl text-2xl text-slate-700'>
      { title }
    </h1>
  );
}

export default SubTitle;
