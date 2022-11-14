import React, { useState, useRef, useContext, createContext } from 'react';

const formContext = createContext(null);

/**
* Styles
*/

const labelStyle = {
  fontSize: '1.2rem'
}

const Form = () => {

  const [result, setResult] = useState(0);
  const valuePrincipal = useRef();
  const valueInterest = useRef();
  const valueTime = useRef();

  const getAmount = (form) => {
    form.preventDefault();
    const principal = valuePrincipal.current.value;
    const interest = valueInterest.current.value / 100;
    const time = valueTime.current.value;
    const formula = principal * Math.pow((1 + interest), time);
    setResult(formula.toFixed(2));
  }

  return (
    <formContext.Provider value={{result}}>
      <form onSubmit={getAmount} style={{width: '500px'}}>
        <div className='mb-3'>
          <label 
            className='my-3 text-start form-label' 
            style={labelStyle} 
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
            style={labelStyle}
            htmlFor='interest'
          >
            Interest
          </label>
          <input 
            className='form-control'
            id='interest'
            ref={valueInterest}
          />
        </div>
        <div>
          <label 
            className='my-3 text-start form-label'
            style={labelStyle}
            htmlFor='time'
          >
            Time
          </label>
          <input 
            className='form-control'
            id='time'
            ref={valueTime}
          />
        </div>
        <Amount />
        <button className='btn btn-success my-4'>Calculate</button>
      </form>
    </formContext.Provider>
  );
}

const Amount = () => {
  const {
    result
  } = useContext(formContext);

  return (
    <div>
      <p className='my-3'>
        <strong>
          Amount
        </strong>
      </p>
      <p className='lead'>
        { result }
      </p>
    </div>
  )
}

export default Form;
