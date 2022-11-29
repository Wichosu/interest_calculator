import '../styles/globals.css';
import './styles/styles.css';
import { appWithTranslation } from 'next-i18next';
import Layout from '../components/pure/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default appWithTranslation(MyApp);
