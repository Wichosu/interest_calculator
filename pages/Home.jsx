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
      <Title title={t('home')} />
      <section>
        <article>
          <SubTitle title={t('sub1')} />
          <Paragraph text={t('p1', { joinArrays: ' '})} />
          <SubTitle title={t('sub2')} />
          <Paragraph text={t('p2', { joinArrays: ' '})} />
          <SubTitle title={t('sub3')} />
          <Paragraph text={t('p3', { joinArrays: ' '})} />
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
