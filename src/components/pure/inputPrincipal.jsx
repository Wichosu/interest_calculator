import React from 'react';

const inputPrincipal = () => {
  return (
    <div className='row'>
      <label className='my-3 text-start form-label' style={{fontSize: '1.5rem'}} htmlFor='input'>Principal</label>
      <input className='form-control' id='input'/>
    </div>
  );
}

export default inputPrincipal;
