import React from 'react';

const Button = ({ text }) => {
  return (
    <button 
      className='mt-10 ml-6 md:ml-20
        px-4 py-1 rounded bg-lime-400 text-slate-800 hover:shadow capitalize' 
      type='submit'
    >
      { text }
    </button>
  );
}

export default Button;
