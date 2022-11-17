import React, { useState, useRef, useContext, createContext } from 'react';
import CompoundGraph from '../graph/CompoundGraph';
import { DataSchema } from '../../models/DataSchema.class';
const formContext = createContext(null);

// !Document code
// !Validate Form
// ? Ideas: Mobile view, Switch lang es or en, multiple calculators

/**
 * Styles for labels and icons
 * @returns {fontSize} 1.2rem
 */
const labelStyle = {
  fontSize: '1.2rem'
}

/**
 * Color for Graph and icons
 * @returns {principal} #3CB9C3 Blue 
 * @returns {interest} #FFDE00 Yellow 
 * @returns {amount} #53C43B Green 
 * @returns {cursor} #FAFAFA Gray 
 */
const fillColors = {
  principal: "#3CB9C3",
  interest: "#FFDE00",
  amount: "#53C43B",
  cursor: "#FAFAFA",
}

/**
 * @returns {Form} Component with compound interest calculator.
 */
const Form = () => {

  const [result, setResult] = useState(0);
  const [data, setData] = useState([{}]);
  const valuePrincipal = useRef();
  const valueInterest = useRef();
  const valueTime = useRef();

  /**
   *Calculates the final amount 
   * @param {*} form Tag from html
   * @returns {result} Number. amount after interest
   * @returns {data} Array. Contains objects with data for barchart
   */
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
        new DataSchema(
          `Year ${time}`,
          prin.toFixed(2),
          amount.toFixed(2),
          interestProfit.toFixed(2),
        )
      );
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
            <i 
              className='mx-3 bi bi-square-fill' 
              style={{color: fillColors.principal}}
            />
            <i 
              className='bi bi-cash' 
              style={{color: fillColors.principal, fontSize: labelStyle.fontSize}}
            />
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
            <i 
              className='mx-3 bi bi-square-fill' 
              style={{color: fillColors.interest}}
            />
            <i 
              className='bi bi-percent'
              style={{color: fillColors.interest, fontSize: labelStyle.fontSize}}
            />
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

/**
 * 
 * @returns {Amount} Displays total amount after interest
 */
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
        <i 
          className='mx-3 bi bi-square-fill' 
          style={{color: fillColors.amount}}
        />
        <i
          className='bi bi-cash-coin'
          style={{color: fillColors.amount, fontSize: labelStyle.fontSize}}
        />
      </p>
      <p className='lead'>
        { result }
      </p>
    </div>
  )
}

export default Form;
