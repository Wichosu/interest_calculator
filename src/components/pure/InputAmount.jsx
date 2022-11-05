import React from 'react';

const InputAmount = () => {

/**
 * TODO: Make sure inputs only accept numbers and percentage in the case of interest
 */

  return (
    <div>
      <label 
        className='my-3 text-start form-label'
        style={{fontSize: '1.5rem'}}
        htmlFor='amount'
      >
        Amount
      </label>
      <input 
        className='form-control'
        id='amount'
      />
    </div>
  );
}

export default InputAmount;
