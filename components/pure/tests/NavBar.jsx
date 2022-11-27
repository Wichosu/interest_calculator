import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Link from "next/link";

function Navbar() {

  const [menu, setMenu] = useState(false);
  const { t } = useTranslation();

  const links = [
    {name: 'home', link: '/'},
    {name: 'compound-interest', link: '/compound-interest'},
    {name: 'debt-capacity', link: '/debt-capacity'},
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
      <div className='border-r w-1/5'>
        <nav className='sticky top-0'>
          <ul 
            className={
              menu ? 
              'w-3/4 z-10 pt-10 px-8 h-screen fixed bg-slate-50 shadow-2xl animate-slide' 
              : 
              'md:block hidden pl-6 pt-10 mr-4'
            }
          >
            <li className='flex place-content-evenly mb-4'>
              {Object.keys(lngs).map((lng) => (
                <button 
                  type='submit' 
                  key={lng} 
                  onClick={() => i18next.changeLanguage(lng)} 
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
      </div>
      <div>
        <hr className='border-l-2 border-slate-200 md:h-screen md:sticky hidden ml-4'/>
      </div>
      <div onClick={Collapse}>
      </div>
    </div>
  );
}

export default Navbar;