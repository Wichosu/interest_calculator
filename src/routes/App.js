import React, { useState, useEffect } from 'react';
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

  const links = [
    {name: 'Home', link: '/'},
    {name: 'Compound Interest Calculator', link: '/compound-interest'}
  ]

  function Collapse() {
    if(menu) setMenu(!menu);
  }

  function SwitchMenu() {
    if(window.matchMedia('(max-width: 768px').matches) {
      setMenu(!menu);
    }
  }

  useEffect(() => {
    window
      .matchMedia("(max-width: 768px)")
      .addEventListener('change', e => setMenu(e.matches));
  }, []);

  return (
    <div className='md:flex'>
      <div className='md:hidden sticky top-0 w-screen bg-slate-100'>
        <div 
          className='flex items-center pl-4 py-2 text-4xl md:hidden'
        >
          <ion-icon onClick={SwitchMenu} name={menu ? 'close' : 'menu'} />
          <p className='mx-auto'>Finance App</p>
        </div>
      </div>
      <nav>
        <ul 
          className={
            menu ? 
            'z-10 pt-10 px-8 h-screen fixed bg-white' 
            : 
            'md:block hidden pl-6 pt-10'
          }
        >
          <li className='text-slate-900 text-2xl mb-4'>
            Finance options
            <hr />
          </li>
          {
            links.map((link, index) => (
              <li key={index} className='text-blue-500 mb-4 hover:underline'>
                <Link onClick={SwitchMenu} to={link.link}>{link.name}</Link>
              </li>
            ))
          }
        </ul>
      </nav>
      <hr className='border-l-2 border-slate-200 md:h-screen md:block hidden ml-4'/>
      <div onClick={Collapse}>
        <Outlet />
      </div>
    </div>
  );
}
