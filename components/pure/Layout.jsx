import React from 'react';
import Navbar from './Navbar';


export default function Layout({ children }) {
  return (
    <div className='md:flex'>
      <Navbar />
      <main>{ children }</main>
    </div>
  )
}