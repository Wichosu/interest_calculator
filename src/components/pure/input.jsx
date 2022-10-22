import React from 'react';

const Input = (props) => {
  return (
    <div className='row'>
      <label className='my-3 text-start' htmlFor='input'>{props.label}</label>
      <input id='input'/>
    </div>
  );
}

export default Input;
