import React, { useState, useRef, useContext, createContext } from 'react';
import CompoundGraph from '../graph/CompoundGraph';

const formContext = createContext(null);

// ?Important Optimize code (don't use that many variables)
// ?Apply better styles, some colors on the graph
// ?Document code

/**
* Styles
*/

const labelStyle = {
  fontSize: '1.2rem'
}

const Form = () => {

  const [result, setResult] = useState(0);
  const [data, setData] = useState([{}]);
  const valuePrincipal = useRef();
  const valueInterest = useRef();
  const valueTime = useRef();

  const getAmount = (form) => {
    form.preventDefault();
    const principal = valuePrincipal.current.value;
    const interest = valueInterest.current.value / 100;
    const Time = valueTime.current.value;
    const formula = principal * Math.pow((1 + interest), Time);
    setResult(formula.toFixed(2));
    // TODO Optimize this block
    let tempArray = [];
    let prin = Number(principal);
    let amount = Number(principal);
    let interestProfit = 0;
    for(let time = 1; time <= Time; time++) {
      interestProfit = amount * interest;
      prin = amount;
      amount = amount * (1 + interest);
      tempArray.push(
        {
          name: `Year ${time}`,
          principal: prin.toFixed(2),
          amount: amount.toFixed(2),
          interest: interestProfit.toFixed(2), 
        }
      )
    }
    setData(tempArray);
  }

  return (
    <formContext.Provider value={{result}}>
      <div style={{display: 'flex'}}>
        <form onSubmit={getAmount} style={{width: '14rem'}}>
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
        <CompoundGraph data={data} />
      </div>
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
