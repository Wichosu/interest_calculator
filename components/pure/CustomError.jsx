import React from 'react';

function CustomError({ error }) {
  return (
    <div className='text-red-600 ml-6 md:ml-20'>{ error }</div>
  )
}

export default CustomError;
