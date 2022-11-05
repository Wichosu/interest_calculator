import React, { useState, useRef } from 'react';
import InputAmount from '../pure/InputAmount';
// import InputInterest from '../pure/InputInterest';
// import InputPrincipal from '../pure/InputPrincipal';
// import InputTime from '../pure/InputTime';

const Form = () => {

  const [result, setResult] = useState();
  const valuePrincipal = useRef();

  return (
    <form>
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
          id='principal'
          ref={valuePrincipal}
        />
      </div>
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
      <InputAmount 
        amount={result}
      />
      <button className='btn btn-success my-4'>Calculate</button>
    </form>
  );
}

export default Form;
