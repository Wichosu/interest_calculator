import React from 'react';

const Paragraph = ({ text }) => {
  return (
    <p className='max-w-2xl md:ml-20 ml-6 my-6 md:text-lg text-base text-slate-600'>
      { text }
    </p>
  );
}

export default Paragraph;
