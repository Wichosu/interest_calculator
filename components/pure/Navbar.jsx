import React, { useState, useEffect} from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { CgMenu } from 'react-icons/cg';

function Navbar() {

  const { t } = useTranslation()
  const router = useRouter();
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    window
      .matchMedia("(max-width: 768px)")
      .addEventListener('change', () => setMenu(false));
  }, []);

  function switchMenu() {
    if(window.matchMedia("(max-width: 768px").matches){
      setMenu(!menu);
    } 
  }

  const lngs = {
    en: { nativeName: 'English'},
    es: { nativeName: 'Español'},
  }

  let links = [
    {name: t('home'), href: '/'},
    {name: t('compound-interest'), href: '/compound-interest'},
    {name: t('debt-capacity'), href: '/debt-capacity'}
  ];

  return (
    <>
      <div className='md:hidden sticky top-0'>
        <div className='flex items-center bg-slate-50 py-2'>
          <CgMenu 
            onClick={switchMenu}
            className='ml-6 text-2xl text-slate-900'
          />
          <div className='mx-auto text-xl text-slate-900'>Finance App</div>
        </div>
      </div>
      <div className='md:border-r-2 md:w-1/5 md:px-4'>
        <div className='md:sticky md:top-0'>
          <nav 
            className={ menu ?
              'fixed w-3/4 h-screen bg-slate-50 pt-4 px-6'
              :
              'md:block hidden'}
          >
            <ul>
              <li className='flex place-content-evenly text-slate-600 md:pt-8'>
                {
                  Object.keys(lngs).map((lng) => {
                    const { pathname, query, asPath, locale } = router;
                    return (
                      <Link
                        key={lng}
                        href={{pathname, query}}
                        as={asPath}
                        locale={lng}
                        legacyBehavior
                      >
                        <button 
                          className={`border rounded py-0 px-2
                            ${locale === lng ? 
                              `text-slate-300 border-slate-200 cursor-default` 
                              : 
                              `border-slate-400 cursor-pointer`
                            }
                          `}
                          disabled={locale === lng}
                        >
                          {lngs[lng].nativeName}
                        </button>
                      </Link>
                    )
                  })
                }
              </li>
              <li className='text-slate-700 text-2xl my-4'>
                { t('nav') }
                <hr />
              </li>
              {
                links.map((link, index) => {
                  const { pathname } = router;
                  return (
                    <li 
                      key={index}
                      className='text-blue-500 mb-4'
                    >
                      <Link 
                        href={link.href}
                        legacyBehavior
                      >
                        <button
                          className={link.href === pathname ?
                            'text-slate-300 text-start'
                            :
                            'hover:underline text-start' 
                          }
                          onClick={switchMenu}
                          disabled={link.href === pathname}
                        >
                          {link.name}
                        </button>
                      </Link>
                    </li>
                  )
                })
              }
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
}

export default Navbar;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'footer'])),
    },
  };
}