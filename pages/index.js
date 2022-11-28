import React, { useState, useEffect} from 'react';
import Home from './Home.jsx';
import Navbar from '../components/pure/Navbar.jsx';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { CgMenu } from 'react-icons/cg';
import Title from '../components/pure/Title.jsx';
import SubTitle from '../components/pure/Subtitle.jsx';

export default function Index() {
  
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    window
      .matchMedia("(max-width: 768px)")
      .addEventListener('change', () => setMenu(false))
  }, []);

  return (
    <>
      <div className='sticky top-0 bg-slate-100'>
        <div className='flex items-center'>
          <CgMenu 
            onClick={() => setMenu(!menu)}
            className='ml-2'
          />
          <div className='mx-auto'>Finance App</div>
        </div>
      </div>
      <div className='flex'>
        <Navbar menu={menu} />
        <Home />
      </div>
    </>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'footer'])),
    },
  };
}