import React from 'react';
import Title from '../components/pure/Title';
import SubTitle from '../components/pure/Subtitle';
import Paragraph from '../components/pure/Paragraph';
import { useTranslation } from 'react-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Home = () => {

  const { t } = useTranslation();

  return(
    <div>
      <Title title={t('home.title')} />
      <section>
        <article>
          <SubTitle title={t('home.sub1')} />
          <Paragraph text={t('home.p1', { joinArrays: ' '})} />
          <SubTitle title={t('home.sub2')} />
          <Paragraph text={t('home.p2', { joinArrays: ' '})} />
          <SubTitle title={t('home.sub3')} />
          <Paragraph text={t('home.p3', { joinArrays: ' '})} />
        </article>
      </section>
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

export default Home;
