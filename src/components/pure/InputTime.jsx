import React from 'react';

const InputTime = () => {
  return (
    <div>
      <label 
        className='my-3 text-start form-label'
        style={{fontSize: '1.5rem'}}
        htmlFor='time'
      >
        Time
      </label>
      <input 
        className='form-control'
        id='time'
      />
    </div>
  );
}

export default InputTime;
