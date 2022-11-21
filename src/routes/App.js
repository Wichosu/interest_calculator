import React, { useState } from 'react';
import '../dist/output.css';
import { Routes, Route, Outlet, Link } from 'react-router-dom';
import CompoundCalc from '../pages/compound/CompundCalc';
import Home from '../pages/home/Home';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/compound-interest' element={<CompoundCalc />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {

  const [menu, setMenu] = useState(false);

  return (
    <div className='md:flex'>
      <div onClick={() => setMenu(!menu)} className='text-4xl fixed top-9 left-96 md:hidden'>
        <ion-icon name={menu ? 'close' : 'menu'} />
      </div>
      <nav>
        <ul 
          className={
            menu ? 
            'z-10 pt-10 px-8 h-screen fixed justify-items-start justify-start align-top text-start bg-white' 
            : 
            'md:block hidden pl-6 pt-10'
        }>
          <li className='text-slate-900 text-2xl mb-4'>
            Finance options
            <hr />
          </li>
          <li className='text-blue-500 mb-4 hover:underline'>
            <Link to='/'>Home</Link>
          </li>
          <li className='text-blue-500 mb-4 hover:underline'>
            <Link to='/compound-interest'>Compound Interest Calculator</Link>
          </li>
        </ul>
      </nav>
      <hr className='border-l-2 border-slate-200 md:h-screen md:block hidden ml-4'/>
      <Outlet />
    </div>
  );
}
