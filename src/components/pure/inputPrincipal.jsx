import React from 'react';

const inputPrincipal = () => {
  return (
    <div className='mb-3'>
      <label 
        className='my-3 text-start form-label' 
        style={{fontSize: '1.5rem'}} 
        htmlFor='principal'
      >
        Principal
      </label>
      <input 
        className='form-control' 
        id='principal'/>
    </div>
  );
}

export default inputPrincipal;
