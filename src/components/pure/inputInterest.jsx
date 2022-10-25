import React from 'react';

const InputInterest = () => {
  return (
    <div className='mb-3'>
      <label 
        className='my-3 text-start form-label'
        style={{fontSize: '1.5rem'}}
        htmlFor='interest'
      >
        Interest
      </label>
      <input 
        className='form-control'
        id='interest'
      />
    </div>
  );
}

export default InputInterest;
