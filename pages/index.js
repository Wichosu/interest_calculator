import Home from './Home.jsx';
import Navbar from '../components/pure/Navbar.jsx';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Index() {
  return (
    <div className='flex'>
      <Navbar />
      <Home />
    </div>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'footer'])),
    },
  };
}