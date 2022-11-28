import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

function Navbar({ menu }) {

  const { t } = useTranslation()
  const router = useRouter();

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
    <div>
      <nav 
        className={ menu ?
          'fixed bg-slate-200 h-screen'
          :
          'hidden'}
      >
        <ul
          className='mt-8'
        >
          <li>
            {
              Object.keys(lngs).map((lng) => {
                const { pathname, query, asPath } = router;
                return (
                  <Link
                    key={lng}
                    href={{pathname, query}}
                    as={asPath}
                    locale={lng}
                    legacyBehavior
                  >
                    {lngs[lng].nativeName}
                  </Link>
                )
              })
            }
          </li>
          {
            links.map((link, index) => (
              <li key={index}>
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))
          }
        </ul>
      </nav>
    </div>
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