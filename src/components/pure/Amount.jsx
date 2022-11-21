import React from 'react';
import '../../dist/output.css';

/**
 * 
 * @returns {Amount} Displays total amount after interest
 */
const Amount = ({ result }) => {

  return (
    <div className='mt-10'>
      <p className='flex'>
        <strong className='text-slate-800'>Amount</strong>
        <p className='ml-3 mt-1 rounded h-4 w-4 bg-emerald-400' />
      </p>
      <p className='text-slate-900'>
        { result }
      </p>
    </div>
  )
}

export default Amount;