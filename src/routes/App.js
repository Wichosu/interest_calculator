import React, { useState, useEffect } from 'react';
import '../dist/output.css';
import { Routes, Route, Outlet, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import CompoundCalc from '../pages/compound/CompundCalc';
import Home from '../pages/home/Home';
import DebtCapacity from '../pages/capacity/DebtCapacity';
import i18next from 'i18next';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/compound-interest' element={<CompoundCalc />} />
          <Route path='/debt-capacity' element={<DebtCapacity />} />
        </Route>
      </Routes>
    </div>
  );
}

/**
 * 
 * @returns Navbar and outlet(content of my website)
 */
function Layout() {

  const [menu, setMenu] = useState(false);
  const { t } = useTranslation();

  const links = [
    {name: t('home'), link: '/'},
    {name: t('compound-interest'), link: '/compound-interest'},
    {name: t('debt-capacity'), link: '/debt-capacity'},
  ];

  const lngs = {
    en: { nativeName: 'English'},
    es: { nativeName: 'Español'}
  };

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
      .addEventListener('change', () => setMenu(false));
  }, []);

  return (
    <div className='md:flex'>
      <div className='md:hidden sticky top-0 w-screen bg-slate-50 shadow-sm'>
        <div 
          className='flex text-slate-700 items-center pl-4 py-2 text-4xl md:hidden'
        >
          <ion-icon onClick={SwitchMenu} name={menu ? 'close' : 'menu'} />
          <p className='mx-auto text-2xl text-slate-700'>Finance App</p>
        </div>
      </div>
      <nav>
        <ul 
          className={
            menu ? 
            'z-10 pt-10 px-8 h-screen fixed bg-slate-50 shadow-2xl' 
            : 
            'md:block hidden pl-6 pt-10'
          }
        >
          <li className='flex place-content-evenly mb-4'>
            {Object.keys(lngs).map((lng) => (
              <button 
                type='submit' 
                key={lng} 
                onClick={() => i18next.changeLanguage(lng)} 
                disabled={i18next.resolvedLanguage === lng}
                className={`border rounded px-2 py-1
                  ${
                    i18next.resolvedLanguage === lng ?
                    'text-slate-300 border-slate-200' 
                    : 
                    'text-slate-500 border-slate-400'
                  }
                `}
              >
                {lngs[lng].nativeName}
              </button>
            ))}
          </li>
          <li className='text-slate-700 text-2xl mb-4'>
            {t('nav')}
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
